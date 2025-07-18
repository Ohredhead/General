import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { glob } from 'glob';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const notesDir = path.resolve(__dirname, '../../');
const templatePath = 'Templates/Note Template.md';
const outputPath = path.resolve(__dirname, '../../context.md');

const files = await glob(`${notesDir}/**/*.md`, {
  ignore: [
    '${notesDir}/context.md',
    '**/README.md',
    '**/readme.md',
    '**/CHANGELOG.md',
    '**/LICENSE.md',
    '**/node_modules/**',
    '**/.git/**',
    '**/[0-9][0-9][0-9][0-9][0-9][0-9].md' // ignore yymmdd.md files
  ]
});

let summary = `# 🧠 Obsidian Vault Context\n\n`;

if (fs.existsSync(templatePath)) {
  const template = fs.readFileSync(templatePath, 'utf-8');
  summary += `## 📝 Note Template\n\n\`\`\`markdown\n${template.trim()}\n\`\`\`\n\n`;
}

summary += '## Notes Summary\n';

for (const file of files) {
  const content = fs.readFileSync(file, 'utf-8');
  const title = path.basename(file, '.md');

// Use the full content for tag/backlink parsing (no YAML assumptions)
const tags = [...content.matchAll(/#([a-zA-Z0-9/_-]+)/g)].map(m => m[1]);
const backlinks = [...content.matchAll(/\[\[([^\]]+)\]\]/g)].map(m => m[1]);

  summary += `\n### ${title}\n`;
  if (tags) summary += `- Tags: ${tags}\n`;
  if (backlinks.length) summary += `- Backlinks: ${backlinks.join(', ')}\n`;
}

fs.writeFileSync(outputPath, summary);
console.log(`✅ context.md generated with ${files.length} notes`);