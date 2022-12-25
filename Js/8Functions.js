function add(a, b) {
    return a + b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  //invoking
  console.log("ADD = ", add(2, 4));
  console.log("Multiply = ", multiply(2, 4));
  
  // modern js use this method
  // These are called arrow functions
  const sum = (p, q) => {
    return p + q;
  }
  console.log(sum(9, 5));
  
  const hello = () => {
    console.log("hiii");
  }
  hello();