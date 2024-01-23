//*funksiya ile ededin tersini tapmaq

// function reverse_a_number(n)
// {
//   n=n+ "";

//   return n.split("").reverse().join("");
// }
// console.log(Number(reverse_a_number(1234)));


// reverse_a_number adında bir fonksiyon tanımlanıyor. Bu fonksiyon bir sayı alır (n).

// Sayı n, metin bir ifadeye dönüştürülüyor. "n+"";" işlemi sayıyı string bir ifadeye dönüştürmek için kullanılıyor. Bu, sayıyı bir metin olarak ele almak için yapılmış bir dönüşüm.

// Ardından, bu metin ifade split("") yöntemi kullanılarak parçalara ayrılıyor. Bu, her rakamı ayrı bir karakter olarak ayırır. Örneğin, 1234 rakamları ["1", "2", "3", "4"] şeklinde ayrılır.

// reverse() metodu kullanılarak, bu karakter dizisi tersine çevrilir. Yani, ["4", "3", "2", "1"] şeklinde olur.

// Son olarak, join("") metodu kullanılarak, bu karakter dizisi birleştirilir ve tekrar bir metin ifadesine dönüştürülür. Bu, rakamların tersine çevrilmiş hali olan "4321" string ifadesini verir.

// Son olarak, Number() fonksiyonu ile bu metin ifadesi tekrar sayıya dönüştürülür ve console.log ile ekrana yazdırılır.

// Bu kod, sayıyı tersine çevirme işlemini string manipülasyonu kullanarak gerçekleştirir. Sayıyı tersine çevirmek için string metotları (split, reverse, join) kullanır ve ardından tekrar sayıya dönüştürür. Bu şekilde, sayının rakamları tersine çevrilir.



// function truncate(str, no_words) {
//     return str.split(" ").slice(0, no_words).join(" ");
//   }
  
//   console.log(truncate('Bu kod, sayıyı tersine çevirme işlemini string manipülasyonu kullanarak gerçekleştirir.', 7));
  
  

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






//---  19.01.24 edilen practiclar  ----

//arrayin icinde olmayan ededi tap

// let arr = [0,1,2,3,5,6,8,9]
// for  (let i = 0; i < arr.length; i++){
//     if (arr.indexOf(i)==-1){
//         console.log(i);
//     } 

// }


// array

// let arr = []
// while(true){
//     var x = +prompt("Enter");
//     if(x ==0) break;

//         else{
//             arr.push(x);
//         }
//     }
// console.log(arr);



//inputa eded daxil olan musbet ededin cemi 

// let cem = 0
// for(var i=0; i < 10; i++){
//     var a = +prompt("eded daxil edin");
//     if(a>0){
//         cem +=a;
//     }
// }
// console.log(cem);


//5 bolunen ededleri 

// let a = +prompt("eded daxil edin");
//     if(a%5==0){
//         console.log(a);

// }
// else{
//     console.log("eded bolunmur");
// }

//diskriminant

// function disk(a,b,c){
//     return a**2 -4*a*b*c;
// }
// const adeyeri= 3;
// const bdeyeri= 6;
// const cdeyeri= 2;

// const discriminan = disk(adeyeri,bdeyeri,cdeyeri);
// console.log(discriminan);

//input ile daxil olan ededin menfi ve ya musbet olmasi

// let a = +prompt("eded daxil edin");

// if (a > 0) {
//     console.log("musbetdir");
// } else if (a === 0) {
//     console.log("sifra beraberdir");
// } else {
//     console.log("menfidir");
// }



//ededden ededin cemini cixmaq Misal ucun: 15-6 

// let a = +prompt("Enter number");
// var remember = a
// var sum = 0
// while (a!==0){
//     var qaliq = a%10
//     a= Math.floor(a/10)
//     sum+=qaliq
// }
// console.log(remember - sum);


//ededin reqemlerinin kvadratlari cemi

// let a = +prompt("Enter number");
// var ededString = a.toString();
// var cem = 0;
// for (var i = 0; i < ededString.length; i++) {
//     var number = parseInt(ededString[i]);
//     cem += number * number;
// }
// console.log(cem);


// 1 den 100 e kimi olan ededlerin ceminin mukemmel olub olmadigini yoxlayin 



// inputa daxil olan ededin reqemlerinin  necesinin cut oldugunu tapin



// cut ededlerin tapilmasi

// function number (a,b){
//     for (var i=a;i<=b;i++){
//         if(i%2===0){
//             console.log(i);
//         }
//     }
// };
// number(1,100);







//-------- 21.01.24 ---------






//-1- Bir array’iniz  var ve bir funksiya yaradirsiz eğer arayın ici doludursa sonuncu elementi qaytaracaq eğer arrayin ici bosdusa ekrana -1 qaytaracaq


