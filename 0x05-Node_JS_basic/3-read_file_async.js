const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');

      const counts = {};

      lines.forEach((line) => {
        const fields = line.split(',');
        const field = fields[3];
        if (!counts[field]) {
          counts[field] = [];
        }
        counts[field].push(fields[0]);
      });

      const fieldCounts = [];
      for (const field in counts) {
        if (field !== 'field') {
          const numStudents = counts[field].length;
          const list = counts[field].join(', ');
          fieldCounts.push(`Number of students in ${field}: ${numStudents}. List: ${list}`);
        }
      }

      const totalStudents = lines.length - 1;
      const output = [`Number of students: ${totalStudents}`, ...fieldCounts];
      console.log(output.join('\n'));
      resolve(output.join('\n'));
    });
  });
}

module.exports = countStudents;
