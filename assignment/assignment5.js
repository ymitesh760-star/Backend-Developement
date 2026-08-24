const http = require('http');

const server = http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/html' });

    if (req.url == '/') {

        res.end(`
            <h1> My Portfolio</h1>

            <a href="/">Home</a> |
            <a href="/about">About Me</a> |
            <a href="/skills">Skills</a> |
            <a href="/projects">Projects</a> |
            <a href="/contact">Contact</a>

            <h2>Home Page </h2>
            
        `);

    } else if (req.url == '/about') {

        res.end(`

            <h1> My Portfolio</h1>
            

            <a href="/">Home</a> |
            <a href="/about">About Me</a> |
            <a href="/skills">Skills</a> |
            <a href="/projects">Projects</a> |
            <a href="/contact">Contact</a>

            <h2>About Me</h2>

            <p>My name is Sushant. I am a B.Tech CSE student.</p>
        `);

    } else if (req.url == '/skills') {

        res.end(`
          <h1> My Portfolio</h1>
          

            <a href="/">Home</a> |
            <a href="/about">About Me</a> |
            <a href="/skills">Skills</a> |
            <a href="/projects">Projects</a> |
            <a href="/contact">Contact</a>

            <h2>My Skills</h2>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>Node.js</p>
        `);

    } else if (req.url == '/projects') {

        res.end(`
            <h1> My Portfolio</h1>
            

            <a href="/">Home</a> |
            <a href="/about">About Me</a> |
            <a href="/skills">Skills</a> |
            <a href="/projects">Projects</a> |
            <a href="/contact">Contact</a>

            <h2>My Projects</h2>
            <p>Node.js Assignment</p>
            <p>Student Management System</p>
        `);

    } else if (req.url == '/contact') {

        res.end(`
            <h1> My Portfolio</h1>
            

            <a href="/">Home</a> |
            <a href="/about">About Me</a> |
            <a href="/skills">Skills</a> |
            <a href="/projects">Projects</a> |
            <a href="/contact">Contact</a>

            <h2>Contact Me</h2>
            <p>Email: sushant000gmail.com</p>
            <p>Phone: 1234567890</p>
        `);

    } else {

        res.writeHead(404, { 'Content-Type': 'text/html' });

        res.end(`
            <h1>404 - Page Not Found</h1>
        `);
    }

});

server.listen(2020, () => {
    console.log('Server is running on http://localhost:2020');
});