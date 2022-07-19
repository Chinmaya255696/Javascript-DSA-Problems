// --------------------------------Filter Even number from an Array-----------------------//
//Q--1. Filter Even number from an Array
//  let arr=[2,4,5,6,7,9,10]
//  let x= []
//  for(let i=0; i<arr.length; i++){
// if(arr[i]%2 == 0){
//     x.push(arr[i])
// }
//  }
// return console.log(x)
// --------------------------------Q--1=>Filter Odd number from an Array-----------------------//
//Q--1. Filter Odd number from an Array
// let arr=[2,4,5,6,7,9,10]
// let x= []
// for(let i=0; i<arr.length; i++){
// if(arr[i]%2 != 0){
//    x.push(arr[i])
// }
// }
// return console.log(x)

// --------------------------------(2)=>sum of n natural numbers-(Time complexity more)-----------------------//
// (2)=>sum of n natural numbers
// function addUpto(n){
//     let sum =0;
//     for(let i=0; i<=n; i++){
//         sum += i // sum= sum+i
//     }
// console.log(sum)
// }
// addUpto(100000000000)//Executed in 83.283 sec//Time complexity is more

// --------------------------------(3)=>sum of n natural numbers-(Time complexity less)------------------------//
// (3)=>sum of n natural numbers---(Time complexity less)
// function addUpto(n){
//     return console.log ((n*(n+1))/2)
// }
// addUpto(10000000000000)//Executed in 0.91 sec//Time complexity is less

// --------------------------------(4)=>Sort the number in incrising order ------------------------//
// (4)=>Sort the number in incrising order
// let arr=[12,234,4353,423,43,456,234,654,7567]
//  let newArr=arr.sort(function(a,b){
//     return(a-b);
//  })
//   console.log(newArr)
// return console.log (newArr.join(" "))// This .join(" ") will remove array and print the a line with space.
// --------------------------------(5)=>Sort the number in decrising order ------------------------//
// 5)=>Sort the number in decrising order
// let arr=[12,234,4353,423,43,456,234,654,7567]
//  let newArr=arr.sort(function(a,b){
//     return(b-a);
//  })
//   console.log(newArr)
// return console.log (newArr.join(" "))// This .join(" ") will remove array and print the a line with space
// --------------------------------(6)=>find SECOND maximum number in a array ------------------------//
// (6)=>find SECOND maximum number in a array
// let arr=[12,234,4353,423,43,456,234,654,7567]
// let newArr=arr.sort((a,b)=>{ // Arrow function is used
//     return(b-a)
// })
//  console.log(newArr)
// return console.log(newArr[1])
// --------------------------------(7)=>find SECOND minimun number in a array ------------------------//
// (7)=>find SECOND minimun number in a array
// let arr=[12,234,4353,423,43,456,234,654,7567]
// let newArr= arr.sort((a,b)=>{
//     return(a-b)
// })
// console.log(newArr)
// return console.log(newArr[1])