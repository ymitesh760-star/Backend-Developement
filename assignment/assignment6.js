const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url === '/student') {

        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

        res.end(`
            <h2>Student Information</h2>

            <ul>
                <li>Name: Rahul Sharma</li>
                <li>Roll Number: 101</li>
                <li>Course:B Tech</li>
                <li>College: IIT Delhi </li>
                <li>Email: rahul414gmail.com</li>
                <li>Semester: 2</li>
            </ul>
        `);

    } else {

        res.writeHead(404, {
            'Content-Type': 'text/html'
        });

        res.end('<h1>Page Not Found</h1>');
    }
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});