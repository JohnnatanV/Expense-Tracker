const incomes = [];

const outcomes = [];

let loadApp = () => {
  loadHeader();
  getIncome();
  getOutcome();
  loadIncomes();
  loadOutcomes();
};

let getIncome = () => {
  let data = JSON.parse(localStorage.getItem("incomes"));

  for (let item of data) {
    incomes.push(item);
  }
  loadIncomes();
  return incomes;
};

let getOutcome = () => {
  let data = JSON.parse(localStorage.getItem("outcomes"));

  for (let item of data) {
    outcomes.push(item);
  }
  loadOutcomes();
  return outcomes;
};

let totalIncomes = () => {
  let totalIncome = 0;

  for (let income of incomes) {
    if (income.value) {
      totalIncome += income.value;
    } else {
      totalIncome += income._value;
    }
  }
  return totalIncome;
};

let totalOutcomes = () => {
  let totalOutcome = 0;

  for (let outcome of outcomes) {
    if (outcome.value) {
      totalOutcome += outcome.value;
    } else {
      totalOutcome += outcome._value;
    }
  }
  return totalOutcome;
};

let loadHeader = () => {
  let budget = totalIncomes() - totalOutcomes();
  let percentageOutcome = isNaN(totalOutcomes() / totalIncomes())
    ? 0
    : totalOutcomes() / totalIncomes();

  console.log(budget);

  document.getElementById("budget").innerHTML = coinFormat(budget);
  document.getElementById("percentage").innerHTML =
    percentageFormat(percentageOutcome);
  document.getElementById("incomes").innerHTML = coinFormat(totalIncomes());
  document.getElementById("outcomes").innerHTML = coinFormat(totalOutcomes());
};

const coinFormat = (value) => {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
};

const percentageFormat = (value) => {
  return value.toLocaleString("en-US", {
    style: "percent",
    minimumFractionDigits: 2,
  });
};

const loadIncomes = () => {
  let incomesHTML = "";
  for (let income of incomes) {
    incomesHTML += addIncomeHTML(income);
  }

  document.getElementById("incomes-list").innerHTML = incomesHTML;
};

const addIncomeHTML = (income) => {
  let incomeHTML = `
  <div class="element cleanStyles">
    <div class="element_description">${income.description}</div>
    <div class="right cleanStyles">
      <div class="element_value">${coinFormat(income.value)}</div>
        <div class="element_delete">
          <button class="element_delete--btn">
            <i class="fa-regular fa-circle-xmark" onclick="deleteIncome(${
              income.id
            })"></i>
          </button>
        </div>
      </div>
    </div>
  `;

  return incomeHTML;
};

const deleteIncome = (id) => {
  let deleteIndex = incomes.findIndex((income) => income.id === id);
  incomes.splice(deleteIndex, 1);
  loadHeader();
  loadIncomes();
};

const loadOutcomes = () => {
  let outcomesHTML = "";
  for (let outcome of outcomes) {
    outcomesHTML += addOutcomeHTML(outcome);
  }

  document.getElementById("outcomes-list").innerHTML = outcomesHTML;
};

const addOutcomeHTML = (outcome) => {
  let outcomeHTML = `
  <div class="element cleanStyles">
    <div class="element_description">${outcome.description}</div>
    <div class="right cleanStyles">
      <div class="element_value">- ${coinFormat(outcome.value)}</div>
      <div class="element_percentage">${percentageFormat(
        outcome.value / totalOutcomes()
      )}</div>
        <div class="element_delete">
          <button class="element_delete--btn">
            <i class="fa-regular fa-circle-xmark" onclick="deleteOutcome(${
              outcome.id
            })"></i>
          </button>
        </div>
      </div>
    </div>
  `;

  return outcomeHTML;
};

const deleteOutcome = (id) => {
  let deleteIndex = outcomes.findIndex((outcome) => outcome.id === id);
  outcomes.splice(deleteIndex, 1);
  loadHeader();
  loadOutcomes();
};

let incomeStorage = (income) => {
  localStorage.setItem("incomes", JSON.stringify(income));
};

let outcomeStorage = (outcome) => {
  localStorage.setItem("outcomes", JSON.stringify(outcome));
};

let addData = () => {
  let form = document.forms["form_budget"];
  let type = form["type"];
  let description = form["description"];
  let value = form["value"];

  if (description.value !== "" && value.value !== "") {
    if (type.value === "income") {
      incomes.push(new Income(description.value, Number(value.value))); // Cambiar un string a Number con el metodo
      incomeStorage(incomes);
      loadHeader();
      loadIncomes();
    } else if (type.value === "outcome") {
      outcomes.push(new Outcome(description.value, +value.value)); // Cambiar con metodo integrado de JS
      outcomeStorage(outcomes);
      loadHeader();
      loadOutcomes();
    }
    description.value = "";
    value.value = "";
  }
};

loadApp();
