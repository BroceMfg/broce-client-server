// server/app.js
const express = require('express');
const path = require('path');
const http = require('http');
const dotenv = require('dotenv');

// .env file config
dotenv.config();
const app = express();

// Serve static assets
app.use(express.static(path.resolve(__dirname, 'build')));

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

http.createServer(app).listen(process.env.PORT, () => {
  console.log(`Express started in ${process.env.NODE_ENV}` +
      ` mode on ${process.env.PROTOCOL}://${process.env.ORIGIN}:${process.env.PORT}` +
      `; press Ctrl-C to terminate.`);
});
