// Import Express framework
const express = require('express');

// Create a new Router instance
// Router allows us to create modular, mountable route handlers
const router = express.Router();

// GET route for the homepage
// This route responds to GET requests at the root path '/'
router.get('/', (req, res, next) => {
  res.send('<h1>Hello from Express!</h1>');
});

// Export the router to be used in the main app.js file
module.exports = router;
