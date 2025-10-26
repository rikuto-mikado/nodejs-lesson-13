// Import Express framework and body-parser middleware
const express = require('express');
const bodyParser = require('body-parser');

// Initialize Express application
// This creates an instance of an Express app which will handle HTTP requests and responses
const app = express();

// Import route modules
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// Configure middleware to parse URL-encoded data from forms
// 'extended: false' uses the querystring library to parse data (simpler, suitable for basic forms)
// This middleware must be registered before route handlers to process incoming request bodies
app.use(bodyParser.urlencoded({extended: false}));

// Register route handlers
// Routes are matched in the order they are registered
// If a request matches a route in adminRoutes, it will be handled there and won't reach shopRoutes
app.use(adminRoutes);
app.use(shopRoutes);

// 404 Error Handler - Catch-all route for undefined paths
// This middleware is registered last and catches any requests that didn't match the above routes
// Returns a 404 status code with a "Page not found" message
app.use('/', (req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
});

// Start server on port 3000
app.listen(3000);
