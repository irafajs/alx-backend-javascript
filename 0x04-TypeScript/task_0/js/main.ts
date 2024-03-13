interface Student {
	firstName: string;
	lastName: string;
	age: number;
  location: string;
};

const student1: Student = {
  firstName: 'Billy',
  lastName: 'Rugamba',
  age: 28,
  location: 'Kiyovu',
};

const student2: Student = {
  firstName: 'Tubi',
  lastName: 'Umuhoza',
  age: 30,
  location: 'Muhima',
};
const studentsList : Student[] = [student1, student2];

function renderTable(students: Student[]) {
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');

  students.forEach(student => {
    const row = tbody.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);

    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
  });
  table.appendChild(tbody);
  document.body.appendChild(table);
}
renderTable(studentsList);
