let arr = [4,5,6,7];


// map()

/*map() creates a new array from calling a function for every array element.

map() calls a function once for each element in an array.*/
// can provide three parameters to it (currentValue, index, arr)

arr.map((value)=>{
  console.log(value)
})


//with two parameters
arr.map((value,index)=>{
  console.log(value,index)
})

//with three parameters
arr.map((value,index,array)=>{
  console.log(value,index,array)
})


//filter()

/*The filter() method creates a new array filled with elements that pass a test provided by a function.*/


let arr2 = arr.filter((value)=>{
  return value>5;
})
console.log(arr2);


//reduce()
//The reduce() method executes a reducer function for array element.
//syntax
//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

let arr3 = [1,2,3,4,5,6,7,8,9];
let arr4 = arr3.reduce((value1, value2)=>{
   return value1+value2;
})
console.log(arr4);