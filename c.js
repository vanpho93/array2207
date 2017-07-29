// Phan biet exception - error
// try {
//     console.log(a);
// } catch (error) {
//     console.log(error.toString());
// }
// console.log('HELLO');

// console.log(Math.sqrt(-10));

function printPerson(name, age) {
    if (age < 0) throw new Error('Age must be bigger than 0');
    console.log('Xin chao, toi la ' + name + ', ' + age + ' tuoi');
}

try {
    printPerson('Teo', -3);
} catch (error) {
    console.log(error.toString());
}

