// var  userName = "Hazem",
//   age = 37;
// console.log(userName);
// console.log(hello);
// hello.innerHTML = "Changed from JS";
// let aabb = 1;
// console.log('Elzero Web "School"');
// console.log("Elzero \
// Web \
// School");
// console.log("Elzero\nWeb\nSchool");
// let user = "hazem";
// console.log("hello " + user);
// document.write("hello", " ", user);

// let a = "Hazem";
// let b = "Osama";
// let c = "Ismael";
// let d = "Gad";

// console.log(`
// ${a}
// ${b}
// ${c}
// ${d}
// `);
// let title = "Hazem's Academy";
// let desc = "Hazem's Academy has been founded in 2024 that teaches childern to become more skillable when it comes to programming."

// let markUp = `
//   <div class ="card">
//     <div class="child">
//       <h2>${title}</h2>
//       <p>${desc}</p>
//     </div>
//   </div>
// `;

// document.write(markUp);

// console.log(10 + 20);
// console.log(10 + "Hazem");

// console.log(35 % 2);

// window.alert("error in loading website");

// function myFunction() {
//   document.write("hello");
//   window.alert("hello hazem good function! keep going ^^");
// }

myName = "hazom";
// console.log(myName);
// console.log((100.437535345).toFixed(2));
// console.log(parseInt(200.484));
// console.log(parseFloat(user1));
// console.log(Number.isInteger(1255));
// console.log("Hazem" / 230);

// mah 1340
// bwh 1859
// aaa 1845
// mhr 1257
// sad 1902

// console.log(Math.ceil(110.7));
// console.log(Math.floor(110.1));

// let a = 1_00;
// let b = 2_00.5;
// let c = 1e2;
// let d = 2.4;

// console.log(Math.pow(a, Math.trunc(d)));

// let price = 100;
// let discount = true;
// let discountAmount = 30;
// let country = "Egypt";

// if (discount && country == "Egypt") {
//   price -= discountAmount;
// } else {
//   console.log("no discount");
// }
// console.log(price + "EGP");

// let theName = "Hazem";
// let theGender = "Male";
// let theAge = 22;

// let welcomingMessage =
//   theGender === "Male" ? `Hello Mr, ${theName}` : `Hello Mrs, ${theName}`;

// function sub(...numbers) {
//   let res = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     res += numbers[i];
//   }
//   return res;
// }

// console.log(sub(5, 2, 3, 10));

// let day = +1;

// switch (day) {
//   case 0:
//     console.log("Saturday");
//     break;
//   case 1:
//     console.log("Sunday");
//     break;
//   case 2:
//     console.log("Monday");
//     break;
//   case 3:
//     console.log("Tuesday");
//     break;
//   case 4:
//     console.log("Wednesday");
//     break;
//   case 5:
//     console.log("Thursday");
//     break;
//   case 6:
//     console.log("Friday");
//     break;

//   default:
//     console.log("Unknown day");
// }

// console.log(myFriends);
// console.log(Array.isArray(myFriends));

// Index start from 0 [ 0, 1, 2, 3 ]

// myFriends[myFriends.length - 1] = "Hazooom";
// console.log(myFriends);

// let first = myFriends.pop();
// console.log(first);

// let myFriends = ["Hazem","Hazzoom","Zuma"];
// // let myNewFriends = ["I", "Don't", "Have", "Old", "To", "Get", "New"];
// let onlyNames = [];

// // console.log(myFriends);
// // console.log(myFriends.slice(1));
// // console.log(myFriends.slice(1, 3));
// // console.log(myFriends.slice(1, -1));
// // console.log(myFriends);

// // let allFriends = myFriends.concat(myNewFriends);
// // console.log(allFriends);
// // console.log(allFriends.join(" | "));
// console.log(onlyNames);

// for (i in myFriends) {
//   if (typeof myFriends[i] === "string") {
//     onlyNames.push(myFriends[i]);
//   }
// }
// console.log(`only names is: ${onlyNames}`);

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];

// let index = 0;

// while (index < products.length) {
//   console.log(products[index]);
//   index++;
// }

// function sayHello(userName, age) {
//   console.log(`${userName} your age is ${age}`);
// }

// sayHello("Hazem", 22);

// function generateYears(start, end, exclude) {
//   for (let i = start; i <= end; i++) {
//     if (i === exclude) {
//       continue;
//     }
//     console.log(i);
//   }
// }

// generateYears(1928, new Date().getFullYear(), 2020);

// function calc(...numbers) {
//   let result = 0;
//   for (i in numbers) {
//     result += numbers[i];
//   }
//   return `Final Result is ${result}`;
// }

// let result = calc(9, 5, 69, 5, 12);

// console.log(result);

function showInfo(
  userName = "unknown",
  userAge = "unknown",
  userRate = "0",
  show = "Yes",
  ...userSkills
) {
  document.write(`<div>`);
  document.write(`<h2>Welcome, ${userName}</h2>`);
  document.write(`<p><b>Age:</b> ${userAge}</p>`);
  document.write(`<p><b>Hour Rate:</b> $${userRate}</p>`);
  switch (show) {
    default:
      document.write(`<p><b>Skills:</b> Hidden</p>`);
      break;
    case "Yes":
      userSkills.length > 0
        ? document.write(`<p><b>Skills:</b> ${userSkills.join(" | ")}</p>`)
        : document.write(`<p><b>Skills:</b> No Skills</p>`);
      break;
  }
  document.write(`</div>`);
}

showInfo(
  "Hazem",
  22,
  20,
  "No",
  "Football",
  "Computer Science",
  "Math",
  "Problem Solving"
);
