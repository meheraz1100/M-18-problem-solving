/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */


// sum of all the odd numbers from 91 to 129
let sum1 = 0;
for(let i = 91; i <= 129; i=i+2) {
    sum1 = sum1 + i;
    console.log(i);
}
console.log("sum of all the odd numbers " + sum1);



// sum of all the even numbers from 51 to 85
let sum2= 0;
for(let i = 51; i <= 85; i=i+2) {
    sum2 = sum2 + i;
    console.log(i);
}
console.log("sum of all the even numbers " + sum2);

