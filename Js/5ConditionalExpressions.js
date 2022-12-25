let a = prompt("your age ");
a = Number.parseInt(a);

// if else
if (a < 9) {
  alert("Kiddo")
}
else if (a > 9) {
  alert("tiddo");
}

else {
  alert("hiddo");
}

console.log("You can  ",a > 19 ? "drive" : "cannot drive");


//switch case 
switch (a) {
  case '2':
    console.log("hjsgfh");
    break;

  case '5':
    console.log("ugyrr");
    break;

  default:
    console.log("good bye ");
}