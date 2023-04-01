function doubleUsingCallback(arr, callback) {
  const newArr = [];
  arr.forEach((num) => {
    newArr.push(callback(num));
  });
  return newArr;
}

function double(num) {
  return num * 2;
}

const arr = [1, 2, 3, 4, 5];
const newArr = doubleUsingCallback(arr, double);
console.log(newArr); // Output: [2, 4, 6, 8, 10]
