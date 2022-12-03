

// const arr =[1,2,3,4,5]
// const arr2 =[5,5,5,5,5]
// const arr3 =[]

// function myFunction(x,y) {
//     if(x.length == 0){
//         return false
//     }
// return x.every((val) => val === y)
// }
// // console.log(arr2.every((val) => val == 5));
// // console.log(arr3.every((val) => val == 5));
// myFunction(arr,5)
// console.log(myFunction(arr,5));
// console.log(myFunction(arr2,5));
// console.log(myFunction(arr3,5));

// // REgular function vs Arrow function =>
// // Function diclaration =>
//  function showthis() {
//     console.log(this);
//  }
// showthis()
// // Arrow function
// const showthis2 =() => {
//     console.log(this);
//  }
// showthis2()

// ? /this in regular function vs arrow function in object =>
// const obj ={
// name:"Muhammadqodir",
// age:20,

// showthis: function (){
//     console.log(this.name);
// },
// showthis2:() =>{
// console.log(this.name);
// },
// showthis3 (){
//     console.log(this.name);
// }
// }
// obj.showthis();
// obj.showthis2();
// obj.showthis3();

// document.querySelector("#btn").addEventListener("click",function(){
// console.log(this.style.color = "red");
// })

// ?Array methods =>

// const arr =[1,2,3,4,5,6,7]
// const arrstr =["Muhamadqodir","Holid","Zubay ","Umar"]

// console.log(arr.includes(2,0));
// console.log(arr.includes(2,2));
// console.log(arrstr.includes("Umar",0));
// *forEach 
// let x =0

// arr.forEach((val,index,arr)=>{
// console.log(val,index,arr);
// // x+=val
// })

// // console.log(x);

// *some vs every 

// console.log(arr.every((val =>{val ==2})));

// const resalt =arr.some((val) =>val == 2)

// console.log(resalt);