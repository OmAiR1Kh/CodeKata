const fs = require("fs");

fs.readFile("../CodeKata08-1/wordlist.txt", "utf8", function (err, data) {
  if (err) throw err;

  const arr = data.toLowerCase().split(/\r?\n/);

  const arrOne = [];
  const arrTwo = [];
  const arrThree = [];
  const arrFour = [];
  const arrFive = [];

  for (let i in arr) {
    if (`${arr[i]}`.length == 6) {
      arrOne.push(arr[i].slice(0, 1));
      arrOne.push(arr[i].slice(5, 6));
      arrTwo.push(arr[i].slice(0, 2));
      arrTwo.push(arr[i].slice(4, 6));
      arrThree.push(arr[i].slice(0, 3));
      arrThree.push(arr[i].slice(3, 6));
      arrFour.push(arr[i].slice(0, 4));
      arrFour.push(arr[i].slice(2, 6));
      arrFive.push(arr[i].slice(0, 5));
      arrFive.push(arr[i].slice(1, 6));
    }
  }
  
  // d=data, t=target, s=start, e=end, m=middle
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
  let resultArrOne = []
  let resultArrTwo = []
  let resultArrThree = []
  let resultArrFour = []
  let resultArrFive = []
  for (let i = 0; i <arrOne.length; i++){
    resultArrOne.push(binarySearch(arr, arrOne[i], 0, arrOne.length));
    resultArrTwo.push(binarySearch(arr, arrTwo[i], 0, arrTwo.length));
    resultArrThree.push(binarySearch(arr, arrThree[i], 0, arrThree.length));
    resultArrFour.push(binarySearch(arr, arrFour[i], 0, arrFour.length));
    resultArrFive.push(binarySearch(arr, arrFive[i], 0, arrFive.length));
  }
  console.log(resultArrOne, resultArrTwo, resultArrThree, resultArrFour, resultArrFive);
});
