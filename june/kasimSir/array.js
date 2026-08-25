// An array is a collection of multiple values stored in a single variable.
// These values can be of the same or different data types.

// let stu=["abhi",29,"bhopal",true];
// console.log(stu[2]);                     Ans=bhopal


// for loop ="A for loop is a loop used to repeat a block of code. It has three parts: initialization, condition, and increment/decrement.
//  The loop runs as long as the condition is true. When the condition becomes false, the loop stops."

// for(let a=0;a<4;a++) {
//   console.log(stu[a]);                   Ans= ["abhi",29,"bhopal",true];
// }


// for of loop
// for(let v of stu) {
//     console.log(v);
// }


// let arr=[2,4,6,8,9,34,10,21,34,45,23,34];
// for(let a=0;a<11;a++) {
//     if(arr[a]==10) {
//         arr[a]=null;
//     }
//     console.log(arr[a]);
//     // if(arr[a]%2==0) {
//     //     console.log("even numbers")
//     //      console.log(arr[a]);
//     // }
// }


// let stu=[20,11,3,4,10,2,3,4,5];
// for(let k of stu) {
//     if(k!=10) {
//         console.log(k);
//     }
// }

// let stu = [20, 11, 3, 4, 10, 2, 3, 4, 5];

// for (let i = 0; i < stu.length; i++) {
//     if (stu[i] != 10) {
//         console.log(stu[i]);
//     }
// }

// array ke jitne elements he unka addition print karana he

// let arr=[2,4,3,7,5,12,3,4,78];
// let sum=0;
// for(let a=0;a<=8;a++) {
//   sum=sum+arr[a];

// }
//  console.log(sum);

// for in loop

// let arr=["ritik",23,"bhl","misrod"];

// arr[0]="mr";
// arr[5]="demo";

// console.log(arr);

// for(let k in arr) {

// }




// push → End me Add
// pop → End se Remove
// unshift → Start me Add
// shift → Start se Remove

//  arr.push("Mp",123); //for adding elements
// console.log(arr);

// arr.unshift("code","learn");
// console.log(arr);

// arr.pop();
// arr.shift();
// console.log(arr);




// let arr = [10, 20, 30, 40, 50];

// let p = arr.slice(1, 4);

// console.log(p);   // [20, 30, 40]               1 → Index 1 se copy start.
//  console.log(arr); // [10, 20, 30, 40, 50]       4 → Index 4 se pehle tak copy (4 include nahi hota).







//splice(index No ,no of elements ) -> delete

//let arr = [10, 20, 30, 40];                                     //1 → Index 1 se start karo.                          
//let p = arr.splice(1, 2, 50);                                   //2 → 2 elements remove karo. 
                                                                //50 → Jitni jagah khali hui, wahan 50 insert kar do.
//console.log(arr);





// let n=[];
// for(let a=0;a<4;a++) {
//     if(arr[a]==23 || arr[a]=="misrod") {
//         n.push(arr[a]);
//     }

// }
// console.log(n);





// destructuring of array=> Array destructuring is a JavaScript feature
//  that allows extracting values from an array and assigning them to variables in a single statement.

// let arr=[10,39,28,49,59,30];
// let[a,b,...rest]=arr;
// console.log(a);                //10
// console.log(b);                //39
// console.log(rest);             //28,49,59,30

// let [name,age,city] = ["Ritik",29,"Bhopal"];
// console.log(name,age,city);





// // spread operator(...)

// let ar1=[,1,4,2,5,6];
// let ar2=[3,4,6,3,2,5,4];
// let ar3=[...ar1,...ar2];

// // if we want to reverse
// // console.log(...ar2,...ar1);
// console.log(...ar1,...ar2);






// let emp = [];
// let arr = [];
// for (let num = 0; num < 5; num++) {
//   emp[num] = parseInt(prompt("enter elements "));
// }
// console.log(emp);
