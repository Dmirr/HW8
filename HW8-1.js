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

let arrValues = [];
for (let objectExpenses of expenses) {
  // первый цикл перебирает объекты
  for (let valueExpenses of objectExpenses.expenses) {
    // второй цикл беребирает массив объекта
    arrValues.push(valueExpenses); // все пушится в новый масссив
  }
}
console.log(arrValues);

// expenses.forEach(function(expens,index,expenses){
//    console.log(`element: ${expens}, index: ${index}, length: ${expenses.length}`)
//      })

//let newExpenses = expenses.concat(expenses)
//console.log(newExpenses)

// const expensesTotal = expenses.map(( expenses) => {
//         return {
//          expenses
//      }
//      })
//      console.log(expensesTotal)

// const filterexpenses = expenses.filter((expenses) => {
//   return expenses > 1000;
// });
// console.log(filterexpenses);
