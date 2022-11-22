const fs = require("fs");

const fileName = "./weather.dat";
fs.readFile("./weather.dat", "utf8", function (err, data) {
  if (err) throw err;

  let arrNum = [];
  let arrMax = [];
  let arrMin = [];
  data.split(/\r?\n/).forEach((i) => {
    arrNum.push(i.slice(2, 4).trim());
    arrMax.push(i.slice(5, 10).trim());
    arrMin.push(i.slice(11, 16).trim());
  });
  //   console.log(arrNum, arrMax, arrMin);

  let Dy = [];
  let Mxt = [];
  let Mnt = [];
  for (let i = 2; i < arrNum.length - 1; i++) {
    Dy.push(parseFloat(arrNum[i]));
  }
  for (let i = 2; i < arrMax.length - 1; i++) {
    Mxt.push(parseFloat(arrMax[i]));
  }
  for (let i = 2; i < arrMin.length - 1; i++) {
    Mnt.push(parseFloat(arrMin[i]));
  }
  const obj = {
    Dy: Dy,
    Mxt: Mxt,
    MnT: Mnt,
  };
  console.table(obj);
});
