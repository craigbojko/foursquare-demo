# foursquare-demo

Demo was built with node v5.5.0, Angular v1.5 & Chrome v50

Requires npm and nodeJS as system dependancies

# Description

The web application will provide a text input to allow a user to submit a location name: e.g. London, it then queries this location against Foursquare and returns the results via the node app to the Angular frontend, which renders them to the page.

# To run:

`git clone https://github.com/pixelventures/foursquare-demo.git .`

`npm install`

`npm start`

The navigate to `http://localhost:1337/`

# About

- Demo is nodeJS/express based web application - backend requires in foursquare npm library for authentication and API interaction
- Express provides server endpoints to allow frontend Angular app to query against Foursquare Venue/Search API
- Angular app instantiates 2 controllers for location submission and view rendering - submits location to node server and upon response will update scope with results, which in turn will update UI

# Code Style/Assumptions

- Syntax formatting in line with StandardJS style (https://github.com/feross/standard)
- In production deployment - access keys would be handled better with session persistence etc.
- Would also use express.Router for handling endpoints and directing execution to additional controller modules (there's only a few here though)
- Angular wouldn't use $rootScope for event propagation in production, would opt for a more tight coupling between controllers to handle data piping
