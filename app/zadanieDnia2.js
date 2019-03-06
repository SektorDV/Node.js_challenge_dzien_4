//Twój kod

const http = require('http');

const srv = http.createServer((request, response) => {
    let userAgent = request.headers['user-agent'];
    response.setHeader('Content-type', 'text/html; charset=utf-8');
    response.end(`<p style="margin: 0 auto; display: block; text-align: center;">Hi.<br> You're using ${userAgent}`)
});

srv.listen(3000, ()=>{
    console.log('started listening on port 3000');
})