function processQueries(n, marbles, queries) {

  const results = [];

  for (const [l, r] of queries) {
    let sum = 0;
    for (let i = l - 1; i <= r - 1; i++) {
      sum += marbles[i];
    }
    results.push(sum);
  }

  return results;
}

const n = 6;
const marbles = [10, 20, 30, 40, 50, 60];
const queries = [  [1, 4], [3, 6] ];

console.log(processQueries(n, marbles, queries)); // Output: [100, 180]



// Explain Test case 1 :
// 6 2                  ← n = 6 pits & q = 2 queries
// 10 20 30 40 50 60    ← marbles in each pit
// 1 4                  ← Query 1: sum from pit 1 to 4
// 3 6                  ← Query 2: sum from pit 3 to 6

// Marbles Array 
//  Index:   1  2  3  4  5  6
//  Marbles: 10 20 30 40 50 60

// Query 1: 1 4 --> we sum from pit 1 to pit 4
// Marbles = 10+20+30+40=100

// Query 2: 3 6 --> we sum from pit 3 to pit 6
// Marbles = 30+40+50+60=180

// Output -
// 100
// 180
