//* ededin factorialinin hesablanmasi

// function factorial(x){
// if(x===0){
//   return 1;
// }
// return x*factorial(x-1);
// }
// console.log(factorial(3));
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

var array_sum = function(my_array){

    if (my_array.length===1){

        return my_array[0];
    }
    else{
        return my_array.pop() + array_sum(my_array);
    }
};
console.log(array_sum([1,2,3,4]));

//*--------------------------