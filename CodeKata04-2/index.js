const fs = require("fs");

fs.readFile("./football.dat", "utf-8", function (err, data) {
  if (err) throw err;
  let F = [];
  let A = [];
  let Team = [];
  data.split(/\r?\n/).forEach((i) => {
    F.push(i.slice(43, 46).trim());
    A.push(i.slice(50, 53).trim());
    Team.push(i.slice(7, 21).trim());
  });

  let tm = [];
  let fr = [];
  let ag = [];
  for (let i = 2; i < Team.length - 1; i++) {
    tm.push(Team[i]);
  }
  for (let i = 2; i < F.length - 1; i++) {
    if (typeof (F[i] === Number)) {
      fr.push(parseFloat(F[i]));
    }
  }
  for (let i = 2; i < A.length - 1; i++) {
    ag.push(parseFloat(A[i]));
  }
  const obj = {
    Team: tm,
    F: fr,
    A: ag,
  };
  console.table(obj);
});
