// 2. Write a function that takes an array of objects and a key, and returns a new array sorted based on the values of that key in ascending order.
// const data = [
//   { name: "Alice", age: 30 },
//   { name: "Bob", age: 25 },
//   { name: "Charlie", age: 35 }
// ];

const data = [
   { name: "Alice", age: 30 },
   { name: "Bob", age: 25 },
   { name: "Charlie", age: 35 }
 ];
const key = "age";
function sortArrayUsingKey(data, key) {

    let outputArray = data.sort(function(a, b) {
        if (a[key] > b[key]) {
         return 1;
        } else if (a[key] < b[key]) {
            return -1;
        }else {
            return 0;
        }
    })

    return outputArray;
}
console.log(sortArrayUsingKey(data, key));