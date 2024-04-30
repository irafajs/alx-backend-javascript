const http = require('http');

const app = http.createServer();

app.on('request', (_, res) => {
  const showtext = 'Hello Holberton School!';

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', showtext.length);
  res.statusCode = 200;
  res.write(Buffer.from(showtext));
});

app.listen(1245, () => {
  process.stdout.write('Server is running on port 1245');
});

module.exports = app;
