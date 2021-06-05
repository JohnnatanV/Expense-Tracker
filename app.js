//Selectors
// Wallet
const walletBtn = document.querySelector(".wallet-btn");
const wallet = document.querySelector("#wallet");
const pocket = document.querySelector("#pocket");
//Info
const amountInfo = document.querySelector(".amount-info");
const reasonInfo = document.querySelector(".reason-info");
//Submit
const expenseBtn = document.querySelector(".expense-button");
const clearAll = document.querySelector(".clear");
// List
const expenseList = document.querySelector(".expense-list");
const del = document.querySelectorAll(".delete");
const list = document.querySelector(".list");

// Event Listeners
document.addEventListener("DOMContentLoaded", getExpenses);
walletBtn.addEventListener("click", addWallet);
expenseBtn.addEventListener("click", addExpense);
clearAll.addEventListener("click", clean);
list.addEventListener("click", deleteTrash);

// Functions
function addWallet() {
  const formWallet = document.querySelector("#display-wallet");
  formWallet.onsubmit = (event) => {
    event.preventDefault();
    const data = document.querySelector("#walletInput").value;
    localStorage.setItem("wallet", data);
    hideShow();
    amountInfo.focus();
  };
}

// ADD EXPENSES
function addExpense(event) {
  //Render Expense
  const form = document.querySelector("#display-form");
  form.onsubmit = (event) => {
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
    btnDelete.innerHTML = '<button class="delete">X</button>';
    expenseDiv.appendChild(btnDelete);

    //ADD TO LOCAL STORAGE
    saveLocalExpenses(amountInfo.value, reasonInfo.value);

    //APPEND LIST
    list.appendChild(expenseDiv);

    show();

    //Clear Inputs
    amountInfo.value = "";
    reasonInfo.value = "";
    location.reload();
    amountInfo.focus();
  };
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
  hideShow();
  show();

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
    btnDelete.innerHTML = '<button class="delete">X</button>';
    expenseDiv.appendChild(btnDelete);

    list.appendChild(expenseDiv);
    amountInfo.focus();
  });
}

//DELETE EXPENCE
function deleteTrash(e) {
  catchExpense();
  const item = e.target;

  if (item.classList.value === "delete") {
    let tr = item.closest("tr");
    let node1 = tr.childNodes[0].innerText.split(" ").splice(1, 1)[0];
    let node2 = tr.childNodes[1].innerText;
    expenses.forEach((item) => {
      if (item[0] === node1 && item[1] === node2) {
        let dataIndex = expenses.indexOf(item);
        expenses.splice(dataIndex, 1);
        localStorage.setItem("expenses", JSON.stringify(expenses));
        location.reload();
      }
    });
  }
}

//POCKET
function show() {
  catchExpense();
  let expN = expenses.map((exp) => parseFloat(exp[0]));
  let total = expN.reduce((prev, next) => prev + next);
  pocket.innerText = `$ -${total}`;

  let insideWallet = parseFloat(localStorage.getItem("wallet"));

  insideWallet = insideWallet - total;
  wallet.innerText = `$ ${insideWallet}`;

  if (insideWallet <= 0) {
    alert("Se acabo el billete");
  }
}

// HIDE AND SEEK
function hideShow() {
  if (localStorage.getItem("wallet") !== null) {
    const hide = document.getElementById("display-wallet");
    hide.style.display = "none";
    wallet.innerText = `$ ${localStorage.getItem("wallet")}`;

    const show = document.getElementById("display-form");
    show.style.display = "flex";
  }
}

function clean() {
  localStorage.clear();
  walletInput.value = "";
  location.reload();
}
