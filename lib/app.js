const { parse } = require('url');
const { createServer } = require('http');
const fs = require('fs');


const app = createServer((req, res) => {
  const { pathname } = parse(req.url);

  const readFile = (path, callback) => {
    fs.readFile(path, { encoding: 'utf8' }, callback);
  };

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  if(pathname === '/index.html') {
    readFile('./public/index.html', (err, fileContent) => {
      if(err && err.code === 'ENOENT') {
        console.log('here');
        res.end('Not Found');
      }
      res.end(fileContent);
    });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

module.exports = app;
