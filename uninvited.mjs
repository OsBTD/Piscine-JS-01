import http from 'http';
import fs from 'fs/promises';
import path from 'path';
import url from 'url';

const port = 5000;

const server = http.createServer(async (req, res) => {
  if (req.method === 'POST') {
    const parsedUrl = url.parse(req.url);
    const guest = parsedUrl.pathname.slice(1);
    
    try {
      await fs.mkdir('guests', { recursive: true });
    } catch (err) {
      // console.log(err);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'server failed' }));
      return;
    }
    
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    
    req.on('end', async () => {
      let data;
      try {
        if (req.headers['content-type'] === 'application/json') {
          data = JSON.parse(body);
        } else {
          data = body;
        }
      } catch (e) {
        // console.log(e);
        data = body;
      }
      
      const file = path.join('guests', `${guest}.json`);
      
      try {
        // Store the raw body string for non-JSON requests
        if (req.headers['content-type'] !== 'application/json') {
          await fs.writeFile(file, body);
        } else {
          await fs.writeFile(file, JSON.stringify(data));
        }
        
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(data));
      } catch (err) {
        // console.log(err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'server failed' }));
      }
    });
  } else {
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'server failed' }));
  }
});

server.listen(port, () => {
  console.log(port);
});