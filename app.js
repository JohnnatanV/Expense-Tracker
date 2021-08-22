// SELECTORS
//info
const money = document.querySelector("#number");
const tittle = document.querySelector("#text");
const addMoney = document.querySelector(".moneyBtn");
const movement = document.querySelector("#movement");
//other-buttons
const edit = document.querySelector(".edit");
const trash = document.querySelector(".trash");
//screen
const balanceValue = document.querySelector(".balanceValue");

// EVENTS
addMoney.addEventListener("click", add);

// FUNCTIONS
function add(event) {
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

  show.appendChild(addData);
  console.log(`$${money.value}, ${tittle.value}, ${movement.value}`);
}
