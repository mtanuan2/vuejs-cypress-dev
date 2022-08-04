# vuejs-cypress-dev

## How to Run

Original: In project's root directory, execute: docker-compose up --build

## Code changes required (Meyer Tanuan)

1. To run without docker (need to bypass docker files)

a. Install MongoDB and MongoDB Compass (UI)

- add a new database: playground - add collection: events

b. Modify server/app.js

- const mongoDB = "mongodb://localhost:27017/playground"; // process.env.DATABASE;

c. server: npm start

- Result: Server is up and running on port number: 8081

2. Cypress events.spec.js (to support intercepting POST request/ mocking create event)

a. Modify client/src/main.js

- add a DOM object reference for Cypress

b. client: npm run serve

- Result: App running at Local: http://localhost:8080/
