alert("Hello")
// alert("Hello");
// alert("world");
// prompt("What is your name");
// var myname = "Harsh";
// alert(myname);

var yourname = prompt("What is your name");
alert("Your name is" + yourname);

var myName = "Harsh";
var yourname = "kEVIN";
var my_name = "Harsh";
var a45 = "harsh";
var a$y = "Harsh";


// alert("hello" + " " + " world");
var name = "Harsh";
var message = "Hey!"
alert(message + " My name is " + name);




var nAme ="hhjgefhefjjehbfiuewhg";
nAme.length





var INPUT;
IMPUT = prompt("Enter characters");
var result = 140 - INPUT.length;
alert("Your remaining numbers of letters are " + result);




var namE = "Harsh_Maurya";
namE.slice(0,1);



var name = prompt("Enter Tweet ");
var tweetcount = name.slice(0,140);
alert(tweetcount);
alert(tweetcount.length);



var name = prompt("Enter your name");
var firstletter = name.slice(0,1);
var uppercf = firstletter.toUpperCase(firstletter);

var rest =name.slice(1, name.length);
alert("Hello "+ uppercf+rest);




var name = prompt("Enter your name");
var firstletter = name.slice(0,1);
var uppercf = firstletter.toUpperCase(firstletter);

var rest =name.slice(1, name.length);
rest = rest.toLowerCase(rest);
alert("Hello "+ uppercf+rest);





// human age = (doge age -2)*4+21
var dog_age = prompt("Enter the dog age");
var human_age = (dog_age-2)*4+21;
alert("Your human age is "+human_age);



// incremnet decrement 
var x = 5;
// x++;
alert(x);
x += 2;
alert(x);



var x =  6;
var y = 7;
x += y;
alert(x);



// function parametres
function getMilk(money) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("Number of bottles "+ Math.floor(money/1.5));  //floor function in js
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
  }
  
  getMilk(10);





  function getmilk(money,price){
    return (money % price);
}
var remMONEY = getmilk(10,2);
console.log(remMONEY);


  //Math.round();
  Math.floor();
  Math.pow(3,2);
  Math.random();




  var n = Math.random();
n = Math.floor(n*6);
console.log(n+1);




var name1 = prompt("Enter first name ");
var name2 = prompt("Enter second name ");

 var n = Math.random();
n = Math.floor(n*10);
console.log("Your love precentage is "+n+1+"%");





var name1 = prompt("Enter first name ");
var name2 = prompt("Enter second name ");

var n = Math.random();
n = Math.floor(n*10);
alert("Your love precentage is "+n+1+"%");
if(n > 80){
    alert("High Chance");
}
else{
      alert("Meduim Chance");
}



//comparators
// === is equal to
// !==   is not eual to 
// === also checks the equality of data types 
// while == does not check data types in compoarison



var namea = ["harsh", "maurya","harmione","Granger"];
var my_name = namea[0];
console.log(my_name);
var search_name = prompt("Enter the name to be searched");
alert(namea.includes(search_name));

//========================================================================================================

var namea = ["harsh", "maurya","harmione","Granger"];
var my_name = namea[0];
console.log(my_name);
var search_name = prompt("Enter the name to be searched");

if(namea.includes(search_name)){
alert("Welcome");
}
else{
 alert("Youre not invited");
}





var output = [];
var count = 1;

function FizzBuzz(){

        if(count%5===0 && count%3===0){
         output.push("fizzbuzz");
        }
 else if(count%5===0){
  output.push("Buzz");
 }
 else if(count%3===0){
  output.push("Fizz");
 }
 else{
  output.push(count);
 }
       
       
       count++;
       console.log(output);
   
}




//=================================================

var output = [];
var count = 1;

function FizzBuzz(){
while(count <=100){
        if(count%5===0 && count%3===0){
         output.push("fizzbuzz");
        }
 else if(count%5===0){
  output.push("Buzz");
 }
 else if(count%3===0){
  output.push("Fizz");
 }
 else{
  output.push(count);
 }
       
       
       count++;
}
       console.log(output);
   
}






objects

var housekeeper1 = {
    yearOfExprience: 22,
    name: "marry",
    CleaningReportoire: ["lawn", "loby","bedroom"]
    
   }
//========================================================================================================
   //function first letter should be capitalised for constructor fn
function BellBoy(name, age, hasworkpermit, language ){  //constructor function
    this.name = name;
  this.age = age;
  this.hasworkpermit = hasworkpermit;
  this.language = language;
 }
 
 
 var bellboy1 = new BellBoy("hary",19,true,["English", "Hindi"]);