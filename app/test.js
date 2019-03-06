const http = require('http');

const srv = http.createServer((request, response) => {
    response.setHeader('Content-type', 'text/html; charset=utf-8');
    response.end('<p>Well hello there</p>');
});

srv.listen(3000, () => {
    console.log('server running on port 3000');
})