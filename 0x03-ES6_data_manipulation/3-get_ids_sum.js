export default function getStudentIdsSum(students) {
  return students
    .map((student) => student.id)
    .reduce((acc, currentValue) => acc + currentValue, 0);
}
