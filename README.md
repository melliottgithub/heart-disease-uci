# Jupyter Notebook Summary

## Overview

This Jupyter notebook contains a script for performing an analysis of heart disease data to predict the presence of heart disease in patients.

## Implementation Details

The model is developed using Python's popular machine learning library, scikit-learn and is trained on a labeled dataset of heart disease patient data. The model uses the KNN algorithm to make predictions based on the input data.

## How to use

To use the model, make a POST request to the endpoint `https://b7slwkrm25wuxx2lbgr6cuzise0zypvd.lambda-url.us-west-2.on.aws` with the following JSON data: 

## Json Example
# 
    {"model":"heat-disease","age":67,"sex":1,"cp":4,"chol":229,"fbs":0,"restecg":2,"thalach":129,"exang":1,"thal":7}


## Curl Example
# 
    curl -X POST 'https://b7slwkrm25wuxx2lbgr6cuzise0zypvd.lambda-url.us-west-2.on.aws/' -H 'Content-Type: application/json' -H 'Accept: application/json' -d '{"model":"week2_solution","age":67,"sex":1,"cp":4,"chol":229,"fbs":0,"restecg":2,"thalach":129,"exang":1,"thal":7}'

