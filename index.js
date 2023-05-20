function findPair(array, k) {
    let map = new Map();

    for (let i = 0; i < array.length; i++) {
        let complement = k - array[i];

        if (map.has(complement)) {
            let index1 = map.get(complement) + 1; // Adjusting to 1-index
            let index2 = i + 1; // Adjusting to 1-index
            return [index1, index2];
        }

        if (!map.has(array[i])) {
            // Store the first occurrence of the number
            map.set(array[i], i);
        }
    }

    return [];
}

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;

readline.on("line", readInputs);

function readInputs(line) {
    inputArr.push(line);
    lineNumber++;

    if (lineNumber == 1) {
        logic("s");
        readline.close();
    }
}

function logic(input) {
    let N = parseInt(inputArr[0].split(" ")[0]);
    let X = parseInt(inputArr[0].split(" ")[1]);
    let Arr = inputArr[1].split(" ").map((x) => parseInt(x));

    console.log(findPair(Arr, X).join(" "));
}
