// you just need to implement the function
function maxInRollingWindow(prices, k) {
	const deque = [];
	const result = [];

	for (let i = 0; i < prices.length; i++) {
			while (deque.length && deque[0] <= i - k) {
					deque.shift();
			}

			while (deque.length && prices[deque[deque.length - 1]] < prices[i]) {
					deque.pop();
			}

			deque.push(i);

			if (i >= k - 1) {
					result.push(prices[deque[0]]);
			}

	}

	return result;
}

const prices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const k = 3;

const result = maxInRollingWindow(prices, k);
console.log(result);