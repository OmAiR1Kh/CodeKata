const fs = require("fs");

fs.readFile("../CodeKata08-1/wordlist.txt", "utf8", function (err, data) {
  if (err) throw err;
  const arr = data.toLowerCase().split(/\r?\n/);
  let arrOfOne = [];
  let arrOfTwo = [];
  let arrOfThree = [];
  let arrOfFour = [];
  let arrOfFive = [];
  arrOfSix = [];
  for (let i in arr) {
    if (`${arr[i]}`.length == 1) {
      arrOfOne.push(arr[i]);
    }
    if (`${arr[i]}`.length == 2) {
      arrOfTwo.push(arr[i]);
    }
    if (`${arr[i]}`.length == 3) {
      arrOfThree.push(arr[i]);
    }
    if (`${arr[i]}`.length == 4) {
      arrOfFour.push(arr[i]);
    }
    if (`${arr[i]}`.length == 5) {
      arrOfFive.push(arr[i]);
    }
    if (`${arr[i]}`.length == 6) {
      arrOfSix.push(arr[i]);
    }
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

  const binarySearch = (d, t, s, e) => {
    while (s <= e) {
      let mid = Math.floor((s + e) / 2);

      if (d[mid] == t) {
        return mid;
      }

      if (d[mid] < t) {
        s = mid + 1;
      } else {
        e = mid - 1;
      }
    }
    return -1;
  };

  let res1 = [];
  let res2 = [];
  let res3 = [];
  let res4 = [];
  let res5 = [];
  let res6 = [];
  let res7 = [];
  let res8 = [];
  let res9 = [];
  let res10 = [];

  for (let i = 0; i < arrOneLetterStart.length; i++) {
    res1.push(
      binarySearch(arr, arrOneLetterStart[i], 0, arrOneLetterStart.length)
    );
  }
  for (let i = 0; i < arrOneLetterEnd.length; i++) {
    res2.push(
      binarySearch(arr, arrOneLetterEnd[i], 0, arrOneLetterEnd.length)
    );
  }
  for (let i = 0; i < arrTwoLettersStart.length; i++) {
    res3.push(
      binarySearch(arr, arrTwoLettersStart[i], 0, arrTwoLettersStart.length)
    );
  }
  for (let i = 0; i < arrTwoLettersEnd.length; i++) {
    res4.push(
      binarySearch(arr, arrTwoLettersEnd[i], 0, arrTwoLettersEnd.length)
    );
  }
  for (let i = 0; i < arrThreeLettersStart.length; i++) {
    res5.push(
      binarySearch(arr, arrThreeLettersStart[i], 0, arrThreeLettersStart.length)
    );
  }
  for (let i = 0; i < arrThreeLettersEnd.length; i++) {
    res6.push(
      binarySearch(arr, arrThreeLettersEnd[i], 0, arrThreeLettersEnd.length)
    );
  }
  for (let i = 0; i < arrFourLettersStart.length; i++) {
    res7.push(
      binarySearch(arr, arrFourLettersStart[i], 0, arrFourLettersStart.length)
    );
  }
  for (let i = 0; i < arrFourLettersEnd.length; i++) {
    res8.push(
      binarySearch(arr, arrFourLettersEnd[i], 0, arrFourLettersEnd.length)
    );
  }
  for (let i = 0; i < arrFiveLettersStart.length; i++) {
    res9.push(
      binarySearch(arr, arrFiveLettersStart[i], 0, arrFiveLettersStart.length)
    );
  }
  for (let i = 0; i < arrFiveLettersEnd.length; i++) {
    res10.push(
      binarySearch(arr, arrFiveLettersEnd[i], 0, arrFiveLettersEnd.length)
    );
  }
  console.log(res1, res2, res3, res4, res5, res6, res7, res8, res9, res10);
});
