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


let students2 = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, maths: 77, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];

// single line, used different variable names so as not to clash with those below.
let [John, ...Rest] = students2.map(itm => [itm.name, itm.results]);
console.log(John);
console.log(Rest);

console.log('\n');
// Or create function first and use in map
const mapper = (itm) => [itm.name, itm.results];
let [john, ...rest] = students2.map(mapper);
console.log(john);
console.log(rest);
