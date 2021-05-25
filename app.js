//Selectors
// Wallet
const walletBtn = document.querySelector(".wallet-btn");
const walletInput = document.querySelector(".wallet");
const wallet = document.querySelector("#wallet");
const pocket = document.querySelector("#pocket");
//Info
const amountInfo = document.querySelector(".amount-info");
const reasonInfo = document.querySelector(".reason-info");
//Submit
const expenseBtn = document.querySelector(".expense-button");
// List
const expenseList = document.querySelector(".expense-list");
const list = document.querySelector(".list");

// Event Listeners
document.addEventListener("DOMContentLoaded", getExpenses);
walletBtn.addEventListener("click", addWallet);
expenseBtn.addEventListener("click", addExpense);
list.addEventListener("click", deleteTrash);

// Functions
function addWallet(event) {
  event.preventDefault();

  const data = walletInput.value;
  localStorage.setItem("wallet", data);

  const hide = document.getElementById("display-wallet");
  hide.style.display = "none";

  const show = document.getElementById("display-form");
  show.style.display = "flex";

  wallet.innerText = `$ ${data}`;
}

// ADD EXPENSES
function addExpense(event) {
  //Prevent Submiting Reaload
  event.preventDefault();
  // Expense TR
  const expenseDiv = document.createElement("tr");
  expenseDiv.classList.add("expense");
  // Create  td

  const amountItem = document.createElement("td");
  amountItem.innerText = "$" + amountInfo.value;
  expenseDiv.appendChild(amountItem);

  const reasonItem = document.createElement("td");
  reasonItem.innerText = reasonInfo.value;
  expenseDiv.appendChild(reasonItem);

  const btnDelete = document.createElement("td");
  btnDelete.classList.add("btn-delete");
  btnDelete.innerHTML = '<input type="button" class="delete" value="X" />';
  expenseDiv.appendChild(btnDelete);

  //ADD TO LOCAL STORAGE
  saveLocalExpenses(amountInfo.value, reasonInfo.value);

  //APPEND LIST
  list.appendChild(expenseDiv);

  showPocket();

  //Clear Inputs
  amountInfo.value = "";
  reasonInfo.value = "";
}

//Reusable function for reload
function catchExpense() {
  if (localStorage.getItem("expenses") === null) {
    expenses = [];
  } else {
    expenses = JSON.parse(localStorage.getItem("expenses"));
  }
  return expenses;
}

//SAVE LOCAL EXPENCES
function saveLocalExpenses(item1, item2) {
  catchExpense();

  listExp = [];
  listExp.push(item1);
  listExp.push(item2);
  expenses.push(listExp);
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

//GET EXPENSES
function getExpenses() {
  catchExpense();
  showPocket();

  expenses.forEach((expense) => {
    const expenseDiv = document.createElement("tr");
    expenseDiv.classList.add("expense");
    // Create  td

    const amountItem = document.createElement("td");
    amountItem.innerText = `$ ${expense[0]}`;
    expenseDiv.appendChild(amountItem);

    const reasonItem = document.createElement("td");
    reasonItem.innerText = expense[1];
    expenseDiv.appendChild(reasonItem);

    const btnDelete = document.createElement("td");
    btnDelete.classList.add("btn-delete");
    btnDelete.innerHTML = '<input type="button" class="delete" value="X" />';
    expenseDiv.appendChild(btnDelete);

    list.appendChild(expenseDiv);
  });
}

//DELETE EXPENCE
function deleteTrash(e) {
  const item = e.target;
  console.log(item);
  //delete
}

//POCKET
function showPocket() {
  catchExpense();
  let expN = expenses.map((exp) => parseFloat(exp[0]));
  let total = expN.reduce((prev, next) => prev + next);
  pocket.innerText = `-$ ${total}`;
}
