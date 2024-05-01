const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer();

app.on('request', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    const showtext = 'Hello Holberton School!';

    res.setHeader('Content-Length', showtext.length);
    res.statusCode = 200;
    res.write(Buffer.from(showtext));
  } else if (req.url === '/students') {
    const databasePath = 'database.csv';
    countStudents(databasePath)
      .then((output) => {
        const title = 'This is the list of our students\n';
        const data = title + output;
        res.setHeader('Content-Length', Buffer.byteLength(data));
        res.statusCode = 200;
        res.end(data);
      })
      .catch((error) => {
        res.statusCode = 500;
        res.end('Internal Server Error');
        console.error(error);
      });
  } else {
    res.statusCode = 404;
    res.end('404 Not Found\n');
  }
});

app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

module.exports = app;
