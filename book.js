// let age = 91;

// if (!(age >= 14 && age <=90)) {
// console.log( "v ne diapazone" )
// }
//     else { 
//         console.log (" v diapazone ")
//     }

//

// let a = 3, b = 4;

// let result = ( a + b < 4) ? true  : false ;

// console.log (result);

// alert("i am alert")


//

// let value  = prompt ('message');
// console.log(value);
// console.log (+value + 2)

//

// let str = prompt ("kto tam?");
// console.log (str);

// switch (str) {
//     case null:
//         alert('отменено');
//         break;

//     case "Админ":
//       let password = prompt ("password");
//         switch(password) {
//             case null:
//                 alert("Отменено");
//                 break;

//             case ("Я главный"):
//                 alert("Здравствуйте")
//                 break;
//             default:

//                 alert("неверный пароль");

//         }
//         break;
//     default:
//         alert("Я вас не знаю")
// }

//

/*alert("Privet Java Script");
alert("Hello")*/

//  

                // Встраивание с помошью Prompt - возваращает ответ пользователя.

// let age = prompt ("Сколько тебе лет?", 100);
// alert (`Тебе ${age} лет`);

              // Если нажать от то выведет True / отмена false 

// let isBoss = confirm("Ты здесь главный?");
// alert (isBoss);

/* Задачка

let userName = prompt("Как тебя зовут?");
console.log (`Тебя зовут ${userName}`); */



// Д\З

//  let num = 5;
//  let isSimpl = true;

//  for (let i =2; i <= num - 1; i++) {
//      if (num % i === 0 ) {
//          isSimpl = false;
//          break;
//      }
//  }

//      Проверка типа данных. Перевод в другой тип с помошью typeof.

// let value = true;
// alert (typeof value);

// value = String (value);
// alert (typeof value);


            // Переводит строку в числа

// let str = "123";
// alert (typeof str);

// let num = Number (str);

// alert (typeof num);

//     оператор "+" переводит в строку.

// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);

//  alert (+a + +b);

//////////////////////////////////////////////////////////////////////////////////////////////////////////

//    (  короткий способ через ? и :   )

        // let js = prompt("Кто создал компанию JavaScript");

        // js == "ECMAscript" ?

        // alert ("Правильно") : alert ("Не знаете ECMAskript?)");

        //             // длинный способ через  if , else 

        // let js1 = prompt("Кто создал компанию JavaScript");            

        // if ( js1 == "ECMAscript") {
        //     alert ("Правильно");
        // }

        // else 
        // alert ("Не знаете ECMAskript?)");

// 

// let zad2 = prompt("Ваше число?");

// if (zad2 > 0) {
//     alert ("1");
// }

// else if (zad2 < 0) {
//     alert ("-1");
// }


// else  {
//     alert ("ноль")
// }

//

        // // Задачка 2
        // let rezult;
        // let a = 3;
        // let b = 2;

        // rezult = (a + b < 4) ?  "Мало" : "Много";

        // alert(rezult);

// 

// Задача 3
//                  (Сокрашение if)

        //  let message;
        //  let login = prompt("Кто вы?");

        //  message = (login == "Сотрудник") ? "Привет" :
        //  message = (login == "Директор") ? "Здравствуйте" : "Нет логина";

        //  console.log(message);

/////////////////////////////////////////////////////////////////////////////////////////     

///          Циклы

                // let sum = 0;

                // while (true) {

                //         let value = +prompt('Введиде значение', '');

                //         if (! value) break;

                //         sum += value;
                        
                // }

                // alert( 'Сумма:' + sum);

//           switch / case



                // let a = "1";
                // let b = 0;

                // switch (+a) {
                //   case b + 1:
                //     alert("Выполнится, т.к. значением +a будет 1, что в точности равно b+1");
                //     break;

                //   default:
                //     alert("Это не выполнится");
                // }


// Задача переобразование с if в switch case 

                // const number = +prompt('Введите число между 0 и 3', '');

                // switch (number) {
                //         case 0:
                //         alert('Вы ввели число 0') 
                //                 break;
                //         case 1:
                //         alert('Вы ввели число 1')
                //                 break;

                //         case 2:
                //         case 3:
                //         alert('Вы ввели число 2, а может и 3');
                //                 break;
                //         default: 
                //         alert("Неизвестно");
                // }
//

// Задача 2  Переобразование с switch / case

                // let browser = prompt("Введите название браузера");

                // if (browser == 'Edge'){
                //         alert( "У вас есть Edge!" );
                // }
                        
                // else if (browser == 'Chrome'
                //  || browser == 'Firefox'
                //  || browser == 'Safari'
                //  || browser == 'Opera') {
                //         alert( 'Хорошо, мы тоже поддерживаем эти браузеры' );
                // }

                //         else {
                //                 alert( 'Мы надеемся, что эта страница выглядит нормально!' );
                //         }


//              Функции

function min(a,b) {
        return (a > b)
      }

      console.log(min(2, 5));