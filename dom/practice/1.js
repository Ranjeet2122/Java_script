// 11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C

// function cel(celsius){
//     return (celsius*9/5)+32;
// }

// function far(f){
//     return (f -32)*5/9;
// }

// const cels =60;

// const farn =45;

// const convertedfrn = cel(cels);
// const convsrtedcel = far(farn);
// console.log(`${cels}c is ${convertedfrn} f`);
// console.log(`${farn} f is ${convsrtedcel} c`);


//13//Write a JavaScript exercise to create a variable using a user-defined name.  

// const variable={};

// function setvariable(name,value){
//     variable[name]=value;
// }

// function getvariable(name){
//     return variable[name];
// }

// setvariable("rutuja",23);

// const result =getvariable("rutuja");
// console.log(result);


//  14 Write a JavaScript exercise to get the filename extension.
// function FileExtension(file) {
//     return file.split('.').pop();
//   }
//   const file1 = "document.pdf";
//   const file2 = "image.jpg";
//   const file3 = "script.js";
  
//   console.log(`File extension for ${file1}: ${FileExtension(file1)}`);
//   console.log(`File extension for ${file2}: ${FileExtension(file2)}`);
//   console.log(`File extension for ${file3}: ${FileExtension(file3)}`);
 
  
  //15

  //16 Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.

// function computeSum(a, b) {
//     if (a === b) {
//       return 3 * (a + b);
//     } else {
//       return a + b;
//     }
//   }
//   const num1 = 5;
//   const num2 = 5;
//   const num3 = 8;
  
//   console.log(`For ${num1} and ${num2}: ${computeSum(num1, num2)}`);
//   console.log(`For ${num2} and ${num3}: ${computeSum(num2, num3)}`);
  

  //18. Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50. 


//   function a(num1, num2) {
//     return num1 ===  50|| num2 === 50 || num1 + num2 === 50;
//   }
//   const number1 = 25;
//   const number2 = 50;
//   const number3 = 30;
  
//   console.log(`For ${number1} and ${number2}: ${a(number1, number2)}`);
//   console.log(`For ${number2} and ${number3}: ${a(number2, number3)}`);
  
//19  Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.  

// function abc(num) {
//     return (Math.abs(100 - num) <= 20) || (Math.abs(400 - num) <= 20);
//   }
//   const number1 = 80;
//   const number2 = 150;
//   const number3 = 390;
  
//   console.log(`For ${number1}: ${abc(number1)}`);
//   console.log(`For ${number2}: ${abc(number2)}`);
//   console.log(`For ${number3}: ${abc(number3)}`);

// function addnumber(a,b){
//   sum=a+b;
//   return sum;
// }
// const c=addnumber(10,5);
// console.log(c);

// function addnumber(){
//   const a=10;
//   const b=5;
//   const sum=a+b;
//  return sum;
// } 
// let result=addnumber();
// console.log(result);



// let count=0;

//       function increaseCount(){

//       count++;
//       console.log(`count:${count}`);
// }
// for(let i=0;i<=5;i++){
// setTimeout(increaseCount,5000);
// }
// //setTimeout(increaseCount,2000);

// let arr = [1, 4, 2, 7, 1, 4];
// let arr2 = [...new Set(arr)];
// console.log(arr2);



let arr = [1, 4, 2, 7, 1, 4];
let arr2 = [];

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j] && !arr2.includes(arr[i])) {
            arr2.push(arr[i]);
        }
    }
}

console.log(arr2);










