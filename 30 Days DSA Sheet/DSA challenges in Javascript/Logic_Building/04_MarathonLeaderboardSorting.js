// you just need to implement the sortMarathonResults function
function sortMarathonResults(runners) {
  
  return runners.sort((a, b) => {
    if (a.time !== b.time) {
      return a.time - b.time; 
    } else {
      return a.name.localeCompare(b.name); // It compares two strings alphabetically
      // -ve -> 1st string comes 1st
      //  0  -> both are equal
      // +ve -> 2nd string comes 1st
    }
  });
  
  //return runners.sort((a,b) => a.time - b.time);
}

console.log(sortMarathonResults([
  { name: 'Liam', time: 100 },
  { name: 'Noah', time: 115 },
  { name: 'Oliva', time: 110 }
]));
