// let num1 =32;
// let num2 =342;
// if (num1.toString()[(num1.toString().length-1)] ===num2.toString()[(num2.toString().length-1)]) {
//     console.log("ok its great matched")
// }else{
//     console.log("nothing is there")
// }

// let num3 = 32;
// let num4 = 342;

// let lastDigit1 = num3.toString()[num3.toString().length - 1];
// let lastDigit2 = num4.toString()[num4.toString().length - 1];

// if (lastDigit1 === lastDigit2) {
//     console.log("ok it's great matched");
// } else {
//     console.log("nothing is there");
// }

//
// let string=prompt("enter a string")
// if (string==0) {
//     console.log(" empty")
// }
// else{
//     console.log("notempty")
// }

// let array = [2, 3, 3, 4, 3, 6, 3, 3];
// let num = 3;
// for (let index = 0; index < array.length; index++) {
//   if (array[index] == num) {
//     array.splice(index, 1);
//   }
// }

// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// let num1 = 2;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == num1) {
//     arr.splice(i, 1);
//     // After removing, do NOT increment i (or decrement it)
//   }
// }
// console.log(arr); // Output: [1, 3, 4, 5, 6, 3] — one '2' remains

// let num = 123456;
// let count = num.toString().length;
// console.log("Number of digits:", count); // Output: 6

// function multiplehello(func, count) {
//   for (i = 0; i < count; i++) {
//  func();
//   }
// }
// // let helllo = function () {
// //   console.log("hello");
// // };
// multiplehello(function () {
//     console.log("hello");
//   }, 5);

// function hello(){
//     console.log(this)
// }
// hello()

// setTimeout(() => {
//     console.log("hello")
// }, 2000);

// setInterval(() => {
//     console.log("elo")
// }, 1000);
// let array = [1, 2, 3, 4, 5, 6];
// array.forEach((element,index) => {
//   console.log(index,element);
// });

// let nums = [2, 3, 4, 2, 4, 6, 7, 8];

// let result = nums.reduce((max, ele) => {
//   if (max > ele) {
//     return max;
//   } else {
//     return ele;
//   }
// });
// console.log(result);

// function randomColor(){
//     let col1=Math.floor(Math.random()*256);
//     let col2=Math.floor(Math.random()*256);
//     let col3=Math.floor(Math.random()*256);

//     return `rgb(${col1},${col2},${col3})`
// }
// let boxes=document.querySelectorAll(".box")
// Array.from(boxes).forEach(element => {
//     element.style.color = randomColor();
//     element.style.backgroundColor=randomColor();
// });

// function chaiBnao(callback){
//     console.log("Chay banana start kr diya")
//    setTimeout(() => {
//     console.log("chay ban gyi")
//     callback();
//    }, 3000);
// }
// function chaypio(){
//     console.log("chay pi rha hu")
// }
// chaiBnao(chaypio);

// function makeFood(callback) {
//   setTimeout(() => {
//     console.log("🍳 Food is cooked");
//     callback();
//   }, 1000);
// }

// function serveFood(callback) {
//   setTimeout(() => {
//     console.log("🍽️ Food is served");
//     callback();
//   }, 1000);
// }

// function eatFood(callback) {
//   setTimeout(() => {
//     console.log("😋 Eating food");

//     callback();
//   }, 1000);
// }
// function digestfood() {
//   setTimeout(() => {
//     console.log("Food is digested");
//   }, 1000);
// }

// // Callback Hell: nested callbacks
// makeFood(() =>
//     serveFood(() =>
//         eatFood(() =>
//             digestfood())));

// function boilwater(callback) {
//   setTimeout(() => {
//     console.log("Pani ubal rha hai");
//     callback();
//   }, 1000);
// }
// function pastalelo(callback) {
//   setTimeout(() => {
//     console.log("pasta dal diya");
//     callback();
//   }, 1000);
// }
// function pastaban(callback) {
//   setTimeout(() => {
//     console.log("pasta ban gya ");
//     callback();
//   }, 1000);
// }
// function pastakhao() {
//   setTimeout(() => console.log("pasta khao"));
// }
// boilwater(() => pastalelo(() => pastaban(() => pastakhao())));

// function greetUser(name, callback) {
//     console.log("🔔 Preparing greeting...");
//     callback(name); // passing argument to the callback
//   }

//   function sayHello(username) {
//     console.log(`👋 Hello, ${username}!`);
//   }

//   // Using the callback with an argument
//   greetUser("Ravi", sayHello);

// function changeCol(color,delay,nextColorChange){
//     setTimeout(() => {
//         let boxes=document.querySelectorAll(".box")
//          Array.from(boxes).forEach(element => {
//     element.style.background = color;
//         nextColorChange();
//     }, delay);
// }

// function changeCol(color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let newnum = Math.ceil(Math.random() * 10);
//       if (newnum > 9) {
//         reject("Number is rejected");

//       }
//       let boxes = document.querySelectorAll(".box");
//       Array.from(boxes).forEach((element) => {
//         element.style.background = color;
//         // if (nextColorChange) nextColorChange();
//         // nextColorChange();
//       });
//       console.log(`color is changed ${color}`);
//       resolve("Color is changed");
//     }, delay);
//   });
// }
// async function ColorChange() {
//  try{
//     await changeCol("red", 1000);
//     await changeCol("orange", 1000);
//     await changeCol("aqua", 1000);
//     await changeCol("yellow", 1000);
//     await changeCol("blue", 1000);
//     await changeCol("purple", 1000);
//     await changeCol("green", 1000);
//     await changeCol("brown", 1000);

