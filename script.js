function secondHighest(arr) {
    if (!Array.isArray(arr) || arr.length < 2) {
        return -Infinity;
    }

    let max = -Infinity;
    let second = -Infinity;

    for (let num of arr) {
        if (num > max) {
            second = max;
            max = num;
        } else if (num > second && num < max) {
            second = num;
        }
    }

    return (second === -Infinity) ? -Infinity : second;
}
//your JS code here. If required.
