// SELECTORS
//info
const moneyInput = document.querySelector("#amountInput");
const tittleInput = document.querySelector("#tittleInput");
const movementType = document.querySelector("#movement");
const addMoney = document.querySelector(".moneyBtn");
//other-buttons
const edit = document.querySelector(".editBtn");
const trash = document.querySelector(".trashBtn");
//screen
const balanceValue = document.querySelector(".balance .value");
const incomeValue = document.querySelector(".income .value");
const outcomeValue = document.querySelector(".outcome .value");
const inBoard = document.querySelector(".board");
//Pages
const incomeScreen = document.querySelector("#incomeBtn");
const outcomeScreen = document.querySelector("#outcomeBtn");
const allScreen = document.querySelector("#allBtn");
const incomeElem = document.querySelector(["[type='income'"]);
const outcomeElem = document.querySelector(["[type='outcome'"]);

//GLOBAL VARIABLE
let ENTRY_LIST = [];
let balance = 0,
  income = 0,
  outcome = 0;

const DELETE = "delete",
  EDIT = "edit";

// EVENTS
// addMoney.addEventListener("click", addToken);

//board events
incomeScreen.addEventListener("click", function () {
  // show(incomeElem);
  // hide(outcomeElem);
  active(incomeScreen);
  inactive([outcomeScreen, allScreen]);
});

outcomeScreen.addEventListener("click", function () {
  // show(outcomeElem);
  // hide(incomeElem);
  active(outcomeScreen);
  inactive([incomeScreen, allScreen]);
});

allScreen.addEventListener("click", function () {
  // show([incomeElem, outcomeElem]);
  active(allScreen);
  inactive([incomeScreen, outcomeScreen]);
});

// FUNCTIONS
function show(elements) {
  if (Array.isArray(elements)) {
    elements.forEach((element) => element.classList.remove("hide"));
  }
  elements.classList.remove("hide");
}

function hide(elements) {
  elements.forEach((element) => element.classList.add("hide"));
}

function active(element) {
  element.classList.add("active");
}

function inactive(elements) {
  elements.forEach((element) => element.classList.remove("active"));
}

//
addMoney.addEventListener("click", function (event) {
  event.preventDefault();

  if (!moneyInput.value || !tittleInput.value) return;

  let ENTRY = {
    type: movementType.value,
    tittle: tittleInput.value,
    amount: parseFloat(moneyInput.value),
  };

  ENTRY_LIST.push(ENTRY);
  console.log(ENTRY_LIST);
});
