// 2. Implement a function that finds the index of a specific element in an array. 
// if the element is not found, the function should return -1.
let arr = [-65,1,11,23,54,65];
function findElement(arr,element){
    for(let i = 0; i < arr.length ; i++){
        if(arr[i] === element){
            return i;
        }
    }
     return -1;
}
console.log(findElement(arr,1));