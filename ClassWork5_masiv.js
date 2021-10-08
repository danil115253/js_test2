//          forEach  

// let arr = [1, 2, 3, "5", "6", true, false, function() {} ];


// arr.forEach((f) => {
//     console.log(f)
// }); 

// let mass = [ 1, 2, 3, false, "hallo", "bay", () => {} ];

// mass.forEach((a, b) => {
//     if (a % 2 === 0) {
//         console.log(a)
//     }
// });

//              Metod: MAP

let bass = [1, 2, 3, 4, 5, "6"];

let bass2 = bass.map((a, b) => {
    return a + 2;
});

console.log(bass2);