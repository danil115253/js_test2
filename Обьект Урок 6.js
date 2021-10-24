// let user = {
//     name: 'Roma',
//     surname: 'Krasnov',
// };
//
// console.log(user.name);
//
// let user2 = {
//     'name name': 'sasha'
// };
//
// console.log(user2['name name']);
//
// let styles = {
//     'max-width': '150px',
//     'max-height': '130px'
// }

// let key = prompt('Enter object key');
// let value = prompt('Enter object value by key ' + key);
//
// let obj = {
//     [key]: value,
// }
//
// alert(obj[key]);

// for (let key in user) {
//     if (typeof user[key] === 'object') {
//         for (let key2 in user[key]) {
//             console.log(user[key][key2])
//         }
//     } else {
//         console.log(user[key])
//     }
// }
// console.log(user.location.postIndex);

//user.sayHi();

// for (let key in user) {
//     console.log(user[key])
// }

// function deepLogObj(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] === 'object') {
//             deepLogObj(obj[key]);
//         } else {
//             console.log(obj[key]);
//         }
//     }
// }
//
// deepLogObj(user)
//
// let user = {
//     name: 'Roma',
//     surname: 'dddd',
//     age: 12,
//     location: {
//         city: 'Kharkiv',
//         street: 'street',
//         postIndex: '000',
//     }
// }
//
// console.log(Object.keys(user));
// //Object.keys(user).forEach((key) => console.log(key));
// console.log('\n');
//
// console.log(Object.values(user));
//
// console.log('\n');
// console.log(Object.entries(user.location));

// const roma = {
//     name: 'Roma',
//     surname: 'Krasnov',
// }

// roma.name = 'alex';
// console.log(roma);

//roma = {};

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// };
//
// let sum = Object.values(salaries).reduce((prevValue, item) => {
//     return prevValue + item
// });
//
// console.log(sum);

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
//
// function multiplyNumeric(obj) {
//     Object.keys(obj).forEach((key) => {
//         if (typeof obj[key] === 'number') {
//             obj[key] *= 2;
//         }
//     });
//
//     return obj;
// }
//
// console.log(multiplyNumeric(menu));
// console.log(menu)

//    Урок 7 

// Metod: this - (В контексте)

        // let userss = {
        //     name: 'Danil',
        //     surname: 'Tiubalin',
        //     location: {
        //         street: 'Pobeda',
        //         hause: '54',
        //         pohIn: '01484'
        //     },

        //     showFul: function() {
        //         console.log(`Имя: ${this.name}, Фамилия: ${this.surname}`)},
        // };

        // userss.showFul();

// Metod: bind - (Переприсваивает контекст)

// let userss = {
//     name: 'Danil',
//     surname: 'Tiubalin',
//     location: {
//         street: 'Pobeda',
//         hause: '54',
//         pohIn: '01484'
//     },

// };

// function showFulName() {
//     console.log(`Имя: ${this.name}, Фамилия: ${this.surname}`)};

// showFulName();

// let bidedt = showFulName.bind(userss);
// bidedt();

//  Функция конструктор

function Percon (name, surName) {
    this.name = name,
    this.surName = surName,
    this.greet = function () {
        console.log(`my name is ${this.name}, ${this.surName}`);
    }
}

let user = new Percon ('Danil', 'Tiubalin');
console.log(user);
user.greet();