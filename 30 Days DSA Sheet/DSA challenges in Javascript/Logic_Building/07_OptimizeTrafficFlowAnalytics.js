// you just need to implement the maxTrafficFlow function only
function maxTrafficFlow(trafficFlow, k) {

  let maxSum = 0;
  let currentSum = 0;

  // sum of 1st window
  for (let i = 0; i < k; i++) {
    currentSum += trafficFlow[i];
  }

  maxSum = currentSum;
  
  // k=2   // trafficFlow[0] = 100   // trafficFlow[0] = 200
  // currentSum = 100 + 200 = 300
  // maxSum = 300

  // slide window 1 step at a time
  for (let i = k; i < trafficFlow.length; i++) {
    currentSum = currentSum - trafficFlow[i - k] + trafficFlow[i];
    maxSum = Math.max(maxSum, currentSum);
  
  // start from i = 2 to trafficFlow.length - 1
    // currentSum = currentSum - trafficFlow[i - k] + trafficFlow[i];
    // currentSum = 300 - trafficFlow[0] + trafficFlow[2]
    // currentSum = 300 - 100 + 300 = 500

    // maxSum = Math.max(300, 500) = 500

  // i = 3
    // currentSum = currentSum - trafficFlow[1] + trafficFlow[3];
    // currentSum = 500 - 200 + 400 = 700

    // maxSum = Math.max(500, 700) = 700

  }
  
  return maxSum;
}


const trafficFlow = [100, 200, 300, 400];
const k = 2;

const maxSum = maxTrafficFlow(trafficFlow, k);
console.log(maxSum); // Output: Max Sum: 700