// function lastNumber(eded) {
//     if (eded && eded.length > 0) {
//         return eded[eded.length - 1];
//     } else {
//         return -1;
//     }
// }
// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var lastNumberArray = lastNumber(array);
// console.log(lastNumberArray);

// var nanArray = [];
// var nanArrayNumber = lastNumber(nanArray);
// console.log(nanArrayNumber);



//-2- Bir mix array’iniz var 30’dan boyuk ededleri artan sıra ile ekranda göstermek

// var mixArray = [120, 34, 4, 31, 67];
// var filteredArray = mixArray.filter(function(element) {
//     return element > 30;
// });
// filteredArray.sort(function(a, b) {
//     return a - b;
// });
// for (var i = 0; i < filteredArray.length; i++) {
//     console.log(filteredArray[i]);
// }



//-3- isdifadeci reqem daxil edir 4reqemli  ve reqemlerinin icinde 2 ve 3’cu reqemler 
//eger cutduse  ekrana her ikisi cutdur cixacaq eğer biri tek biri cutdurse 
//ekrana biri tek biri cutdur cixacaq eks halda her ikisi tekdise ekrana her 
//ikisi tekdir cixacaq

// let enterInput = prompt("Dörd reqemli eded yazin:");
// let num = parseInt(userInput);

// if (isNaN(num) || num < 1000 || num > 9999) {
//     console.log("Xeta dord reqemli eded yazin.");
// } else {
//     let num2 = Math.floor((num / 10) % 10);
//     let num3 = num % 10;

//     if (num2 % 2 === 0 && num3 % 2 === 0) {
//         console.log("Her ikisi cut");
//     } else if (num2 % 2 === 0 || num3 % 2 === 0) {
//         console.log("Biri cut,biri tek.");
//     } else {
//         console.log("Her ikisi tek.");
//     }
// }


//-4- Daxil olan ededden sonraki ilk n sade ededi tap

// function issimple(number){
//     for (var i = 2, sqrt = Math.sqrt(number); i <= sqrt; i++) {
//       if (number % i === 0) return false;
//     }
//     return number > 1;
// }
// var inputNumber = +prompt("Eded daxil edin");
// while (!issimple(inputNumber)) {
//     inputNumber ++;
// }
// console.log(inputNumber);

// -5-   n=7
// 1
// 1 2 
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4 5 6 
// 1 2 3 4 5 6 7 

// var n = 7;
// for (var i = 1; i <=n;i++) {
//     var row = "";
//     for (var j =1 ; j<=i;j++) {
//         row = row + " " + j + " ";
// }
// console.log(row);
// }


//-6-  a = 4,b = 5  buglu kod 
// **
// **
// **
// **
// **

// var a = 4;
// var b = 5;
// for (var i = 0; i < a; i++) {
//   for (var j = 0; j < b; j++) {
//   }
//   console.log();
// }


//-7-  mix array verilib icinde stringleri ekrana cixardın

// var mixArray = [ 2, "Toyota" ,4, "Lexus" ,6, "Mercedes" ];

// mixArray.forEach(function(mixin) {
//     if (typeof mixin === 'string') {
//         console.log(mixin);
//     }
// });



//-8- mix(yəni string,null,{} və.s) array verilib  icinde ededleri ekrana cixardın 

// var mixArray = [ 2, "Toyota" ,4, "Lexus" ,6, "Mercedes" ];

// mixArray.forEach(function(mixin) {
//     if (typeof mixin === 'number') {
//         console.log(mixin);
//     }
// });

//-9- bir array və içində bir neçə elementlər var içerisinde sonu 9’olan neçə element var

// var countArray = [12,29,39,23,33,79,34,59];
// for(var i = 0; i < countArray.length; i++){
//   if(countArray[i] % 10 ===9){
//     console.log(countArray[i]);
//   } ;
// }


//-10-  input ile daxil olunan ededin sade yoksa mürekkep oldugunu tapin

// var enterCount = +prompt("Eded daxil edin.");
// if(isFinite(enterCount) && enterCount % 1 === 0) {
//   console.log("Daxil edilen eded  sade ededdir.");
// }
// else{
//   console.log("Daxil edilen eded murekkebdir.");
// }


//-12-  input ile daxil olunan ededin reqemlerinnen en boyuyunu tapin

// var enterNumber = prompt("Eded daxil edin.");
// var num = parseInt(enterNumber);
// num = Math.abs(num);
// var maxNumber = 0;
// while (num > 0) {
//   var number = num % 10;
//   if (number > maxNumber) {
//     maxNumber = number;
//   }
//   num = Math.floor(num / 10);
// }
// console.log("Daxil edilen ededin en boyuk reqemini tapin: " + maxNumber);
