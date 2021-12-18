////Playing with .map method
// const root = document.querySelector('#map-method');

// const people = [
//     {
//         name: 'bob',
//         age: 20,
//         position: 'developer',
//     },
//     {
//         name: 'anna',
//         age: 25,
//         position: 'designer',
//     },
//     {
//         name: 'susy',
//         age: 30,
//         position: 'the boss',
//     },
//     {
//         name: 'john',
//         age: 20,
//         position: 'intern',
//     },
// ];

// const names = people.map((person) => `<p>${person.name}, ${person.age}, ${person.position}</p>` )
// root.innerHTML = names.join('');

////Finding unique values
// const menu = [
//     {
//         name: 'pancakes',
//         category: 'breakfast',
//     },
//     {
//         name: 'burger',
//         category: 'lunch',
//     },
//     {
//         name: 'steak',
//         category: 'dinner',
//     },
//     {
//         name: 'bacon',
//         category: 'breakfast',
//     },
//     {
//         name: 'eggs',
//         category: 'breakfast',
//     },
//     {
//         name: 'pasta',
//         category: 'dinner',
//     },
// ];
// const categories = ['all', ... new Set (menu.map((item) => item.category))]; //Set is a collection of unique values. Each value can only occur once in a set and a set can hold any value of any data type. new Set creates a new Set.

// const result = document.querySelector('#unique-values');
// result.innerHTML = categories.map((category) => {
//     return `<button>${category}</button>`;
// }).join(' ');

////Dynamic Object Keys
// let appState = 'loading';

// const app = {
//     [appState]:true
// }

// const state = {
//     loading: true,
//     name: '',
//     job: ''
// }

// function updateState(key, value) {
//     state[key] = value
// }

// updateState('name', 'john');
// updateState('job', 'infrastructure engineer');
// updateState('loading', 'false');
// console.log(state);

////Filter and Find methods
// const people = [
//     { name: 'bob', age: 20, position: 'developer' },
//     { name: 'peter', age: 25, position: 'designer' },
//     { name: 'susy', age: 30, position: 'the boss' },
//     { name: 'anna', age: 35, position: 'intern' },
// ]

// const youngPeople = people.filter((person) => {
    // if (person.age < 30) {
    //     return person;
    // }
//     return person.age < 30;
// })
// console.log(youngPeople,  youngPeople.length);

// const developers = people.filter((person) => person.position === 'developer');
// console.log(developers, developers.length);

// const seniorDevs = people.filter((person) => person.position === 'senior dev');
// console.log(seniorDevs);

// const peter = people.find((person) => person.name === 'peter');
// console.log(peter);

// const oldPerson = people.find((person) => person.age > 35 );
// console.log(oldPerson);

// const randomPerson = people.find((person) => person.age < 35);
// console.log(randomPerson);

////Reduce
// const people = [
//     { name: 'bob', age: 20, position: 'developer', salary: 100 },
//     { name: 'peter', age: 25, position: 'designer', salary: 300 },
//     { name: 'susy', age: 30, position: 'the boss', salary: 400 },
//     { name: 'anna', age: 35, position: 'intern', salary: 10 },
// ];

// const dailyTotal = people.reduce((total, person) => {
//     total += person.salary;
//     return total;
// },0)

// console.log(dailyTotal);

////Reduce Objects
