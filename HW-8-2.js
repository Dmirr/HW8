let expenses = [
  { expenses: [2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390] },
  {
    expenses: [
      500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200,
    ],
  },
  {
    expenses: [
      20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000,
    ],
  },
];

let expensesDate = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
expensesDate.forEach(function (value, index, values) {
  console.log(`month: ${value}, index: ${index}, length: ${values.length}`);
});

let arrValues = [];
for (let objectExpenses of expenses) {
  // первый цикл перебирает объекты
  for (let valueExpenses of objectExpenses.expenses) {
    // второй цикл перебирает массив объекта
    arrValues.push(valueExpenses); // все пушится в новый масссив
  }
}

const filterExpenses = arrValues.filter((value) => {
  return value <= 1000;
});
console.log(filterExpenses);

const numberOfExpensies = arrValues.map((value, index) => {
  return {
    id: index,
    expenses: value,
  };
});

console.log(numberOfExpensies);
