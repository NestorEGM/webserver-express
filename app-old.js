const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'application/json' })
    let salida = {
        nombre: 'Nestor',
        edad: 24,
        url: req.url,
    }
    res.write(JSON.stringify(salida));
    // res.write('Hola mundo');
    res.end();
})
    .listen(8080);

console.log('Escuchando en 8080');