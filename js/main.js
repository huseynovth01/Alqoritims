//* ededin factorialinin hesablanmasi

// function factorial(x){
// if(x===0){
//   return 1;
// }
// return x*factorial(x-1);
// }
// console.log(factorial(5));
// console.log ("ededin factorialinin hesablanmasi");

//*--------------------------


//* iki müsbət ədədin ən böyük ümumi bölənini (GCD) tapmaq

// var gcd = function(x, y){
//   if (! y){
//     return x ;
//   }
//   return gcd (y,x %y);
// };
// console.log(gcd(124,342));
// console.log ("iki müsbət ədədin ən böyük ümumi bölənini");

//*--------------------------



//* aralıqdakı tam ədədləri goster

// var range = function (start_number, end_number){
//   if(end_number-start_number ===2){
//     return [start_number+1];
//   }
//   else {
//     var list = range (start_number,end_number-1);
//     list.push(end_number-1);
//     return list;
//   }
// }
// console.log(range(12,18));
// console.log ("araaralıqdakı tam ədədlər ededler");

//*--------------------------



//* ededlerin cemini hesablayir

// var array_sum = function(my_array){

//     if (my_array.length===1){

//         return my_array[0];
//     }
//     else{
//         return my_array.pop() + array_sum(my_array);
//     }
// };
// console.log(array_sum([1,2,3,4]));

//*-------------------------------


//* 



//*-------------------------------


// live time 

// var today = new Date();
// const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// console.log(month[today.getMonth()],".",weekday[today.getDay()],today.getDate(),today.getHours(),".",today.getMinutes(),".",today.getSeconds());
// document.write(month[today.getMonth()],".",weekday[today.getDay()],".",today.getDate());
// document.write("<br>");
// document.write("<br>");
// document.write(today.getHours(),":",today.getMinutes(),":",today.getSeconds());
// setInterval(function() {
//     var today = new Date();
//     console.log(today.getHours(),":",today.getMinutes(),":",today.getSeconds());
//     // document.write(today.getHours(),":",today.getMinutes(),":",today.getSeconds());
// },1000)



//ededin  tersi


// function reverse_a_number(n){
//     return n.split("").reverse().join("");
// }
// console.log(Number(reverse_a_number("01234")));




// var a ="0123"
// console.log(a.split(""));
// console.log(a.split("").reverse().join(""));



//---------------------------------------

//arrayin icinde minimum ededin tapilmasi  


// var arr = [1,2,3,4,5,6];
// var min = arr[0];
// for (var i = 0; i < arr.length; i++){
//   if (min > arr[i]){
//     min = arr[i];
//   }
// }
// console.log(min);

//arrayin icinde minimum ededin method ile tapilmasi 

// var arr = [1,2,3,4,5,6];

// var num1 = [1,2,3,4,5,6];
// var result = largestElement(num1);

// function largestElement(arr) {
//     return Math.min(...arr);
// }
// console.log( result);


// sozun birinci herfinin boyumesi 

function calculateDiscriminant(a, b, c) {
  return b ** 2 - 4 * a * c;
}
const aCoefficient = 5;
const bCoefficient = 6;
const cCoefficient = 3;

const discriminant = calculateDiscriminant(aCoefficient, bCoefficient, cCoefficient);
console.log(discriminant);







