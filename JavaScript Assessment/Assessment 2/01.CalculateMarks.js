// Write a JavaScript program that:
// 1. Calculates the average marks for each student
// 2. Assigns a grade based on the average:
// o A → average ≥ 90
// o B → average ≥ 75 and < 90
// o C → average ≥ 60 and < 75
// o D → average < 60
// 3. Finds the top-scoring student
// 4. Returns a summary objectInput array –

// students = [{ name: "Alice", marks: [85, 92, 88] },
// { name: "Bob", marks: [70, 68, 72] },
// { name: "Charlie", marks: [95, 90, 93] },
// { name: "Diana", marks: [55, 60, 58] }];

// Output should be like this - 
// {results: [{ name: "Alice", average: 88.33, grade: "B" }
// ,{ name: "Bob", average: 70, grade: "C" }
// ,{ name: "Charlie", average: 92.67, grade: "A" },
// { name: "Diana", average: 57.67, grade: "D" }],


const students =  [
    { name: "Alice", marks: [85, 92, 88] },
    { name: "Bob", marks: [70, 68, 72] },
    { name: "Charlie", marks: [95, 90, 93] },
    { name: "Diana", marks: [55, 60, 58] }
];
function calculateAvg(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    let avg = sum/arr.length;
    return avg.toFixed(2);
}
function calculateGrade(average){
     if(average >= 90){
        return 'A';
     }
     else if(average >= 75 && average < 90){
        return 'B';
     } else if(average >= 60 && average < 75){
        return 'C';
     } else {
        return 'D';
     }
}

let results = [];
function getResult(){
    
    for(let student of students){
        let avg = calculateAvg(student.marks);
        let grade = calculateGrade(avg);
        results.push({ name: student.name, average: avg, grade: grade })
    }
}
getResult();
function highestScorer(arr){
    let topStudent = "";
    let highestScore = 0;

    for(let student of arr){
        if(student.average > highestScore){
            highestScore = student.average;
            topStudent = student.name;
        }
    }

    return topStudent;
}
let topStudent = highestScorer(results);

//console.log(results);
const finalOutput = {
    result : results,
    topStudent : topStudent
}
console.log(finalOutput);


