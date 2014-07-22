gmm-js-client-sample
====================

This project contains several example of usage of the GenMyModel API (https://api.genmymodel.com/doc) in JavaScript.

# Examples

## Demo 1
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

##Demo 2
Get the list of private projects from a user account and displays it.

### Explanation
This demo works as follow :

1. Use an OAuth2 flow to authenticate user
2. Get the list of user private project by sending a GET to https://api.genmymodel.com/projects/my
3. Create the list of user's projects in the DOM

To see how the OAuth flow works, check there :
https://repository.genmymodel.com/a.baron/GMM-js-client-sample/OAuth%20Client%20flow/1

### Live demo
These demo requires you to be logged in to GenMyModel :
https://api.genmymodel.com/login

In pure JS :
http://plnkr.co/edit/r9WdO187BblKxoTTV3hC?p=preview

Using JQuery :
http://plnkr.co/edit/0gjSCVix64UQ8xNdM7D2?p=preview