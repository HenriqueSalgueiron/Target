function checkFribonacci(n) {
  let current = [0, 1];
  if (current.includes(n)) {
    return true;
  }
  while (current[current.length - 1] < n) {
    current = [current[1], current[0] + current[1]];
    if (current.includes(n)) {
      console.log("O número", n, "está na sequência de Fibonacci.");
      return;
    }
  }
  console.log("O número", n, "não está na sequência de Fibonacci.");
}

checkFribonacci(1);
checkFribonacci(2);
checkFribonacci(5);
checkFribonacci(6);
checkFribonacci(13);
