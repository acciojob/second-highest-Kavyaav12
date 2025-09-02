function secondHighest(arr) {
  if (arr.length < 2) return -Infinity;

  let max = -Infinity;
  let secondMax = -Infinity;

  for (let num of arr) {
    if (num > max) {
      secondMax = max;
      max = num;
    } else if (num < max && num > secondMax) {
      secondMax = num;
    }
  }

  // If secondMax was never updated (all elements are same or only 1 unique element)
  return secondMax === -Infinity ? -Infinity : secondMax;
}
