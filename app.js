// SELECTORS
//info
const money = document.querySelector("#number");
const tittle = document.querySelector("#text");
const movement = document.querySelector("#movement");
const addMoney = document.querySelector(".moneyBtn");
//other-buttons
const edit = document.querySelector(".edit");
const trash = document.querySelector(".trash");
//screen
const balanceValue = document.querySelector(".balanceValue");

// EVENTS
addMoney.addEventListener("click", addToken);

// FUNCTIONS
function addToken(event) {
  event.preventDefault();
  const show = document.querySelector(".board");

  const addData = document.createElement("div");
  addData.classList.add("data");

  const move = document.createAttribute("type");
  move.value = movement.value;
  addData.setAttributeNode(move);

  addData.innerHTML = `<div class="value">$${money.value}</div>`;

  const edition = document.createElement("div");

  const edit = document.createElement("button");
  edit.classList.add("edit");
  edit.type = "submit";
  edit.innerHTML = `<i class="fas fa-edit"></i>`;
  edition.appendChild(edit);

  const trash = document.createElement("button");
  trash.classList.add("trash");
  trash.type = "submit";
  trash.innerHTML = `<i class="fas fa-trash-alt"></i>`;
  edition.appendChild(trash);

  addData.appendChild(edition);

  if (!money.value && !tittle.value) {
    alert("Need arguments to continue");
    return;
  } else if (!money.value || !tittle.value) {
    alert("One of the arguments is missing");
    return;
  } else {
    saveLocalWallet(money.value, tittle.value, movement.value);
  }

  show.appendChild(addData);

  tittle.value = "";
  money.value = "";
  money.focus();
  console.log(`$${money.value}, ${tittle.value}, ${movement.value}`);
}

//Reusable function for reload
function catchMoney() {
  if (localStorage.getItem("wallet") === null) {
    wallet = [];
  } else {
    wallet = JSON.parse(localStorage.getItem("wallet"));
  }
  return wallet;
}

//SAVE LOCAL EXPENCES
function saveLocalWallet(item1, item2, item3) {
  catchMoney();

  listExp = [];
  listExp.push(item1);
  listExp.push(item2);
  listExp.push(item3);
  wallet.push(listExp);
  localStorage.setItem("wallet", JSON.stringify(wallet));
}
