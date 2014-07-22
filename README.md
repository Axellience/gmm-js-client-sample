gmm-js-client-sample
====================

This project contains some examples of using the GenMyModel API (https://api.genmymodel.com/doc) in JavaScript.

# Examples

## Get public projects list
Simply list the first page of public projects in GenMyModel repository (https://repository.genmymodel.com).

### Explanation
This demo works as follow :
 1. Get the list of public project by sending a GET to https://api.genmymodel.com/projects/public
 2. Create the list of public projects in the DOM

### Live demo
In pure JS :
 http://plnkr.co/edit/YoVT9y015vgI81zbNcjE?p=preview

Using JQuery :
 http://plnkr.co/edit/KTqy4xqy4bZ6oiNuuJqb?p=preview

## Get private projects from a User
Get the list of private projects from a user account and displays it.

### Explanation
This demo works as follow :
 1. Use an OAuth2 flow to authenticate user
 2. Get the list of user private project by sending a GET to https://api.genmymodel.com/projects/my
 3. Create the list of user's projects in the DOM

To see how the OAuth flow works, check here :
 https://repository.genmymodel.com/a.baron/GMM-js-client-sample/OAuth-Client-flow/1

### Live demo
These demo requires you to be logged in to GenMyModel :
 https://api.genmymodel.com/login

In pure JS :
 http://plnkr.co/edit/r9WdO187BblKxoTTV3hC?p=preview

Using JQuery :
 http://plnkr.co/edit/0gjSCVix64UQ8xNdM7D2?p=preview


## Update Model from a User's project
Update the model from a given project by sending a command to the API.

### Explanation
This demo works as follow :
 1. Use an OAuth2 flow to authenticate user
 2. Get the list of user private project by sending a GET to https://api.genmymodel.com/projects/my
 4. Click on a project to select it
 5. Set the path to the element to change. A class name MyClass in the package myPackage as the following path : //myPackage/MyClass
 6. Set the new name of your element
 7. Click "Send request"
 8. It sends a POST to https://api.genmymodel.com/projects/PROJECT_ID/commands

You can see the changes live in the genmymodel editor if it's opened on this project.

### Live demo
These demo requires you to be logged in to GenMyModel :
 https://api.genmymodel.com/login
 
Using JQuery :
 http://plnkr.co/edit/GjJ6tuo1KiG2woCE8ulb?p=preview