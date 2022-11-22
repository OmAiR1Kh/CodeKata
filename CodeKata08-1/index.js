const fs = require("fs");

fs.readFile("wordlist.txt", "utf8", function (err, data) {
  if (err) throw err;
  const arr = data.toLowerCase().split(/\r?\n/);
  let arrOfSix = [];
  for (let i = 0; i <= arr.length; i++) {
    `${arr[i]}`.length == 6 && arrOfSix.push(arr[i]);
  }

  const arrOneLetterStart = [];
  const arrOneLetterEnd = [];
  const arrTwoLettersStart = [];
  const arrTwoLettersEnd = [];
  const arrThreeLettersStart = [];
  const arrThreeLettersEnd = [];
  const arrFourLettersStart = [];
  const arrFourLettersEnd = [];
  const arrFiveLettersStart = [];
  const arrFiveLettersEnd = [];

  for (let i = 0; i < arrOfSix.length; i++) {
    arrOneLetterStart.push(arrOfSix[i].slice(0, 1));
    arrOneLetterEnd.push(arrOfSix[i].slice(5, 6));
    arrTwoLettersStart.push(arrOfSix[i].slice(0, 2));
    arrTwoLettersEnd.push(arrOfSix[i].slice(4, 6));
    arrThreeLettersStart.push(arrOfSix[i].slice(0, 3));
    arrThreeLettersEnd.push(arrOfSix[i].slice(3, 6));
    arrFourLettersStart.push(arrOfSix[i].slice(0, 4));
    arrFourLettersEnd.push(arrOfSix[i].slice(2, 6));
    arrFiveLettersStart.push(arrOfSix[i].slice(0, 5));
    arrFiveLettersEnd.push(arrOfSix[i].slice(1, 6));
  }

  const sequentialSearch = (arr, element) => {
    let res = [];
    for (let k = 0; k < element.length; k++) {
      let found = false;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element[k].toLowerCase()) {
          res.push(i);
          found = true;
        }
        if (found) break;
      }
      if (!found) res.push(-1);
    }
    return res;
  };
  console.log(sequentialSearch(arr, arrOneLetterStart));
  console.log(sequentialSearch(arr, arrOneLetterEnd));
  console.log(sequentialSearch(arr, arrTwoLettersStart));
  console.log(sequentialSearch(arr, arrTwoLettersEnd));
  console.log(sequentialSearch(arr, arrThreeLettersStart));
  console.log(sequentialSearch(arr, arrThreeLettersEnd));
  console.log(sequentialSearch(arr, arrFourLettersStart));
  console.log(sequentialSearch(arr, arrFourLettersEnd));
  console.log(sequentialSearch(arr, arrFiveLettersStart));
  console.log(sequentialSearch(arr, arrFiveLettersEnd));
});
