function secondHighest(arr) {
    // Edge case: Not an array or has fewer than 2 elements
    if (!Array.isArray(arr) || arr.length < 2) {
        return -Infinity;
    }

    let max = -Infinity;
    let secondMax = -Infinity;

    for (let num of arr) {
        if (num > max) {
            // New max found; shift previous max to secondMax
            secondMax = max;
            max = num;
        } else if (num > secondMax && num < max) {
            // New second max found
            secondMax = num;
        }
    }

    return (secondMax === -Infinity) ? -Infinity : secondMax;
}
