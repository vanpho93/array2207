// 3 thuoc tinh, name, age, height
const arrNum = [1, 3, 4, 7, 3, 1];

class Person {
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
}

const arrPerson = [
    new Person('Ti', 18, 160),
    new Person('Teo', 16, 180),
    new Person('Tun', 20, 150)
];

// In ra cac phan tu co age >= 18
// console.log(arrPerson.filter(person => person.age >= 18));
// console.log(arrPerson.filter(person => person.height >= 170));

// arrPerson.forEach(e => console.log(e.name));

// console.log(arrPerson.some(e => e.height > 170));
// console.log(arrPerson.every(e => e.height > 140));

// console.log(arrNum.map(e => e * e));
// console.log(arrPerson.map(e => e.age));
// console.log(arrPerson.sort((a, b) => a.height - b.height));

arrPerson.forEach((e, i) => console.log(i + ' ' + e.name));
