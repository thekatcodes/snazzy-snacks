# Snazzy Snacks 

Snazzy Snacks is a single page application built using React as frontend, with the support of Express and PostgresSQL as backend. (!!!need more info)

Created in collaboration with [Katie Liu](https://github.com/thekatcodes) and [Samma Su](https://github.com/EuphieSS).

## Features

- Simple and colour-coordinated user interface
- User-friendly and intuitive navigation
- Responsive design
- Easy payment process
- Something about security feature???

## Final Product

?? VIDEO OF APPLICATION ??

## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information 
  - username: `labber` 
  - password: `labber` 
  - database: `finals`
3. Install dependencies:
  - cd \client, then `npm install`
  - cd \server, then `npm install`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Reset database: `npm run db:reset`
  - Check the db folder to see what gets created and seeded in the SDB
7. Run the servers, 
  - Note: nodemon is used, so you should not have to restart your server
8. Visit `http://localhost:8080/`

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## API Server/Database Setup

For full functionality, please ensure both the client and the API server are running concurrently.
- Fork and clone [this](https://github.com/lighthouse-labs/scheduler-api) repo
- Follow the steps outlined in README to set up database and API server

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

