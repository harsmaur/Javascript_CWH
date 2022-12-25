//Arrays in javascript
//arrays are object in javascript

let marks_of_class_12 = [0,1,2,2,2,2,3,4,5,null,false,"twenty"];
console.log(marks_of_class_12);
// we can simultanoeusly store diffrerent data type in a the same array 

let array_length = marks_of_class_12.length;
console.log(array_length);


marks_of_class_12[9] = "hundred";
console.log(marks_of_class_12);

console.log(typeof(marks_of_class_12));


for(let i = 0; i<marks_of_class_12.length; i++){
  console.log(marks_of_class_12[i]);
}