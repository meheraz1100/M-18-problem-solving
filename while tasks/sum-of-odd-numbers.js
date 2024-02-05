/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

// subtask-1

// let i = 81;
// let sum = 0;
// while(i <= 131){
//     sum = sum + i;
//     if(i % 2!= 0){
//         console.log(i);
//     }
//     i++;
// }
// console.log('sum of all the odd numbers ',  sum);

// subtask-2

let i = 206;
let sum = 0;
while(i <= 311){
    sum = sum + i;
    if(i % 2 == 0){
        console.log(i);
    }
    i++;
}
console.log('sum of all the even numbers ',  sum);