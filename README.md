# foursquare-demo

Demo was built with node v5.5.0, Angular v1.5 & Chrome v50

# To run:
`git clone https://github.com/pixelventures/foursquare-demo.git .`
`npm install`
`npm start`

# About
- Demo is nodeJS/express based web application - backend requires in foursquare npm library for authentication and API interaction
- Express provides server endpoints to allow frontend Angular app to query against Foursquare Venue/Search API
- Angular app instantiates 2 controllers for location submission and view rendering - submits location to node server and upon response will update scope with results, which in turn will update UI

# Code Style
- Syntax formatting in line with StandardJS style (https://github.com/feross/standard)
- In production deployment - access keys would be handled better with session persistence etc.
- Would also use express.Router for handling endpoints and directing execution to additional controller modules (there's only a few here though)
- Angular wouldn't use $rootScope for event propagation in production, would opt for a more tight coupling between controllers to handle data piping
