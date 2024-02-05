/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/

// let sum2 = 0;
// for(let i = 1; i <= 20; i++){
//     sum2 = sum2 + i;
//     if(sum2 === 100){
//         break;
//     }
//     console.log(i);
// }

// console.log(sum2);

let sum = 0;
let i = 0;
while(sum+i <= 100){
    sum = sum + i;
    i++;
    console.log(i);
}
console.log(sum);