// you just need to implement the countNotifications function only
function countNotifications(notifications) {
  countsCategory = {};

  // category count 
  for (let category of notifications) {
    if (countsCategory[category]) {
      countsCategory[category]++;
    } else {
      countsCategory[category] = 1;
    }
  }

  // Convert to array objects
  const result = Object.keys(countsCategory).map(category => ({
    category,
    count: countsCategory[category]
  }));

  // Sort alphabetically by category name
  result.sort((a, b) => a.category.localeCompare(b.category));

  return result;
}

console.log(countNotifications(["Event", "Offer", "Event", "Update", "Offer", "Offer", "Event"]));
