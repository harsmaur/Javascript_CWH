//Array Methods

let num = [12,13,14,15];

//converting array elements into strings

let b = num.toString();
console.log(b);


//The join() method also joins all array elements into a string.(with given joiner)
let c = num.join("and");
console.log(c);


//The pop() method removes the last element from an array:

let d = num.pop();
console.log(num);
console.log("popped element:",d);


//The push() method adds a new element to an array (at the end):
num.push(16);
console.log(num);

//The shift() method removes the first array element and "shifts" all other elements to a lower index.

let r = num.shift();
console.log(num,r);


//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:

let g = num.unshift(17);
console.log(num,g);




//operators 

//Using delete leaves undefined holes in the array.
//Use pop() or shift() instead.

delete num[0];
console.log(num);



//Merging (Concatenating) Arrays
const arr1 = ["harsh", "harmione"];
const arr2 =["ravi", "ronald"];
const arr3 = ["ginny", "cho"];

const hp_characters = arr1.concat(arr2,arr3);
console.log(hp_characters);




//sort() --> used to sort  array
// sorts alphabetically 
let compare =(a,b)=>{
  return a-b;
}
num.sort();//(modifies original array )
console.log(num);



//reverse() --> reverses the array
num.reverse();
console.log(num);



//Splicing Arrays
// The splice() method adds new items to an array.

let deletedvalues = num.splice(1,2,19,20);
console.log(num);
console.log("deleted values -->",deletedvalues);

//parameters
//The first parameter (1) defines the position where new elements should be added (spliced in).
/*
The second parameter (2) defines how many elements should be removed.

The rest of the parameters (19 , 20) define the new elements to be added.*/



//The slice() method slices out a piece of an array into a new array.

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1);
console.log(citrus);

//start argument, and up to (but not including) the end argument.
const citruss = fruits.slice(1, 3);