function greet(name) {
    return new Promise((resolve, reject) => {
      if (typeof name === "string") {
        resolve(`Hello, ${name}!`);
      } else {
        reject("Input must be a string");
      }
    });
  }

  greet("Mithun")
  .then((message) => {
    console.log(message); // Output: "Hello, Mithun!"
  })
  .catch((error) => {
    console.log(error);
  });
