import fs from "fs";

function getData() {
  const data = fs.readFileSync("./dados.json");
  return JSON.parse(data);
}

const data = getData().filter((item) => item.valor);

function getMin(data) {
  return data.reduce((acc, cur) => (acc < cur.valor ? acc : cur.valor));
}

function getMax(data) {
  return data.reduce((acc, cur) => (acc > cur.valor ? acc : cur.valor), 0);
}

function getAverage(data) {
  const total = data.reduce((acc, cur) => acc + cur.valor, 0);
  return total / data.length;
}

function getHigherDaysCount(data) {
  const average = getAverage(data);
  return data.reduce((acc, cur) => (cur.valor > average ? acc + 1 : acc), 0);
}

function getIncomeResult() {
  return {
    min: getMin(data),
    max: getMax(data),
    higherDaysCount: getHigherDaysCount(data),
  };
}

console.log(getIncomeResult());
