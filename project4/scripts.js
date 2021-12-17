//The Root
const root = document.querySelector('#map-method');

const people = [
    {
        name: 'bob',
        age: 20,
        position: 'developer',
    },
    {
        name: 'anna',
        age: 25,
        position: 'designer',
    },
    {
        name: 'susy',
        age: 30,
        position: 'the boss',
    },
    {
        name: 'john',
        age: 20,
        position: 'intern',
    },
];

const names = people.map((person) => `<p>${person.name}, ${person.age}, ${person.position}</p>` )
root.innerHTML = names.join('');