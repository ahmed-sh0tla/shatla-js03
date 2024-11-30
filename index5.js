var numbers = [-5, -2, -6, 0, -1];


var largest = numbers[0];


for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}

alert("The largest number is: " + largest);