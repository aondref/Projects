//Playing with .map method
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

//Finding unique values
const menu = [
    {
        name: 'pancakes',
        category: 'breakfast',
    },
    {
        name: 'burger',
        category: 'lunch',
    },
    {
        name: 'steak',
        category: 'dinner',
    },
    {
        name: 'bacon',
        category: 'breakfast',
    },
    {
        name: 'eggs',
        category: 'breakfast',
    },
    {
        name: 'pasta',
        category: 'dinner',
    },
];
const categories = ['all', ... new Set (menu.map((item) => item.category))];

const result = document.querySelector('#unique-values');
result.innerHTML = categories.map((category) => {
    return `<button>${category}</button>`;
}).join(' ');