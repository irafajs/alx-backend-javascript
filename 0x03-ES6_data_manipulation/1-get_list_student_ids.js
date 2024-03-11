export default function getListStudentIds(values) {
  if (!Array.isArray(values)) {
    return [];
  }

  return values.map((value) => value.id);
}
