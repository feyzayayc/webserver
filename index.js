const http = require('http');
const server = http.createServer((req, res) => {
    const url = req.url;
    console.log(url);

    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h2>Index Sayfasına hoşgeldiniz</h2>');
    }
    else if (url === '/hakkimda') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h2>Hakkımda Sayfası hoşgeldiniz</h2>');
    }
    else if (url === '/iletisim') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h2>İletisim Sayfası hoşgeldiniz</h2>');
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('404 not found');
    }
    res.end();
});
const port = 5000;
server.listen(port, () => {
    console.log(`sunucu port :${port}`);
});
