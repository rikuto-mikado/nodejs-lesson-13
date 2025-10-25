// Import Express framework
const express = require('express');

// Create a new Router instance
// Router allows us to create modular, mountable route handlers
const router = express.Router();

// GET route to display the "Add Product" form
// This route responds to GET requests at /add-product
router.get('/add-product', (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  );
});

// POST route to handle form submission
// This receives the form data from /add-product and processes it
// req.body contains the parsed form data (thanks to body-parser middleware)
router.post('/product', (req, res, next) => {
  console.log(req.body);
  // Redirect user back to the homepage after processing
  res.redirect('/');
});

// Export the router to be used in the main app.js file
module.exports = router;
