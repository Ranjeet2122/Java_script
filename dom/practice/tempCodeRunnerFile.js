let arr = [1, 4, 2, 7, 1, 4];
let repeatedValues = [];

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j] && !repeatedValues.includes(arr[i])) {
            repeatedValues.push(arr[i]);
        }
    }
}

console.log(repeatedValues);