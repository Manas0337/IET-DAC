
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url, true).query;
   const queryObject1 = url.parse(req.url, true).query;

  const fName = queryObject.fName || 'Manas';
   const LName = queryObject1.LName || 'Pawar';

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Hello Page</title>
      </head>
      <body>
        <h1>Hello ${fName} ${LName}</h1>
       
      </body>
    </html>
  `;

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
});


server.listen(5000, () => {
  console.log('Server running at http://localhost:5000');
});
