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

        // let bass = [1, 2, 3, 4, 5, "6"];

        // let bass2 = bass.map((a, b) => {
        //     return a + 2;
        // });

        // console.log(bass2);

//              Metod: Filter  (Выводить только то что подходит под фильтр)

        // let filt = [1, 2, 3, 5, "uhfbvu", "uhbv"];

        // let filtV = filt.filter((item) => {
        //     if ( typeof item === "number") {
        //         return true;
        //     } else {
        //         return false;
        //     }
        // });

        // console.log(filtV);

        // //  Короткая запись(в одну строку):

        // let filtC = filt.filter((item) => typeof item === 'number');

        // console.log(filtC);


//  Нужно привести к строке числа, и вывести их в константу
// ( || - ) не исНан( (! - не) не ничего), то + - переводит строку в число,
// и если приводится ретерн правда и выводит
// а все остальное не выводится

        // let dom = [1, 2, 3, "4", "5", "6", "uiur44", function () {}];

        // const viv = dom.filter((item) => {

        // if( typeof item === "number" || ! isNaN(+item)) {
        //     return true; 
        //     } else {
        //         return false;
        //     }
        // });

        // console.log(viv);

//                      Коротко

        // let dom1 = [1, 2, 3, "4", "5", "6", "uiur44", function () {}];

        // const viv1 = dom1.filter((item) => {
            
        //     return typeof item === "number" || ! isNaN(+item);

        // });

        // console.log(viv1);


//              Метод: Every -  все эл.
//                     Some - хотя бы один.

        // let arr = [1,1,1,1,1,1,1,2,1];

        // const arr2 = arr.some((item) => {
        //     return item === 1;
        // });

        // console.log(arr2);

// /////////////////////////////////////////////////////////////////////

//             метод reduce (может посчитать числа в масиве или значения)

let arr = [ 2, 2, 2];

const arr2 = arr.reduce((a, b) => {
     return b + a;

},0); // ноль нужен для начала цикла - 0 + 2, после считается уже с 2 (в данном случае).

console.log(arr2);

