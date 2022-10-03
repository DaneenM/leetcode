const arrayOfNums = [0, 4, 7, 18, 21, 19, 142, 3];
let largestNumber = arrayOfNums [0];

function findLargestNumber() {
    for (let i=0; i < arrayOfNums.length; i++){
        if(arrayOfNums[i] > largestNumber) {
            largestNumber = arrayOfNums[i];
        }
    }
    return largestNumber;
}

console.log(findLargestNumber());

function findEvenNumbers () {
    let evenArray = [];
    for (let i=0; i < arrayOfNums.length; i++) {
        if (arrayOfNums[i] % 2 === 0) {
            evenArray.push(arrayOfNums[i]);
        }
    }
    return evenArray;
}

console.log(findEvenNumbers());


//Javascript program in class
const twoNumbers = [0, 12];
let biggestNumber = twoNumbers [0];

function findBiggestNumber() {
    for (let i=0; i < twoNumbers.length; i++) {
        if(twoNumbers[i] > biggestNumber) {
            biggestNumber = twoNumbers[i];
        }
    }
    return biggestNumber;
}

console.log(findBiggestNumber());

//Solution #1 https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercises.php#EDITOR

//push code from class + readme (what you're struggling with) + leetcode + reading


