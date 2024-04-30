const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8').split('\n');

    const lines = data.filter((line) => line.trim() !== '');

    const students = lines.map((line) => line.split(','));

    const counts = {};

    students.forEach((student) => {
      const field = student[3];
      if (!counts[field]) {
        counts[field] = [];
      }
      counts[field].push(student[0]);
    });
    const totalStudents = lines.length - 1;
    console.log(`Number of students: ${totalStudents}`);

    for (const field in counts) {
      if (field !== 'field') {
        const numStudents = counts[field].length;
        const list = counts[field].join(', ');
        console.log(`Number of students in ${field}: ${numStudents}. List: ${list}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
