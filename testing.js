let expences = [];
let listExp = [];

function saveLocalExpences(item1, item2, item3, item4) {
  expences.push(item1);
  expences.push(item2);
  expences.push(item3);
  expences.push(item4);
  listExp.push(expences);
  console.log(listExp);
  console.log(JSON.stringify(listExp));
}

saveLocalExpences("Angie", "02/03/2021", 20000, "Pan");
saveLocalExpences("Johnn", "01/03/2021", 12000, "Mas Pan");
