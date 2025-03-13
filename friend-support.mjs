import http from 'http';
import fs from 'fs';
import url from 'url';

const port = 5000;
const guestDir = 'guests';

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  const path = parsedUrl.pathname;
  const guest = path.slice(1);
  // console.log(guest);

  if (req.method === 'GET' && guest) {
    const file = `${guestDir}/${guest}.json`;
    // console.log(file);

    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        if (err.code === 'ENOENT') {
          res.writeHead(404, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'guest not found' }));
          // console.log(404);
          // console.log('guest not found');
        } else {
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'server failed' }));
          // console.log(500);
          // console.log('server failed');
        }
      } else {
        try {
          const jsonData = JSON.parse(data);
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(jsonData));
          // console.log(200);
          // console.log(jsonData);
        } catch (parseErr) {
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'server failed' }));
          // console.log(500);
          // console.log('server failed');
        }
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'guest not found' }));
    // console.log(404);
    // console.log('guest not found');
  }
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});