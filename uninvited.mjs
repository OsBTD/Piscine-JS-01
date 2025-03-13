import http from 'http';
import fs from 'fs';
import url from 'url';

const port = 5000;

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    const parsedUrl = url.parse(req.url);
    const guest = parsedUrl.pathname.slice(1);
    if (!guest) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'server failed' }));
      return;
    }
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      let data;
      try {
        data = JSON.parse(body); // Try to parse as JSON
      } catch (e) {
        data = body; // If parsing fails, treat as a string
      }
      const file = `${guest}.json`;
      fs.writeFile(file, JSON.stringify(data), err => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'server failed' }));
        } else {
          res.writeHead(201, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(data));
        }
      });
    });
  } else {
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'server failed' }));
  }
});

server.listen(port, () => {
  console.log(port);
});