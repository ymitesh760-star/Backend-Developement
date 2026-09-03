const express = require("express");

const app = express();

// Custom global middleware
function logger(req, res, next) {
    const dateTime = new Date().toISOString();

    console.log(`${req.method} ${req.url} ${dateTime}`);

    next();
}

// Middleware runs before every route
app.use(logger);

// Routes
app.get("/", (req, res) => {
    res.send("Welcome to Home Page");
});

app.get("/about", (req, res) => {
    res.send("About Us");
});

app.get("/contact", (req, res) => {
    res.send("Contact Information");
});

app.listen(3001, () => {
    console.log("Server running at http://localhost:3001");
});