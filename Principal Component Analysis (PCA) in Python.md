## [[Principal Component Analysis (PCA) in Python]]

**Summary**  
The article introduces [[Principal Component Analysis]] (PCA) and how to implement it in [[Python]].

**Key Points**  
- Used to reduce the size of the data set ([[feature reduction]] and [[dimensionality reduction]])
- Used in areas such as [[image processing]], [[finance]], [[genetics]], and [[machine learning]]
- Main reasons to employ [[feature reduction]]: Efficiency, Interpretability, Noise Reduction
	- Efficiency: reduce computational cost for data-intensive processes
	- Interpretability: Lower dimensional data is easier to interpret and visualize in 2/3D
	- Noise Reduction: noisy features can be eliminated with this methodology
- Requirements: data is numerical, previously preprocessed, free of missing values, feature values standardized to avoid [[variance dominance]]
- [[Principal Components]]: new features derived from the original ones and orthogonal to each other.
- Use Scikit-learn package to implement with python
	- clean data
	- Separate data into 80-20 training-test data sets if doing supervised learning
	- Reprocess the data using a StandardScalar so that all features have equal contribution to variance computations. Then fit_transform/transform the data
	- PCA data: give a range between 0-1 for the number of principal components to retain
- Interpreting PCA output: check against output of higher dimensional data set for model accuracy. If comparable then your new data set is more efficient with reduced amount of data points.

**Relevant Tags**  
#Coding #Statistics #DataAnalyses  #DataScience #article #LLM #MachineLearning

**Metadata** 
Created:: [[2025-08-1]]
Published:: [[2025-07-04]]
Source:: [https://www.kdnuggets.com/gentle-introduction-principal-component-analysis-pca-in-python](https://www.kdnuggets.com/gentle-introduction-principal-component-analysis-pca-in-python)