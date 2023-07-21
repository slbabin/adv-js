// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];
for (let num of nums) {
    results.push(num * 2);
}

console.log(results);

//map method
const multByTwo = function (num) {
    return num * 2;
}
const mapResults = nums.map(multByTwo);

console.log(mapResults);


//short map version
const multByTwo2 = nums.map(function (num) {return num * 2});

console.log(multByTwo2);

//even shorter version

const arrowFunction = nums.map(num => num * 2);

console.log(arrowFunction);


const students = [
    {
    id: 1,
    name: "Mark",
    profession: "Developer",
    skill: "JavaScript"
},
{
    id: 2,
    name: "Ariel",
    profession: "Developer",
    skill: "HTML"
},
{
    id: 1,
    name: "Jason",
    profession: "Designer",
    skill: "CSS"
},
];

const studentsWithIds = students.map(student => [student.name,student.id]);
console.log(studentsWithIds);