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

function otherAngle(a, b) {

  return console.log(180 - (a+b));
}
otherAngle(30, 60);