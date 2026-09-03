const express = require("express");

const app = express();
const PORT = 3000;

// Task 5: Request-Response Logging
app.use((req, res, next) => {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
});

// Task 1: Basic Routes

app.get("/", (req, res) => {
    res.send("Welcome to Home Page");
});

app.get("/about", (req, res) => {
    res.send("This is About Page");
});

app.get("/contact", (req, res) => {
    res.send("This is Contact Page");
});

// Task 2: Route Parameter

app.get("/user/:name", (req, res) => {
    res.send(`Hello ${req.params.name}`);
});

// Task 3: Multiple Route Parameters

app.get("/product/:id/:category", (req, res) => {
    res.send(
        `Product ID: ${req.params.id}, Category: ${req.params.category}`
    );
});

// Task 4: Query Parameters

app.get("/search", (req, res) => {
    res.send(`Name: ${req.query.name}, Role: ${req.query.role}`);
});

// Start Server

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});