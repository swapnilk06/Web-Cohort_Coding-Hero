// you just need to implement this function
function maxCashInWindow(cash, k) {
  let n = cash.length;

  
  // Calculate sum of first 'k' hours
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += cash[i];
  }

  let maxSum = windowSum;

  // slide the window across the array
    for (let i = k; i < n; i++) {
    windowSum = windowSum - cash[i - k] + cash[i];
    if (windowSum > maxSum) {
      maxSum = windowSum;
    }
  }

  return maxSum;
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', (line) => {
  input.push(line);
});

rl.on('close', () => {
  const [n, k] = input[0].split(' ').map(Number);
  const cash = input[1].split(' ').map(Number);
  
  const result = maxCashInWindow(cash, k);
  process.stdout.write(result.toString());
});