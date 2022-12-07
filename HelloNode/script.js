// function htmlspecialchars(formData) {
//   let arr = [];
//   let str = '';
//   arr = formData.split("");
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === "&") {
//       console.log(str);
//       str = str + "&amp;";
//       console.log(str);
//     } else if(arr[i] === ">") {
//       console.log(str);
//       str = str + "&gt;";
//       console.log(str);
//     } else if(arr[i] === `"`) {
//       console.log(str);
//       str = str + "&quot;";
//       console.log(str);
//     } else if(arr[i] === "<") {
//       console.log(str);
//       str = str + "&lt;";
//       console.log(str);
//     } else
//     str = str + arr[i];
//   }
//   console.log(str);
//   return str;
// }
// htmlspecialchars('How was "The Matrix"?  Did you like it?');

// function findDifference(a, b) {
//   let sum1 = 1;
//   let sum2 = 1;
//   for (const ch of a) {
//     sum1 = sum1 * ch;
//   }
//   //console.log(sum1);
//   for (const hc of b) {
//     sum2 = sum2 * hc;
//   }
//   //console.log(sum2);
//   return Math.abs(sum1 - sum2);
// }
// findDifference([3, 2, 5], [1, 4, 4]);

// function buildString(...template){
//   return console.log(`I like ${template.join(', ')}!`);
// }
// buildString('Cheese', 'Milk', 'Chocolate');

// function gooseFilter (birds) {
//   var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//     // return an array containing all of the strings in the input array except those that match strings in geese
//   let result = [];
//   for (const ch of birds) {
//     if (geese.includes(ch)) {
//       console.log(geese.includes(ch));
//     } else result.push(ch);
//   }
//   return console.log(result);
// }
// gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]);

// function sumStr(a,b) {
//   let sum = Number(a) + Number(b);
//   return console.log(sum.toString());
// }
// sumStr("4", "5");

//function otherAngle(a, b) {

//   return console.log(180 - (a+b));
// }
// otherAngle(30, 60);

// function bmi(weight, height) {
//   let bmi = 0;
//   bmi = weight / (height *height);
//     if (bmi <= 18.5) {
//       return "Underweight";
//     } if  (bmi <= 25) {
//       return "Normal";
//     } if  (bmi <= 30) {
//       return "Overweight";
//     }
//   return "Obese";
// }
// bmi(80, 1.80);

// function grow(x) {
//   let sum = 1;
//   for (const ch of x) {
//     sum *= ch;
//   }
//   return sum;
// }

// function switchItUp(number){
//   switch (number) {
//     case 1:
//       return "One";
//     case 2:
//       return "Two";
//     case 3:
//       return "Three";
//     case 4:
//       return "Four";
//     case 5:
//       return "Five";
//       case 6:
//       return "Six";
//       case 7:
//       return "Seven";
//       case 8:
//       return "Eight";
//       case 9:
//       return "Nine";
//       case 0:
//       return "Zero";
   
//   }
// }
// switchItUp(1);

// function repeatStr(n, s) {
//   let result = '';
//   for (let i = 1; i <= n; i++) {
//     result += s;
//   }
//   return console.log(result);
// }
// repeatStr(3, "***");

// function litres(time) {
//   let sum = time * 0.5;
//   return console.log(Math.floor(sum));
// }
// litres(11.8);

//let greet = (str) => "hello world!";

// function lovefunc(flower1, flower2) {
//   if (flower1 % 2 == 0 && flower2 % 2 == 1) {
//     return true;
//   } if (flower2 % 2 == 0 && flower1 % 2 == 1) {
//     return true;
//   }
//   return false;
// }

// function simpleMultiplication(number) {
//   if (number % 2 == 0) {
//     return number * 8;
//   }
//   return number * 9;
// }

// function removeChar(str){
//   sum = str.slice(1,-1);
//   return console.log(sum);
// }
// removeChar("al45o");

// function getAverage(marks){
//   let sum = 0;
//   for (const ch of marks) {
//     sum += ch;
//   }
//   return Math.floor(sum / marks.length);
// }

//

// function areYouPlayingBanjo(name) {
//   if (name.charAt(0).toLowerCase() === "r") {
//     return console.log(name + ' plays banjo');
//   } else{
//     return console.log(name + ' does not play banjo');
//   }
// }
// areYouPlayingBanjo("Ralo");

// function preFizz(n) {
//   let arr = [];
//   for (let i = 1; i <= n; i++) {
//     arr.push(i);
//   }
//   return arr;
// }

// function problem(x) {
//   if (x.toLowerCase === x.toUpperCase) {
//     return console.log(x * 50 + 6);
//   } else {
//     return console.log("Error");
//   }
// }

// problem(1);

// function isIsogram(str){
//   let a = '';
//   let str1 = str.toLowerCase();
//   console.log(str1);
//   if (str.length === 0) {
//     return console.log("true");
//   }
//   for (let j = 0; j < str1.length; j++) {
//     for (let i = j; i < str1.length; i++) {
//       if (str1[j] === str1[i+1]) {
//         console.log(str1[j], str1[i], str1[j] !== str1[i]);
//         return console.log("false");
//       }
//     }
//   }
//   return console.log("true");
// }
// isIsogram("");


