const a = [
    1, 3, 4, 6, 7, 9, 10, 30
];

// function locSo(mangSo, checkFunction) { //return mang cua cac phan tu thoa man dk
//     const arr = [];
//     for(let i = 0; i < mangSo.length; i++) {
//         const dieuKien = checkFunction(mangSo[i]);
//         if (dieuKien) arr.push(mangSo[i]);
//     }
//     return arr;
// }
// inSo(a, e => Math.sqrt(e) % 1 === 0);

const arrSoChan = a.filter(e => e % 2 === 0);
console.log(arrSoChan);
