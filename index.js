"use strict";
document.body.style.backgroundColor = 'pink';
/*Question 1st*/
//Array within function for splice methiod
//
// const array: number[] = [1,4,6,8,10]
// function array_modifier(a:number[ ],index:number,val:number){
//         a.splice(index,0,val)
//         return a
// }
// console.log(array);
// const result = array_modifier(array,1,2)
// console.log(result);
//
/*Question 2nd*/
//Cart Programm
// type item={
//        name: string,
//        quantity:number
// }
// const shoppingCart : item[] = [{name: 'paper',quantity : 2}]
// function add_to_cart(Item:item){
//    shoppingCart.push(Item)
//    console.log(shoppingCart)
//    return shoppingCart
// }
// function remove_from_cart(itemName: string){
//    const index = shoppingCart.findIndex(item => item.name === itemName)
//    if(index != -1){
//       shoppingCart.splice(index,1)
//    }
//     return shoppingCart
// }
// function updateQuantity(Item : item ){
//     const newitem = shoppingCart.find(item => item.name === Item.name)
//     if(newitem){
//         newitem.quantity = Item.quantity
//     }
// }
//  add_to_cart({name : 'Pencil',quantity : 3})
//  add_to_cart({name : 'Rubber',quantity : 7})
//  remove_from_cart('Pencil')
//  updateQuantity({name: 'Rubber',quantity : 5})
//  console.log(shoppingCart)
//
/*Question 3rd*/
//while loop for first 25 integers
// let i:number = 1
// while(i<=25){
// console.log(`${i}`)
// i++
// } 
//
/*Question 4rth*/
//while loop for first ten even numbers
// let i:number = 1
// let count:number = 0
// while(i<=100 && count != 10){
//    if(i%2 != 0){
//    }else{
//       console.log(i + ' is even number')
//       count++
//    }
//    i++
// }
//
/*Question 5th*/
//positive integer then factorial of that number
// function factorial(a:number){
//    let fac:number = 1
//    if (a>=0){
//       while(a!=0){
//          fac = fac*a
//          a--
//       }
//       return fac
//    }else{
//       console.log('Enter a positive integer plz');
//       return 0
//    }
// }
// const fact = factorial(6)
// console.log(fact);// 720
// const fact1 = factorial(-6)
// console.log(fact1);// 0 // enter a positive integer
//
/*Question 6th*/
//remove negative number from array
// function remNegNum( a:number[] ) {
//    if(a.length == 0){
//       return a
//    }else{
//       for (let index = 0; index < a.length; index++) {
//          if(a[index] < 0){
//             a.splice(index,1)
//             index = --index
//          }
//       }
//       return a
//    }
// }
// const array = remNegNum([-1,-2,-6,-3,-3,2,-6,-8,-3,-4,-2,-2])
// console.log(array);
//
/*Question 7th*/
//sum of array in a function
//  function sum( a:number[] ) {
//    let sum = 0
//       if(a.length == 0){
//          return sum
//       }else{
//          for (let index = 0; index < a.length; index++) {
//             sum = sum + a[index]
//          }
//          return sum
//       }
//    }
//    const array = sum([-1,-2,-6,-3,-3,2,-6,-8,-3,-4,-2,-2])
//    console.log(array);
//
/*Question 7th*/
//temperature conversion
//
// function tempConv( a:number[] ) {
//    let F:number
//    if(a.length == 0){
//       return a
//    }else{
//       for (let index = 0; index < a.length; index++) {
//           F = (a[index]*9/5)+32
//           a[index] = F
//       }
//       return a
//    }
// }
// const array = tempConv([-1,-2,-6,3,-3,2,-6,-8,33,-4,2,-2])
// console.log(array);
//
/*Question 1st*/
//programm to add first n even numbers
// let sum = 0
//  const sumEvens = (n : number):number => {
//    for (let index = 0; index <= n; index++) {
//       if(index%2 === 0){
//          sum = sum + index    
//       }
//    }
//    return sum
//  }
// const sum1 = sumEvens(9)
//  console.log(sum1);// 20
//
/*Question 2nd*/
//program to print even numbers from an array
// function printEvenNums(a:number[]){
//    if(a.length <= 0){
//       return 
//    }else{
//    for (let index = 0; index < a.length; index++) {
//          if(a[index]%2 === 0){
//             console.log(a[index]+' is an even number');
//          }
//     }
//  }
// }
// printEvenNums([2,3,4,5,6,3,1,6])
//
/*Question 3rd*/
//Program to remove all even numbers from array
// function printEvenNums(a:number[]){
//    if(a.length <= 0){
//       return 
//    }else{
//    for (let index = 0; index < a.length; index++) {
//          if(a[index]%2 === 0){
//             a.splice(index,1)
//             index--
//          }
//     }
//  }
//  console.log(a)
// }
// printEvenNums([2,3,2,6,5,4,5,6,3,1,6])
//
/*Question 4th*/
//Function to calculate area of a circle
//
// const area = (rad:number):number => {
//   return Math.PI*rad*rad
// }
// console.log(area(3));
//
/*Question 5th*/
/*
80 to 100 = A
70 to 80 = B
60 to 70 = C
50 to 60 = D
40 to 50 = E
30 to 40 = F
*/
//Function to remove grades less than 50
// function removeGrades(a:string[]){
//    if(a.length <= 0){
//       return 
//    }else{
//    for (let index = 0; index < a.length; index++) {
//          if(a[index] === 'F' || a[index] === 'E' ){
//             a.splice(index,1)
//             index--
//          }
//     }
//  }
//  console.log(a)
// }
// removeGrades(['A','F','D','E','F','B'])
//
/*Question 6th*/
//Function to find largest number from array
// let max = 0
// function findMax(a:number[]){
//       if(a.length <= 0){
//          return 
//       }else{
//       for (let index = 0; index < a.length; index++) {
//             if (a[index] > max) {
//                max = a[index]
//             }
//        }
//     }
//     console.log(max + ' is a largest number in array')
//    }
//    findMax([2,3,2,6,5,4,5,6,3,1,6])
//
