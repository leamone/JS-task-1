
let person = {
    firstName: 'Egija',
    address: 'Riga',
    favNumber: 8,
};

console.log(`Hello, my name is ${person.firstName}, I live in ${person.address} and my favourite number is ${person.favNumber}!`);


let cars = [
    'vaz',
    'zaz',
    'gaz',
    'uaz',
    'maz',
];

a = cars[4];
cars[4] = cars[0];
cars[0] = a;

console.log(cars);

