    // 1- masala
// const valyu:string |null =  prompt('soni kiriting')
// const list: string[] = []

// function numberList(){
//     if(valyu){
//         list.push(valyu)
//     }
// }
// numberList()
// console.log(list);


    // //  2- masala
    // function findMaxValue(numbers: number[]): number {
    //     return Math.max(...numbers);
    // }
    // console.log(findMaxValue([10, 20, 5, 8])); 

        //   3- masala
// let username:string | null = prompt("Ism kiriting")
// let usersNameList:string[] = ["Firdavsxon", "Ulug'bek", "Boburjon", "Rixsitilla", "Ruslonbek"]
// let isValid:number = 0

// function fn(name:string | null, list:string[]){
//     list.forEach((item:string) => item == name ? isValid+=1 : isValid)
// }
// fn(username, usersNameList)
// console.log(isValid ? "Bor" : "Yo'q");

    //  4- masala
// function getEvenNumbersLoop(arr: number[]): number[] {
//     const evenNumbers: number[] = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 === 0) {
//         evenNumbers.push(arr[i]);
//       }
//     }
//     return evenNumbers;
//   }

//   console.log(getEvenNumbersLoop([1, 2, 3, 4, 5, 6])); 

    // 5- masala
// function sumArrayLoop(arr: number[]): number {
//     let sum: number = 0;
//     for (let i = 0; i < arr.length; i++) {
//       sum += arr[i];
//     }
//     return sum;}
//   console.log(sumArrayLoop([1, 2, 3, 4])); 

// 6-masala ustoz shu masalani chatgipitidan ko'rib o'rgandim
// interface User {
//     id: number;
//     name: string;
//     email: string;
//     password: string;
//     address: string;
//   }
//   function extractNamesAndEmails(users: User[]): { name: string; email: string }[] {
//     return users.map(user => ({ name: user.name, email: user.email }));
//   }
//   const users: User[] = [
//     { id: 1, name: 'Ahror', email: 'ahror@mail.com', password: '321', address: 'Tashkent' },
//     { id: 2, name: 'Sardor', email: 'sardor@mail.com', password: '789', address: 'Fargona' }
//   ];
//   console.log(extractNamesAndEmails(users));

// 7- masala
// 1. User interfeysini aniqlash
// interface User {
//     id: number;
//     name: string; 
//     email: string; 
//     password: string; 
//     address: string; 
//   }
//   function findAddressByIdLoop(users: User[], id: number): string | undefined {
//     if (!Array.isArray(users) || users.length === 0) {
//       console.error('Error');
//       return undefined;
//     }
//     for (let i = 0; i < users.length; i++) {
//       if (users[i].id === id) {
//         return users[i].address; }
//     }
//     console.warn(`ID ${id}foydalanuvchi topilmadi.`);
//     return undefined;
//   }

// 8- masala
// function getNamesLoop(users: User[]): string[] {
//     const names: string[] = [];
//     for (let i = 0; i < users.length; i++) {
//       names.push(users[i].name);
//     }
//     return names;
//   }
//   console.log(getNamesLoop(users)); 

// 9-masala
// function getMaxValuesLoop(arr1: number[], arr2: number[]): number[] {
//     const max1 = Math.max(...arr1);
//     const max2 = Math.max(...arr2);
//     return [max1, max2];
//   }
//   console.log(getMaxValuesLoop([1, 3, 5], [2, 4, 6])); 

// 10- masala
// function separateNumbersLoop(arr: number[]): { even: number[]; odd: number[] } {
//     const even: number[] = [];
//     const odd: number[] = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 === 0) {
//         even.push(arr[i]);
//       } else {
//         odd.push(arr[i]);}
//     }
//     return { even, odd };}
//   console.log(separateNumbersLoop([1, -2, 3, 4, -5]));


// 1-masala
// function reverseNumberMath(num: number): number {
//     const hundreds = Math.floor(num / 100);
//     const tens = Math.floor((num % 100) / 10);
//     const units = num % 10;
//     return units * 100 + tens * 10 + hundreds;
//   }
//   console.log(reverseNumberMath(123)); 

// 2-masala
// function factorialLoop(num: number): number {
//     let result = 1;
//     for (let i = 1; i <= num; i++) {
//       result *= i;
//     }
//     return result;
//   }
//   console.log(factorialLoop(5));

// 3-masala ustoz shunda xato ishladim iltimos to'g'irlab berin
// function mergeObjectsManual(obj1: any, obj2: any, obj3: any): object {
//     const result: any = {};
//     for (const key in obj1) result[key] = obj1[key];
//     for (const key in obj2) result[key] = obj2[key];
//     for (const key in obj3) result[key] = obj3[key];
//     return result;
//   }
// //   console.log(mergeObjectsManual(user, age, userJob));
// 4-masala

// function printNumbersLoop(n: number): void {
//     for (let i = 1; i <= n; i++) {
//       console.log(i);}
//     }
//   printNumbersLoop(5);
// 5-masala
// function calculateSalarySum(salaries: { [key: string]: number }): number {
//     return Object.values(salaries).reduce((sum, salary) => sum + salary, 0);
//   }
//   const salaries = { aXodim: 150, bXodim: 180, cXodim: 210 };
//   console.log(calculateSalarySum(salaries));

// 7- masala
// function findMaxValueMath(arr: number[]): number {
//     return Math.max(...arr);
//   }
//   const numbers = [4, 8, 10, 13];
//   console.log(findMaxValueMath(numbers)); 

// // 8-masala
// function sumArrayLoop(arr: (number | undefined)[]): number {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       sum += arr[i] ?? 0;
//     }
//     return sum;
//   }
  
//   console.log(sumArrayLoop(undefined)); 
  
  
