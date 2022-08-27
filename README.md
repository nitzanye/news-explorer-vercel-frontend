# News Explorer App 

## Overview

- [Live Web App](https://www.news-nitzan.students.nomoredomainssbs.ru/)
- [About the project](#about-the-project)
- [Features of the App](#features-of-the-app)
- [Technologies Used](#technologies-used)
- [Backend Repository](https://github.com/nitzanye/news-explorer-api)
- [Run locally](#Run-locally)

## About the project
Search and Save your favorite news articles for later reading.
A responsive website made in ReactJS 

## Features of the App

1. User can search for diffrents news articles by enteres specific keyword in the search bar.
2. User can save new articles, those articles will stored on the server.
3. User can delete articles if he wants too. The articles would be deleted from the server too.
4. The ability to save articles will only be possible for authorized users (the ones that already signed in).
5. The updated number of saved articles will be displayed on The page with saved news items.
6. There is input validation on all forms. (registration form and login form).
7. When the app loads the current user's information loaded from the server.
8. When the app loads user's saved articles loaded from the server.


## Technologies Used

**Built with**
- Client: React
- Server: Node, Express, MongoDB

**Techniques applied in this project**

**Responsive Web Design**

- Developing and interface for different devices: Mobile, Tablet, and Desktop.


**Git**

- Using branches, allows us to still work on the project without interfering with its live version.

**Webpack**

- Webpack is a bundling tool, helps to bundle resources.
  Using Webpack in this project, helps to reduce HTML and CSS file sizes, compile JS modules into one output script, and make sure that this app will work across all modern browsers.

**API**

- An API for user authentication and saving articles.
- News API- powered by [News API](https://newsapi.org/)


## Live Web App

[Live deployment](https://www.news-nitzan.students.nomoredomainssbs.ru/)

## Backend Repository

[Backend Repository](https://github.com/nitzanye/news-explorer-api)

## Run locally 

**Clone the project**
````$ git clone https://github.com/nitzanye/news-explorer-frontend.git````

**Install**
````$ cd news-explorer-frontend````
````$ npm i````

**Launch**
````$ npm run start````
