const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'text/plain');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const databasePath = 'database.csv';
  countStudents(databasePath)
    .then((output) => {
      const title = 'This is the list of our students\n';
      const data = title + output;
      res.send(data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Internal Server Error');
    });
});

app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

module.exports = app;
