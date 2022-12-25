let num = [1,2,3,4,5,6];

// for(let i =0; i< num.length; i++){
//   console.log(num[i]);
// }

//The forEach() method calls a function for each element in an array.

num.forEach((element)=>{
  console.log(element*element);
})
//in above we have defined a function inside forEach(function)

//Array From
// The Array.from() method returns an array from any iterable object.
let name = "harsh";
let arr = Array.from(name);
console.log(arr);


//"for of' loop in array
// (use this for loop)

for(let i of num){
  console.log(i);
}


//'for in' loop
//it returns the key(index in array case)
for(let i in num){
  console.log(i);
}

