const http = require('http');

const server = http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.end(`
        <h5> ----------------------------------------</h5>
        <h2>Student Portal</h2>
        <h5> ----------------------------------------</h5>
        <p>Name: Sushant</p>
        <p>Course: B.Tech CSE</p>
        <p>College: ITM School of FutureTech</p>
        <p>Welcome to my Node.js application.</p>
    `);

});

server.listen(4040, () => {
    console.log('Server is running on http://localhost:4040');
});