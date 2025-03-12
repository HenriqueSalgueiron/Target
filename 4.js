let data = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  outros: 19849.53,
};

function calculatePercentage(data) {
  const total = Object.values(data).reduce((acc, cur) => acc + cur, 0);
  const percentage = Object.entries(data).map(([key, value]) => ({
    [key]: `${((value / total) * 100).toFixed(2)}%`,
  }));
  return percentage;
}

console.log(calculatePercentage(data));
