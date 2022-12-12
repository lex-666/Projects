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

// function fakeBin(input) {
//     let str1 = '';
//     let inp = input.toString();
//  for (let i = 0; i <inp.length; i++) {
//     if (inp[i] < 5) {
//        str1 = str1 + 0;
//     } else
//         str1 = str1 + 1;
//  }
//  return console.log(str1);
// }
// fakeBin(12345);

// function removeSmallest(numbers) {
//    let arr = [];
//    let min = numbers[0];
//    let n = 0;
//    for (let i = 0; i < numbers.length; i++) {
//       arr.push(numbers[i]);
//       if (numbers[i] < min) {
//          min = numbers[i];
//          n = i;
//          console.log(min, n);
//       }
//    }
//    console.log(numbers);
//    console.log(min, n);
//    arr.splice(n,1);
//    return console.log(arr);
// }
// removeSmallest([5, 3, 2, 1, 4]);

// function apple(x) {
//    let sq = Number(x * x);
//     if (sq > 1000) {
//        return "It's hotter than the sun!!";
//    } return "Help yourself to a honeycomb Yorkie for the glovebox.";
// }

// function part(x){
//    let va = ["Partridge", "PearTree", "Chat", "Dan", "Toblerone", "Lynn", "AlphaPapa", "Nomad"];
//    let count = 0;
//    let str = "Mine's a Pint!";
//    for (const ch of x) {
//       if (va.includes(ch)) {
//          count++;
//       }
//    }
//    if (count === 0) {
//       return console.log("Lynn, I've pierced my foot on a spike!!");
//    } else
//       for (let i = 1; i < count; i++) {
//       str += "!";
//       }
//    //console.log(count);
//    return console.log(str);
// }
// part(['Grouse', 'Partridge', 'Pheasant', 'Goose', 'Starling', 'Robin', 'Thrush', 'Emu', 'PearTree', 'Chat', 'Dan', 'Square', 'Toblerone', 'Lynn', 'AlphaPapa', 'BMW', 'Graham', 'Tool', 'Nomad', 'Finger', 'Hamster']);


// function alan(x){
//    let va = ["Rejection", "Disappointment", "Backstabbing Central", "Shattered Dreams Parkway"];
//    for (const ch of va) {
//       //console.log(x.includes(ch));
//       if (!x.includes(ch)) {
//          return console.log("No, seriously, run. You will miss it.");
//       }
//    }
//    return console.log("Smell my cheese you mother!,");
// }
// alan(["Backstabbing Central","Tiverton","Tiverton","Backstabbing Central","Rejection","North Norfolk Digital","Shattered Dreams Parkway","the Moon","Norwich"]);

// function abbrevName(name) {
//    let n = name.toUpperCase();
//    let str = n[0]+".";
//    for (let i = 0; i < n.length; i++) {
//       if (n[i] === " ") {
//          str = str + n[i+1];
//       }
//    }
//    return console.log(str);
// }
// abbrevName("sam harris");

// function basicOp(operation, value1, value2) {
//    if (operation === "+") {
//       return console.log(value1 + value2);
//    } if (operation === "-") {
//       return console.log(value1 - value2);
//    } if (operation === "*") {
//       return console.log(value1 * value2);
//    } if (operation === "/") {
//       return console.log(value1 / value2);
//    }
// }
// basicOp('*', 4, 7);

// function countPositivesSumNegatives(input) {
//   let countpos = 0;
//   let countneg = 0;
//    if (input === null){
//     return [];
//      } if (input.length === 0){
//       return [];
//    }
   
//    for (let i = 0; i < input.length; i++) {
//      if (input[i] > 0) {
//       countpos++;
//     } if (input[i] < 0) {
//       countneg+=input[i];
//     }
// }
//   return [countpos, countneg];
// }

// function check(a, x) {
//    //let value = x.toString();
//    //let b = a.toString();
//    console.log(a);
//    for (let i = 0; i < a.length; i++) {
//       if (a[i] === x) {
//          console.log(a[i], x);
//          //return console.log("false");
//          return console.log("true");
//       } //return console.log("true"); //console.log(a[i], x);
//    }
//    return console.log("false");
// }
// check(['t', 'e', 's', 't'], 'b');

// function oddCount(n){
//    let arr = [];
//    let count = 0;
//    for (let i = 1; i < n; i = i + 2) {
//       //arr.push(i);
//       count++;
//    }
//    return console.log(count);
// }
// oddCount(15);
// function oddCount(n) {
//    return console.log(Math.floor(n / 2));
// }
// oddCount(15023);

