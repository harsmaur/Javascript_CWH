let name = "Harsh\'Maurya";
// 0 based indexing
console.log(name);

//properties

console.log(name.length);





//Methods


console.log(name.toUpperCase());
console.log(name.toLowerCase());

console.log(name.slice(2, 6));
// second index parameter is not included

console.log(name.slice(2));

console.log(name.replace("Harsh", "Harshu"));


let name2 = "harmione";
console.log(name.concat(name2));

//The concat() method can be used instead of the plus operator. These two lines do the same:

// Example
text = "Hello" + " " + "World!";
text = "Hello".concat(" ", "World!");
console.log(text);

let name3 = "        meena          ";
console.log(name3.trim());


const sentence = "the quick brown fox jumps over the lazy dog.";
console.log(sentence.includes("word"));



for(let i =0; i<name3.length; i++){
  console.log(name3[i]);
}