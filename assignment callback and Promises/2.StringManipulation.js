function manipulateString(str) {
    const manipulatedString = str.toUpperCase();
    function logString() {
      console.log(`The manipulated string is: ${manipulatedString}`);
    }
    return logString;
  }

const myString = "Hello, world!";
const logString = manipulateString(myString);
logString(); // logs "The manipulated string is: HELLO, WORLD!" to the console
