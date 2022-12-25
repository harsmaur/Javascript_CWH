// primitive datatypes 
//are fundamental Data Types and are builtin
// 1.null 2.number 3.string 4.symbol 5.undefined 6.boolean 7.byte

let a = null;
let b = true;
let c = 345;
let d = BigInt("7864");
let e = "HJarry";
let f = Symbol("I am Don");
let g = undefined; //or let h;

console.log(a, b, c, d, e, f, g);

console.log(typeof d);

//NON PRIMITIVE DATA TYPES : OBJECTS 


const item = {
  harry: true,
  harmione: false,
  lovish: 88,
  rohan: undefined,
};

console.log(item["harry"]);
console.log(item["harmione"]);
console.log(item["rohan"]);
//or
console.log(item.harry); 