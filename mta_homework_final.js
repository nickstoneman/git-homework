transferStation = "Union Station";

// Arrays of 3 subway lines
var nLine = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];
var lLine = ['8th', '6th', 'Union Square', '1st'];
var sixLine = ['Grand Central', '33rd', '28th Street', '23rd Street', 'Union Square', 'Astor Place'];

// Dummy DATA
// var whatLineOn = "6"; // Temp variable. When using prompt this will be set by user.
// var whatStopOn = "Grand Central"; // Temp variable. When using prompt this will be set by user.

// var whatLineOff = "6"; // Temp variable. Will be returned by user.
// var whatStopOff = "Astor Place"; // Temp variable. Will be returned by user.



// ON
var whatLineOn = prompt("What line do you want to start from? Choose 'N', 'L' or '6'.");

if (whatLineOn === "N") {
  var whatStopOn = prompt("What station do you want to start from? Choose 'Times Square', '34th', '28th', '23rd', 'Union Square', '8th'.");
    // return whatStopOn;
} else if (whatLineOn === "L") {
  var whatStopOn = prompt("What station do you want to start from? Choose '8th', '6th', 'Union Square', '1st'.");
  // return whatStopOn;
} else if (whatLineOn === "6") {
  var whatStopOn = prompt("What station do you want to start from? Choose 'Grand Central', '33rd', '28th Street', '23rd Street', Union Square', 'Astor Place'.");
  // return whatStopOn;
}

// OFF
var whatLineOff = prompt("What line do you want to get off on? Choose 'N', 'L' or '6'.");

if (whatLineOff === "N") {
  var whatStopOff = prompt("What station do you want to get off at? Choose 'Times Square', '34th', '28th', '23rd', 'Union Square', '8th'.");
    // return whatStopOff;
} else if (whatLineOff === "L") {
  var whatStopOff = prompt("What station do you want to get off at? Choose '8th', '6th', 'Union Square', '1st'.");
  // return whatStopOff;
} else if (whatLineOff === "6") {
  var whatStopOn = prompt("What station do you want to get off at? Choose 'Grand Central', '33rd', '28th Street', '23rd Street', Union Square', 'Astor Place'.");
  // return whatStopOff;
}

// // Sets var which is a string to an array position
// var whatStopOn = nLine.indexOf(whatStopOn);
// console.log(whatStopOn); // Tests that it works
// // Sets var which is a string to an array position
// var whatStopOff = nLine.indexOf(whatStopOff);
// console.log(whatStopOff); // Tests that it works

// var tripDistance = (whatStopOn - whatStopOff);
// console.log(tripDistance);


