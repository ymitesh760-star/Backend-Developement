const express = require("express");

const app = express();
const router = express.Router();

// Router-level middleware
function routerLogger(req, res, next) {
    const dateTime = new Date().toISOString();

    console.log(`${req.method} ${req.originalUrl} ${dateTime}`);

    next();
}

// Apply middleware only to this router
router.use(routerLogger);

// Routes
router.get("/students", (req, res) => {
    res.send("Students List");
});

router.get("/courses", (req, res) => {
    res.send("Courses List");
});

router.get("/faculty", (req, res) => {
    res.send("Faculty List");
});

// Mount router at /api
app.use("/api", router);

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});