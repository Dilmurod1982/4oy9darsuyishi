// 1 vazifa

// const students = [
//   { name: "Quincy", percent: 96 },
//   { name: "Jason", percent: 84 },
//   { name: "Alexis", percent: 100 },
//   { name: "Sam", percent: 65 },
//   { name: "Katie", percent: 90 },
//   { name: "Anna", percent: 75 },
// ];

// function getNamesByGrade(students, grade) {
//   return students
//     .map((students) => {
//       if (students.percent >= 85) {
//         return { name: students.name, percent: students.percent, grade: 5 };
//       } else if (students.percent < 85 && students.percent >= 70) {
//         return { name: students.name, percent: students.percent, grade: 4 };
//       } else if (students.percent < 70 && students.percent >= 60) {
//         return { name: students.name, percent: students.percent, grade: 3 };
//       }
//     })
//     .filter((student) => {
//       return student.grade == grade;
//     })
//     .map((student) => {
//       return student.name;
//     });
// }

// const result = getNamesByGrade(students, 5);
// console.log(result);

// 2 vazifa

// 3 vazifa

// const numbers = [1, 2, 3, 4, 5];

// const kvadrat = numbers.map((number) => number * number);

// console.log(kvadrat);

// 4 vazifa

// 5 vazifa

// 6 vazifa

// const people = [
//   { name: "John", age: 13 },
//   { name: "Mark", age: 56 },
//   { name: "Rachel", age: 45 },
//   { name: "Nate", age: 67 },
//   { name: "Jeniffer", age: 65 },
// ];

// people.sort((a, b) => a.age - b.age);

// const ageDifference = people[people.length - 1].age - people[0].age;

// console.log(ageDifference);

// // 7 vazifa

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumbers = numbers.filter((number) => number % 2 === 0);

// const oddNumbers = numbers.filter((number) => number % 2 !== 0);

// console.log(evenNumbers);
// console.log(oddNumbers);

// 9 vazifa

// let products = [
//   { id: 3, name: "Product C", price: 12.95, rating: 4, discount: 0 },
//   { id: 1, name: "Product A", price: 29.95, rating: 5, discount: 5 },
//   { id: 2, name: "Product B", price: 19.95, rating: 3, discount: 0 },
//   { id: 4, name: "Product D", price: 24.95, rating: 2, discount: 10 },
// ];
// products.sort((a, b) => a.id - b.id);
// products.sort((a, b) => a.name.localeCompare(b.name));
// products.sort((a, b) => a.price - b.price);
// products.sort((a, b) => b.rating - a.rating);
// products.sort((a, b) => b.discount - a.discount);

// 10 vazifa
// const products = [  ];

//     products.sort((a, b) => b.rating - a.rating);

//   const strongestProduct = products[0];

// 11 vazifa

// products.sort((a, b) => a.price - b.price);
// const cheapestProduct = products[0];

// 12 vazifa

// const products = [];

// const productNames = products.map((product) => product.name);

// console.log(productNames);

// 14 vazifa

// const elements = [];

// const element = elements.find((el) => el.id == 5);

// console.log(element);

// 15 vazifa

// let products = [
//     {
//       id: 6,
//       name: "Smarthpone",
//       price: 12000,
//       rating: 4.5,
//       discount: 20,
//     },
//     {
//       id: 2,
//       name: "Acer",
//       price: 10000,
//       rating: 4.3,
//       discount: 10,
//     },
//     {
//       id: 1,
//       name: "Mac book",
//       price: 17000,
//       rating: 4.7,
//       discount: 40,
//     },
//     {
//       id: 4,
//       name: "HP",
//       price: 21000,
//       rating: 4.1,
//       discount: 30,
//     },
//     {
//       id: 5,
//       name: "Dell",
//       price: 35000,
//       rating: 4.9,
//       discount: 30,
//     },
//   ];
  
//   const filteredProducts = products.filter(product => product.id !== 4);
  
//   console.log(filteredProducts);
  
// 16 vazifa


