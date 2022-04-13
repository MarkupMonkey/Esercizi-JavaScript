const students = ['Paul', 'George', 'Lucas'];
// console.log(`---- befor push ----`)
function addStudent(student) {
  console.log(students);
  // console.log(`--- after push ---`)
  students.push(student);
}
//addStudent('Luigi');
addStudent('Marco');
//addStudent('Gianfrancioschio');
console.log(students);