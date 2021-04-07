//Selectors
//Info
const nameInfo = document.querySelector(".name-info");
const dateInfo = document.querySelector(".date-info");
const amountInfo = document.querySelector(".amount-info");
const reasonInfo = document.querySelector(".reason-info");
//Submit
const expenseBtn = document.querySelector(".expense-button");
// List
const expenseList = document.querySelector(".expense-list");

// Event Listeners
expenseBtn.addEventListener("click", addExpense);
expenseList.addEventListener("click", deleteTrash);

// Functions
function addExpense(event) {
  //Prevent Submiting Reaload
  event.preventDefault();
  // Expense TR
  const expenseDiv = document.createElement("tr");
  expenseDiv.classList.add("expence");
  // Create  td
  const nameItem = document.createElement("td");
  nameItem.innerText = nameInfo.value;
  expenseDiv.appendChild(nameItem);

  const dateItem = document.createElement("td");
  dateItem.innerText = dateInfo.value;
  expenseDiv.appendChild(dateItem);

  const amountItem = document.createElement("td");
  amountItem.innerText = "$" + amountInfo.value;
  expenseDiv.appendChild(amountItem);

  const reasonItem = document.createElement("td");
  reasonItem.innerText = reasonInfo.value;
  expenseDiv.appendChild(reasonItem);

  const trashBtn = document.createElement("button");
  trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
  trashBtn.classList.add("trashBtn");
  expenseDiv.appendChild(trashBtn);

  //ADD TO LOCAL STORAGE
  saveLocalExpenses(
    nameInfo.value,
    dateInfo.value,
    amountInfo.value,
    reasonInfo.value
  );

  //APPEND LIST
  expenseList.appendChild(expenseDiv);

  //Clear Inputs
  nameInfo.value = "";
  dateInfo.value = "";
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
function saveLocalExpenses(item1, item2, item3, item4) {
  catchExpense();

  listExp = [];
  listExp.push(item1);
  listExp.push(item2);
  listExp.push(item3);
  listExp.push(item4);
  expenses.push(listExp);
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

//GET EXPENSES
function getExpenses() {
  catchExpense();
}

//DELETE EXPENCE
function deleteTrash(e) {
  const item = e.target;
  //delete
  if (item.classList[0] === "trashBtn") {
    const exp = item.parentElement;
  }
}
