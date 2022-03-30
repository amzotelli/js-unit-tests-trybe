const myCounter = () => {
  let myArray = [];
  for (let i = 0; i <= 3; i += 1) {
    myArray.push(i);
    for (let b = 2; b <= 3; b += 1) {
      myArray.push(b);
    }
  }
  return myArray;
};

module.exports = myCounter;
