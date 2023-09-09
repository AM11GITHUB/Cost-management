// Variables
let budget = 0;
let supply = 0;
let costs = 0;
let i = 0;

// Div
const tableDiv = document.querySelector(".table-div");

// Inputs
const inputBudget = document.getElementById("add-budget-input");
const inputCost1 = document.getElementById("add-cost-input1");
const inputCost2 = document.getElementById("add-cost-input2");

// Lables
const displayLeftLabel = document.querySelector(".display-left-label");
const displayRightLabel = document.querySelector(".display-right-label");
const displayCenterLabel = document.querySelector(".display-center-label");

// Buttons
const btnAddBudget = document.querySelector(".add-budget-button");
const btnAddCost = document.querySelector(".add-cost-button");
let btnTrash;

// Table
const table = document.querySelector(".table");

btnAddBudget.addEventListener("click", function () {
  if (inputBudget.value && inputBudget.value >= 0) {
    const inBidget = Number(inputBudget.value);

    budget += inBidget;
    console.log(budget);
    displayLeftLabel.textContent = `$${budget}`;

    supply += inBidget;
    displayRightLabel.textContent = `$${supply}`;
  }
});

btnAddCost.addEventListener("click", function () {
  if (inputCost1.value && inputCost1.value !== "") {
    const inCost1 = inputCost1.value;
    if (inputCost2.value && inputCost2.value >= 0) {
      const inCost2 = Number(inputCost2.value);
      if (supply - inCost2 >= 0) {
        costs += inCost2;
        supply -= inCost2;
        displayRightLabel.textContent = `$${supply}`;
        displayCenterLabel.textContent = `$${costs}`;

        const html = `
        
        <tr class="td-${i}">
            <td>${inCost1}</td>
            <td>${inCost2}</td>
            <td><button class="trash-button"><img class="td-${i}" src="images/icons8-trash-30.png"/></button></td>
        </tr>`;
        i++;

        table.insertAdjacentHTML("beforeend", html);
      }
    }
  }
});

tableDiv.addEventListener("click", function (e) {
  console.log(e.target.classList[0]);
  const index = e.target.classList[0].slice(3);
  console.log(index);
  const element = document.querySelector(`.td-${index}`);
  element.remove();
});