//  }catch(err){
//     console.log(err)
//     console.log("Error is caught")
//  }

//   let a=5;
//   console.log(a+3);
// }
// ColorChange();

// changeCol("red", 1000).then(() => {
//   return changeCol("orange", 1000).then(() => {
//     return changeCol("yellow", 1000).then(() => {
//       return changeCol("purple", 1000).then(() => {
//         return changeCol("aqua", 1000).then(() => {
//           console.log("All changes have been done.");
//         });
//       });
//     });
//   });
// });

// changeCol("red",1000).then(()=>{
//     changeCol("orange",1000).then(()=>{
//         changeCol("yellow",1000).then(()=>{
//             changeCol("purple",1000).then(()=>{
//                 changeCol("aqua",1000)
//             })
//         })
//     })
// })

// changeCol("red",1000,()=>{
//     changeCol("orange",1000,()=>{
//         changeCol("purple",1000,()=>{
//             changeCol("yellow",1000,()=>
//                 console.log("printed all colors")
//             )
//         })
//     })
// })

// function savetoDb(resolve, conflict) {
//   let randomsave = Math.ceil(Math.random() * 10);
//   if (randomsave > 5) {
//     resolve("Number is succeeded");
//   } else {
//     conflict("Number is not succeeded");
//   }
// }

// savetoDb(
//   () => {
//     console.log("num1 is saved");
//     savetoDb(
//       () => {
//         console.log("num2 is saved");
//         savetoDb(
//           () => {
//             console.log("num3 is saved to Db");
//           },
//           () => {
//             console.log("num3 is not saved");
//           }
//         );
//       },
//       () => {
//         console.log("num2 is not saved");
//       }
//     );
//   },
//   () => {
//     console.log("num1 is rejected to save");
//   }
// );

// function prom(data) {
//   return new Promise((resolve, reject) => {
//     let newnum = Math.ceil(Math.random() * 10);
//     if (newnum > 4) {
//       resolve("Resolve");
//     } else {
//       reject("Rejected");
//     }
//   });
// }
// prom("prateek")
//   .then((result) => {
//     console.log("promise1 was resolved");
//     console.log(result);
//     // console.log(prom());
//     return prom("gupta");
//   })
//   .then((result) => {
//     console.log("prom2 is resolve");
//     console.log(result);

//     //   console.log(prom());
//   })
//   .catch((err) => {
//     console.log("promise1  is rejected");
//     console.log(err);
//     // console.log(prom());
//   });
// prom();

// async function hello() {
//     let newnum = Math.ceil(Math.random() * 10);
//         if (newnum > 4) {
//           return "Accepted";
//         } else {
//          throw "Rejected";
//         }
// }
// hello()
//   .then((resolve) => {
//     console.log("Resolved ");
//     console.log("Number is ", resolve);
//   })
//   .catch((err) => {
//     console.log("rejected");
//     console.log("number is ", err);
//   });

// let url="https://catfact.ninja/fact"
// fetch(url)
// .then((response)=>{
// return response.json();
// })
// .then((data)=>{
//     console.log("Data1 is:",data.fact)
//     console.log("Length of the fact is :",data.length)
//     return fetch(url)
// })
// .then((response)=>{
// return response.json()
// })
// .then((data)=>{
//     console.log("Data2 is :",data.fact)
//     console.log("Length of the fact is :",data.length)
// })

// let url="https://catfact.ninja/fact"
// async function urlfetch(times) {
//    try{
//     for(i=1;i<=times;i++){
//         let  resultFetch = await fetch(url)
//         let result =await (resultFetch.json())
//        console.log(`fact ${i} is: ${result.fact}`)
//     }
//    }
//    catch(err){
//     console.log("Error is : ",err)
//    }
// }
// urlfetch(5)

// let btn = document.querySelector("button");

// btn.addEventListener("click", async() => {
//  let fact=await urlfetch();
//  console.log(fact);
//  let para=document.querySelector("#result")
//  para.innerText=fact;
// });
// let url = "https://catfact.ninja/fact";

// async function urlfetch() {
//     try {
//       let resultFetch = await axios.get(url); // Fetch a single fact
//       return resultFetch.data.fact; // Return the fact
//     } catch (err) {
//       console.log("Error is: ", err);
//       return "Failed to fetch a cat fact."; // Return a fallback message in case of an error
//     }
//   }




// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//   //  let fact=await urlfetch();
//   //  console.log(fact);
//   //  let para=document.querySelector("#result")
//   //  para.innerText=fact;
//   let imagelink = await urlfetch();
//   console.log(imagelink);
//   let img = document.querySelector("#result");
//   img.setAttribute("src", imagelink);
// });

// let url2 = "https://dog.ceo/api/breeds/image/random";
// async function urlfetch() {
//   try {
//     let resultFetch = await axios.get(url2); // Fetch a single fact
//     // console.log(resultFetch.data.message);
//     return resultFetch.data.message; // Return the fact
//   } catch (err) {
//     console.log("Error is: ", err);
//     return "Failed to fetch a image."; // Return a fallback message in case of an error
//   }
// }
