const people = [
    {
        name: "Michael",
        age: "23",
    },
    {
        name: "Lianna",
        age: "16",
    },
    {
        name: "Paul",
        age: "18",
    },
];

const oldEnough = people.filter(person => person.age >= 21);

console.log(oldEnough);

console.log( "");

const paul = people.filter(p => p.name == "Paul")[0];
console.log(paul);