// function numberToPower(number, power){
//   console.info(Math.log2(1024));
//   let sum = 1;
//   for (let i = 1; i <= power; i++) {
//     sum = sum*number;
//   }
//   return console.log(sum);
// }
// numberToPower(10, 4);

// function first(arr, n) {
//    let result = [];
//    arr1 = arr.join(",");
//    console.log(arr1);
//    if (n === undefined) {
//        return [arr[0]];
//     }
//    for (let i = 0; i < n; i++) {
//       result.push(arr[i]);
//    }
//    return console.log(result);
// }
// first([a, b, c, d, e], 2);
// function first(arr, n=1) {
//    return arr.slice(0,n);
// }
// first([a, b, c, d, e], 2);

// function century(year) {
//   return Math.ceil(year/100);
// }

// function excludingVatPrice(price) {
//    if (price === null) {
//       return -1;
//    }
//     return console.log((price/1.15).toFixed(2));
// }
// excludingVatPrice(-257);

// function findAverage(array) {
//   if (array.length === 0){
//   return 0;
//     }
//   let ave = 0;
//   for (let i = 0; i < array.length; i++){
//     ave +=array[i];
//   }
//   return ave/array.length;
// }

// function enough(cap, on, wait) {
//    if (on + wait <= cap) {
//       return 0;
//    } return console.log(Math.abs(cap -on - wait));
// }
// enough(84, 57, 72);

// function dutyFree(normPrice, discount, hol){

// }

// function updateLight(current) {
//   switch (current) {
//       case "green":
//       return "yellow";
//       case "yellow":
//       return "red";
//       case "red":
//       return "green";
//   }
  

// }

// function remainder(n, m){
//    if (n > m) {
//       return n % m;
//    } return m % n;
  
// }

// function twiceAsOld(dadYearsOld, sonYearsOld) {
//   return Math.abs(dadYearsOld-sonYearsOld*2);
// }

// function betterThanAverage(classPoints, yourPoints) {
//    let ave = 0;
//    for (let i = 0; i < classPoints.length; i++) {
//       ave += classPoints[i];
//    }
//    if ((ave + yourPoints) / (classPoints.length + 1) > yourPoints) {
//       return false;
//    } return true;
// }

// function shortcut(string) {
//    let result = '';
//    for (let i = 0; i < string.length; i++) {
//       if (string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u") {
//       } else
//          result = result + string[i];
//    }
//   return console.log(result);
// }
// shortcut("HELLO");

// function strCount(str, letter){
//    let count = 0;
//    for (const ch of str) {
//       if (letter.includes(ch)) {
//          count++;
//          console.log(str.includes(letter));
//       }
//    }
//    return console.log(count);
// }
// strCount('Hello', 'l');

// function include(arr, item) {
//    for (const ch of arr) {
//       if (ch === item) {
//          return console.log("true");
//       }
//    }
//    return console.log("false");
// }
// include([1, 2, 3, 4], 5);

// function cockroachSpeed(s) {
//   return Math.floor((s*100000)/3600);
// }

// function getRealFloor(n) {
//    if (n <= 0) {
//       return n;
//    } if (n >= 0 && n <= 12) {
//       return n - 1;
//    } return n - 2;
// }

// const areaOrPerimeter = function(l , w) {
//   if (l === w) {
//   return l*w;
// } if (l > w || l <w ) {
//   return l*2+w*2;
// }
// }
  
// function countSheeps(arrayOfSheep) {
//   let sum = 0;
//   for (const ch of arrayOfSheep){
//     if (ch === true) {
//       sum++;
//     }
//   }
//   return sum;
// }

// function stray(numbers) {
//     let count1 = numbers[0];
//     let count2 = 0;
//     let a = 0;
//     let b = 0;
//     for (const ch of numbers) {
//     if (count1 !== ch) {
//             count2 = ch;
//         } 
//     }
//     for (const ch of numbers) {
//         if (count1 === ch) {
//             a++;
//         } if (count2 === ch) {
//             b++;
//         }
//     }
//     if (a > b) {
//         return console.log(count2)
//     }
//     return console.log(count1);
        
// }
// stray([17, 17, 3, 17, 17, 17, 17]);

// function getSum(a, b) {
//     let sum = 0;
//     if (a > b) {
//         for (let i = b; i <= a; i++) {
//             sum += i;
//         }
//     } if (a < b) {
//         for (let i = a; i <= b; i++) {
//             sum += i;
//         }
//     } if (a === b) {
//         return console.log(a);
//     }
//     return console.log(sum);
// }
// getSum(-5, -5);

