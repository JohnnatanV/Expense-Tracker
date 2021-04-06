//Selectors
//Info
const nameInfo = document.querySelector(".name-info");
const dateInfo = document.querySelector(".date-info");
const amountInfo = document.querySelector(".amount-info");
const reasonInfo = document.querySelector(".reason-info");
//Submit
const expenceBtn = document.querySelector(".expence-button");
// List
const expenceList = document.querySelector(".expence-list");

// Event Listeners
expenceBtn.addEventListener("click", addExpence);
expenceList.addEventListener("click", deleteTrash);

// Functions
function addExpence(event) {
  //Prevent Submiting Reaload
  event.preventDefault();
  // Expence DIV
  const expenceDiv = document.createElement("tr");
  expenceDiv.classList.add("expence");
  // Create  LI
  const nameItem = document.createElement("td");
  nameItem.innerText = nameInfo.value;
  expenceDiv.appendChild(nameItem);

  const dateItem = document.createElement("td");
  dateItem.innerText = dateInfo.value;
  expenceDiv.appendChild(dateItem);

  const amountItem = document.createElement("td");
  amountItem.innerText = "$" + amountInfo.value;
  expenceDiv.appendChild(amountItem);

  const reasonItem = document.createElement("td");
  reasonItem.innerText = reasonInfo.value;
  expenceDiv.appendChild(reasonItem);

  const trashBtn = document.createElement("button");
  trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
  trashBtn.classList.add("trashBtn");
  expenceDiv.appendChild(trashBtn);

  //ADD TO LOCAL STORAGE
  saveLocalExpences(
    nameInfo.value,
    dateInfo.value,
    amountInfo.value,
    reasonInfo.value
  );

  //APPEND LIST
  expenceList.appendChild(expenceDiv);

  //Clear Inputs
  nameInfo.value = "";
  dateInfo.value = "";
  amountInfo.value = "";
  reasonInfo.value = "";
}

//SAVE LOCAL EXPENCES
function saveLocalExpences(item1, item2, item3, item4) {
  if (localStorage.getItem("expences") === null) {
    expences = [];
    listExp = [];
  } else {
    expences = JSON.parse(localStorage.getItem("listExp"));
  }
  listExp.push(item1);
  listExp.push(item2);
  listExp.push(item3);
  listExp.push(item4);
  expences.push(listExp);
  localStorage.setItem("expences", JSON.stringify(expences));
}

//DELETE EXPENCE
function deleteTrash(e) {
  const item = e.target;
  //delete
  if (item.classList[0] === "trashBtn") {
    const exp = item.parentElement;
  }
}
