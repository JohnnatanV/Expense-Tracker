const incomesData = JSON.parse(localStorage.getItem("incomes"));
const outcomesData = JSON.parse(localStorage.getItem("outcomes"));

let restoreApp = () => {
  restoreHeader();
  restoreIncomes();
  restoreOutcomes();
};

let totalIncomesData = () => {
  let totalIncome = 0;

  for (let income of incomesData) {
    totalIncome += income._value;
  }
  return totalIncome;
};

let totalOutcomesData = () => {
  let totalOutcome = 0;

  for (let outcome of outcomesData) {
    totalOutcome += outcome._value;
  }
  return totalOutcome;
};

let restoreHeader = () => {
  let budget = totalIncomesData() - totalOutcomesData();
  let percentageOutcome = isNaN(totalOutcomesData() / totalIncomesData())
    ? 0
    : totalOutcomesData() / totalIncomesData();

  document.getElementById("budget").innerHTML = coinFormat(budget);
  document.getElementById("percentage").innerHTML =
    percentageFormat(percentageOutcome);
  document.getElementById("incomes").innerHTML = coinFormat(totalIncomesData());
  document.getElementById("outcomes").innerHTML = coinFormat(
    totalOutcomesData()
  );
};

const restoreIncomes = () => {
  let incomesHTML = "";
  for (let income of incomesData) {
    incomesHTML += restoreIncomeHTML(income);
  }

  document.getElementById("incomes-list").innerHTML = incomesHTML;
};

const restoreIncomeHTML = (income) => {
  let incomeHTML = `
  <div class="element cleanStyles">
    <div class="element_description">${income._description}</div>
    <div class="right cleanStyles">
      <div class="element_value">${coinFormat(income._value)}</div>
        <div class="element_delete">
          <button class="element_delete--btn">
            <i class="fa-regular fa-circle-xmark" onclick="deleteIncomeData(${
              income._id
            })"></i>
          </button>
        </div>
      </div>
    </div>
    `;

  return incomeHTML;
};

const deleteIncomeData = (id) => {
  let deleteIndex = incomesData.findIndex((income) => income._id === id);
  incomesData.splice(deleteIndex, 1);
  localStorage.setItem("incomes", JSON.stringify(incomesData));
  restoreHeader();
  restoreIncomes();
};

const restoreOutcomes = () => {
  let outcomesHTML = "";
  for (let outcome of outcomesData) {
    outcomesHTML += restoreOutcomeHTML(outcome);
  }

  document.getElementById("outcomes-list").innerHTML = outcomesHTML;
};

const restoreOutcomeHTML = (outcome) => {
  let outcomeHTML = `
  <div class="element cleanStyles">
    <div class="element_description">${outcome._description}</div>
    <div class="right cleanStyles">
      <div class="element_value">${coinFormat(outcome._value)}</div>
        <div class="element_delete">
          <button class="element_delete--btn">
            <i class="fa-regular fa-circle-xmark" onclick="deleteOutcomeData(${
              outcome._id
            })"></i>
          </button>
        </div>
      </div>
    </div>
    `;

  return outcomeHTML;
};

const deleteOutcomeData = (id) => {
  let deleteIndex = outcomesData.findIndex((outcome) => outcome._id === id);
  outcomesData.splice(deleteIndex, 1);
  localStorage.setItem("outcomes", JSON.stringify(outcomesData));
  restoreHeader();
  restoreOutcomes();
};

restoreApp();
