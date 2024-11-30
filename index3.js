var color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
var o = ["th", "st", "nd", "rd"];


function displaycolors() {
  for (var i = 0; i < color.length; i++) {
    let name = o[0]; // Default to "th"

    if (i === 0) {
      name = o[1]; // "st" for 1st
    } else if (i === 1) {
      name = o[2]; // "nd" for 2nd
    } else if (i === 2) {
      name = o[3]; // "rd" for 3rd
    }

    console.log((i + 1) + name + " choice is " + color[i] + ".");
  }
}


displaycolors()
