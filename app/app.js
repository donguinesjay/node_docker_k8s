// Import the Express module
const express = require('express');

// Create an instance of an Express application
const app = express();
const port = 3000;

// Define a route for the home page ("/")
app.get('/', (req, res) => {
  console.log('Received a request to the home page');
  res.send('Hello, Express!');
});

app.get('/health', (req, res) => {
  console.log('Received a health check request');
  res.send('I am alive and healthy!');
});

app.get('/crash-kill', (req, res) => {
  console.log('Received a request to crash the app');
  res.send('Crashing app...');
  process.exit(1);
});

// Start the server and listen on port 3000
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});
