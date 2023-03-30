# Snazzy Snacks 

Snazzy Snacks is a single page application built using React as frontend, with the support of Express and PostgresSQL as backend. It features monthly subscription service that delivers random assortment of snacks, based on one of three tiers. 

Snazzy Snacks was created in collaboration with [Katie Liu](https://github.com/thekatcodes) and [Samma Su](https://github.com/EuphieSS).

## Features

- Simple and colour-coordinated user interface
- User-friendly and intuitive navigation
- Responsive design
- Easy payment process through Stripe api
- Encrypted user passwords using bcrypt, cookie-session and cookie-parser

## Final Product

?? VIDEO OF APPLICATION ??

## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with the following information, and create corresponding database in PSQL 
  - username: `labber` 
  - password: `labber` 
  - database: `finals`
3. Install dependencies:
  - cd \client, then `npm install`
  - cd \server, then `npm install`

4. [Install Stripe CLI](https://stripe.com/docs/stripe-cli) and listen to webhooks
```
brew install stripe/stripe-cli/stripe
stripe login
stripe listen --forward-to localhost:8080/webhook
```

5. Fix to binaries for sass: `npm rebuild node-sass`

>Did we use sass? 

6. Reset database: 
  - To reset and repopulate the database, while in PSQL at the /final-project directory, follow these steps:
    - /i server/db/migrations/schema.sql
    - /i server/db/seeds/seeds/sql

## Deploying the application

Two terminals are needed to run this project - one in /server, and other in client. Ensure that you are logged in to psql, and have access to finals database. 

In /server
```sh
node express_server.js
```

In /client
```sh
npm start
```

## Project Stack

__Front-End:__ React, Axios, JSX, HTML, SASS, JavaScript

__Back-End:__ Express, Node.js, PostgreSQL

__API:__ Stripe

## Dependencies

### Frontend

- React
- React-dom
- React-router-dom
- React-router-hash-link
- React-scripts
- Axios
- Classnames
- Normalize.css
- Sass
- SweetAlert2
- Web-vitals

### Backend

- Node v12.22.x (WSL) or v15.14.0 (M1)
- Express
- PostgreSQL
- Cookie-parser
- Cookie-session
- Stripe

