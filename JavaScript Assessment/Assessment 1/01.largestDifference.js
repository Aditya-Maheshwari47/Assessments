//// 1. Write a function that takes an array of integers 
// and returns the largest difference between any two numbers in the array.
let arr = [90,1,11,23,100,65];
// method 1-->
function largestDifference(arr){
    let sorted = arr.sort((a,b)=>a-b);
    return arr[arr.length - 1] - arr[0];
}

// method 2-->
function largestDifference2(arr){
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    return max - min;
}

//method 3-->
function largestDifference3(arr){
    if(arr.length < 2) return 0;
    let largestDiff = arr[1] - arr[0];
    for(let i = 0; i < arr.length ; i++){
        for(let j = 0 ; j < arr.length; j++){
            let curDifference = arr[i] - arr[j];
            if(curDifference < largestDiff) largestDiff = curDifference;
        }
    }
    return largestDiff;
}

console.log(largestDifference(arr));
console.log(largestDifference2(arr));
console.log(largestDifference3(arr));