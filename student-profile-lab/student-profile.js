const studentName = "Bernard Orozco Ablog";
let studentAge = 42;
const course = "Full Stack Web Development";
const isEnrolled = true;

const technologies = [
    "HTML",
    "CSS",
    "Javascript",
    "Git",
    "SQL"
];

const student = {
    name: studentName,
    age: studentAge,
    course: course,
    enrolled: isEnrolled,
    technologies: technologies
};

console.log(student);
console.log(`I am ${studentName}, a ${studentAge} years old student taking ${course}.`)