if (whatLineOn === whatLineOff) {  
  switch (whatLineOn, whatLineOff) { 
  case ("N" && "N"):
    var whatStopOn = nLine.indexOf(whatStopOn); 
    // console.log(whatStopOn); // Tests that it works
    // Sets var which is a string to an array position
    var whatStopOff = nLine.indexOf(whatStopOff);
    // console.log(whatStopOff); // Tests that it works
    var tripDistance = (whatStopOff - whatStopOn);
      // console.log(tripDistance);
    break; 
  
  case ("L" && "L"):
    var whatStopOn = lLine.indexOf(whatStopOn); 
    // console.log(whatStopOn); // Tests that it works
    // Sets var which is a string to an array position
    var whatStopOff = lLine.indexOf(whatStopOff);
    // console.log(whatStopOff); // Tests that it works
    var tripDistance = (whatStopOff - whatStopOn);
    break;   
    
  case ("6" && "6"):
    var whatStopOn = sixLine.indexOf(whatStopOn); 
    // console.log(whatStopOn); // Tests that it works
    // Sets var which is a string to an array position
    var whatStopOff = sixLine.indexOf(whatStopOff);
    // console.log(whatStopOff); // Tests that it works
    var tripDistance = (whatStopOn - whatStopOff);
    // console.log(tripDistance);
    break;
  } 
}
  if (whatLineOn !== whatLineOff); {  
  switch (whatLineOn, whatLineOff) { 
  case ("N" && "L"):
    var whatStopOn = nLine.indexOf(whatStopOn); 
    // console.log(whatStopOn); // Tests that it works
    // Sets var which is a string to an array position
    var unionTransferOne = nLine.lastIndexOf(transferStation);
    // console.log(whatStopOff); // Tests that it works
    // Calculate the second leg of the trip.
    var unionTransferTwo = lLine.indexOf(transferStation);
    var whatStopOff = lLine.lastIndexOf(whatStopOff);
    var tripDistanceOne = (whatStopOn - unionTransferOne);
    var tripDistanceTwo = (whatStopOff - unionTransferTwo);
    var tripDistance = (tripDistanceOne + tripDistanceTwo);
    break; 
  
    case ("N" && "6"):
    var whatStopOn = nLine.indexOf(whatStopOn); 
    console.log(whatStopOn); // Tests that it works
    // Sets var which is a string to an array position
    var unionTransferOne = nLine.lastIndexOf(transferStation);
    console.log(whatStopOff); // Tests that it works
    // Calculate the second leg of the trip.
    var unionTransferTwo = sixLine.indexOf(transferStation);
    var whatStopOff = sixLine.lastIndexOf(whatStopOff);
    var tripDistanceOne = (whatStopOn - unionTransferOne);
    var tripDistanceTwo = (whatStopOff - unionTransferTwo);
    var tripDistance = (tripDistanceOne + tripDistanceTwo);
    console.log(tripDistance);
    break;

    case ("L" && "6"):
    var whatStopOn = lLine.indexOf(whatStopOn); 
    console.log(whatStopOn); // Tests that it works
    // Sets var which is a string to an array position
    var unionTransferOne = lLine.indexOf(transferStation);
    console.log(whatStopOff); // Tests that it works
    // Calculate the second leg of the trip.
    var unionTransferTwo = sixLine.indexOf(transferStation);
    var whatStopOff = sixLine.indexOf(whatStopOff);
    var tripDistanceOne = (whatStopOn + unionTransferOne);
    var tripDistanceTwo = (whatStopOff + unionTransferTwo);
    var tripDistance = (tripDistanceOne + tripDistanceTwo);
    console.log(tripDistance);
    break;

    case ("L" && "N"):
    var whatStopOn = lLine.indexOf(whatStopOn); 
    console.log(whatStopOn); // Tests that it works
    // Sets var which is a string to an array position
    var unionTransferOne = lLine.indexOf(transferStation);
    console.log(whatStopOff); // Tests that it works
    // Calculate the second leg of the trip.
    var unionTransferTwo = nLine.indexOf(transferStation);
    var whatStopOff = nLine.indexOf(whatStopOff);
    var tripDistanceOne = (whatStopOn + unionTransferOne);
    var tripDistanceTwo = (whatStopOff + unionTransferTwo);
    var tripDistance = (tripDistanceOne + tripDistanceTwo);
    console.log(tripDistance);
    break;

    case ("6" && "N"):
    var whatStopOn = sixLine.indexOf(whatStopOn); 
    console.log(whatStopOn); // Tests that it works
    // Sets var which is a string to an array position
    var unionTransferOne = sixLine.indexOf(transferStation);
    console.log(whatStopOff); // Tests that it works
    // Calculate the second leg of the trip.
    var unionTransferTwo = nLine.indexOf(transferStation);
    var whatStopOff = nLine.indexOf(whatStopOff);
    var tripDistanceOne = (whatStopOn + unionTransferOne);
    var tripDistanceTwo = (whatStopOff + unionTransferTwo);
    var tripDistance = (tripDistanceOne + tripDistanceTwo);
    console.log(tripDistance);
    break;

    case ("6" && "L"):
    var whatStopOn = sixLine.indexOf(whatStopOn); 
    console.log(whatStopOn); // Tests that it works
    // Sets var which is a string to an array position
    var unionTransferOne = sixLine.indexOf(transferStation);
    console.log(whatStopOff); // Tests that it works
    // Calculate the second leg of the trip.
    var unionTransferTwo = lLine.indexOf(transferStation);
    var whatStopOff = lLine.indexOf(whatStopOff);
    var tripDistanceOne = (whatStopOn + unionTransferOne);
    var tripDistanceTwo = (whatStopOff + unionTransferTwo);
    var tripDistance = (tripDistanceOne + tripDistanceTwo);
    console.log(tripDistance);
    break;
  }
 }


//   } else (whatLineOn !== whatLineOff) {  
//     switch (whatLineOn, whatLineOff) { 
//       case ("N" && "L"):
//       console.log("Otherwise");
//       break;
//     }
//   }
// }

console.log("There are " + tripDistance + " stops between those stations. Remeber to transfer at Union Station if you're changing trains.");