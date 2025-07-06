// const max = prompt("enter the maximum number");
// let random = Math.floor(Math.random() * max) + 1;
// let guess = prompt("guess the number");

// while(true){
//     if(guess == random){
//         console.log("your guess is right");
//         break;
//     }
//     if(guess == "quit"){
//         console.log("quit the game");
//         break;
//     }
//     else{
//         console.log("incorrect! please try again");
//         guess = prompt("guess the number");
//     }
// }

// function poem(){
//     let poem = "Roses are red, Violets are blue, Sugar is sweet, And so are you.";
//     console.log(poem);
// }
// poem();

let num = 5;
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function printlargest(array, num) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > num) {
      console.log(array[i]);
    }
  }
}
printlargest(array, num);

let str = "abcdabcdefgggh";
function getUnique(str) {
  let ans = "";
  for (let i = 0; i < str.length; i++) {
    let currChar = str[i];
    if (ans.indexOf(currChar) == -1) {
      // if current character is not added, then add it in ans.
      // Otherwise it is a duplicate.
      ans += currChar;
    }
  }
  return ans;
}
getUnique(str);

let country = ["Australia", "Germany", "United States of America"];
function longestName(country) {
  let ansIdx = 0;
  for (let i = 0; i < country.length; i++) {
    if (country[i].length > country[ansIdx].length) {
      ansIdx = i;
    }
  }
  return country[ansIdx];
}
console.log(longestName(country));

let str2 = "apnacollege";
function countVowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str.charAt(i) == "a" ||
      str.charAt(i) == "e" ||
      str.charAt(i) == "i" ||
      str.charAt(i) == "o" ||
      str.charAt(i) == "u"
    ) {
      count++;
    }
  }
  return count;
}
console.log(countVowels(str2));


let start = 100;
let end = 200;
function generateRandom(start, end) {
  let diff = end - start;
  return Math.floor(Math.random() * diff) + start;
}
