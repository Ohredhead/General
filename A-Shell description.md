#free #ipad #ide #unix 
 [Nicolas Holzschuch’s](https://github.com/holzschu)  _[_a-Shell_](https://holzschu.github.io/a-Shell_iOS/)_ app. _a-Shell_ gives you a Unix-style terminal on your iPad or iPhone and it’s completely free.

[Click here to open a-Shell in the Apple Store](https://apps.apple.com/us/app/a-shell/id1473805438) →

Once you install and open _a-Shell_, type `help` to get a quick overview of the app:

![](https://davidamos.dev/content/images/2022/01/349206BA-BB7A-4605-A9DE-9F74019AA23E.png)

_a-Shell_ comes with `vim` and `ed` for editing files, and it includes Python 3.9 out-of-the box. Here’s what editing a Python file in `vim` looks like:

![](https://davidamos.dev/content/images/2022/01/8AD7C719-545E-471A-8961-F4A9CA44C076.png)

**Tip:** If you use Apple’s Magic Keyboard for iPad, then you don’t have a physical `Esc` key. This makes working in vim painful until you figure out that `Cmd + .` works like `Esc`. If you'd like, you can change `Caps Lock`to work as `Esc` in _a-Shell_’s settings.  
  
You can also map the globe key on the Magic Keyboard to function as `Esc` in the Settings app.

_a-Shell_ plays nicely with iPadOS 15’s multi-tasking features. You can open new windows, put _a-Shell_ side-by-side with another app, and — my favorite — use _a-Shell_ in slideover mode.

I do a lot of reading on my iPad. When I come across something that I want to check in the Python REPL, it’s incredibly helpful to be able to swipe in from the right-hand-side of my iPad, quickly check something in the REPL, and then dismiss the app by swiping right:

![](https://davidamos.dev/content/images/2022/01/B8CCB8BE-7EEF-4837-9081-2A3745B01800.png)

You can install Python packages using `pip` in _a-Shell_ as long as those package are pure Python. This is admittedly a serious limitation for a lot of folks, but it does allow you to install some pretty awesome packages — including [Will McGugan’s](https://twitter.com/willmcgugan) awesome [rich](https://github.com/Textualize/rich) library:

![](https://davidamos.dev/content/images/2022/01/95207A61-DF25-4881-97AE-7E45F42779CE.png)

Besides being a great way to use Python on your iPad, _a-Shell_ has a lot of other useful features. You can navigate your iPad’s file system, transfer files using `curl`, generate SSH keys, SSH into remote servers, and more. You can even write programs in C and C++ and _run them on your iPad_ 🤯

One of _a-Shell_’s major downsides is the lack of support for Python virtual environments. This means _a-Shell_ is great for testing things out, or for doing some basic, pure-Python programming, but it’s not very well suited to professional development.