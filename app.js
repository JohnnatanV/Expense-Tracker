//Selectors
// Pocket
const pocket = document.querySelector("#pocket");
//Info
const amountInfo = document.querySelector(".amount-info");
const reasonInfo = document.querySelector(".reason-info");
//Submit
const expenseBtn = document.querySelector(".expense-button");
const incomeBtn = document.querySelector(".income-button");
// List
const expenseList = document.querySelector(".expense-list");

// Event Listeners
document.addEventListener("DOMContentLoaded", getExpenses);
expenseBtn.addEventListener("click", addExpense);
incomeBtn.addEventListener("click", addExpense);
expenseList.addEventListener("click", deleteTrash);

// Functions
function addExpense(event) {
  //Prevent Submiting Reaload
  event.preventDefault();
  // Expense TR
  const expenseDiv = document.createElement("tr");
  expenseDiv.classList.add("expence");
  // Create  td

  const amountItem = document.createElement("td");
  amountItem.innerText = "$" + amountInfo.value;
  expenseDiv.appendChild(amountItem);

  const reasonItem = document.createElement("td");
  reasonItem.innerText = reasonInfo.value;
  expenseDiv.appendChild(reasonItem);

  //ADD TO LOCAL STORAGE
  saveLocalExpenses(amountInfo.value, reasonInfo.value);

  //APPEND LIST
  expenseList.appendChild(expenseDiv);

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
    expenseDiv.classList.add("expence");
    // Create  td

    const amountItem = document.createElement("td");
    amountItem.innerText = "$" + expense[0];
    expenseDiv.appendChild(amountItem);

    const reasonItem = document.createElement("td");
    reasonItem.innerText = expense[1];
    expenseDiv.appendChild(reasonItem);

    expenseList.appendChild(expenseDiv);
  });
}

//DELETE EXPENCE
function deleteTrash(e) {
  const item = e.target;
  //delete
}

//POCKET
function showPocket() {
  catchExpense();
  let expN = expenses.map((exp) => parseFloat(exp[0]));
  let total = expN.reduce((prev, next) => prev + next);
  console.log(total);
}
