let myVar = [1];

function myFunc(myVar2) {
  myVar2[0] = 2; // TypeError: Cannot set properties of undefined (setting '0')
}

myFunc(myVar);
console.log(myVar);