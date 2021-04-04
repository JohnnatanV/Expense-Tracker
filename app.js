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

// Functions
function addExpence(event) {
  //Prevent Submiting Reaload
  event.preventDefault();
  // Expence DIV
  const expenceDiv = document.createElement("div");
  expenceDiv.classList.add("expence");
  // Create  LI
  const nameItem = document.createElement("li");
  nameItem.innerText = nameInfo.value;
  nameItem.classList.add("name-item");
  expenceDiv.appendChild(nameItem);

  const dateItem = document.createElement("li");
  dateItem.innerText = dateInfo.value;
  dateItem.classList.add("date-item");
  expenceDiv.appendChild(dateItem);

  const amountItem = document.createElement("li");
  amountItem.innerText = amountInfo.value;
  amountItem.classList.add("amount-item");
  expenceDiv.appendChild(amountItem);

  const reasonItem = document.createElement("li");
  reasonItem.innerText = reasonInfo.value;
  reasonItem.classList.add("reason-item");
  expenceDiv.appendChild(reasonItem);

  //ADD TO LOCAL STORAGE
  // saveLocalExpences(
  //   nameInfo.value,
  //   dateInfo.value,
  //   amountInfo.value,
  //   reasonInfo.value
  // );

  //APPEND LIST
  expenceList.appendChild(expenceDiv);

  //Clear Inputs
  nameInfo.value = "";
  dateInfo.value = "";
  amountInfo.value = "";
  reasonInfo.value = "";
}

// SAVE LOCAL EXPENCES
// function saveLocalExpences(item1, item2, item3, item4) {
//   if (localStorage.getItem("listExp") === null) {
//     expences = [];
//     listExp = [];
//   } else {
//     todos = JSON.parse(localStorage.getItem("listExp"));
//   }
//   expences.push(item1);
//   expences.push(item2);
//   expences.push(item3);
//   expences.push(item4);
//   listExp.push(expences);
//   localStorage.setItem("listExp", JSON.stringify(listExp));
// }
