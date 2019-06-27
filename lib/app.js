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

  readFile(`./public${pathname}`, (err, fileContent) => {
    if(err && err.code === 'ENOENT') {
      console.log('here');
      res.end('Not Found');
    } else {
      res.end(fileContent);
    }
    
  });
});

module.exports = app;
