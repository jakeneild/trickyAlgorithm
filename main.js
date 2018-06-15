

/*A friend of mine takes a sequence of numbers from 1 to n (where n > 0).
Within that sequence, he chooses two numbers, a and b.
He says that the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b.
Given a number n, could you tell me the numbers he excluded from the sequence?
The function takes the parameter: n (n is always strictly greater than 0) and returns an array or a string (depending on the language) of the form:

[(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or or [{a, b}, ...]
with all (a, b) which are the possible removed numbers in the sequence 1 to n.

[(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or ...will be sorted in increasing order of the "a".

It happens that there are several possible (a, b). The function returns an empty array (or an empty string) if no possible numbers are found which will prove that my friend has not told the truth! (Go: in this case return nil).

(See examples of returns for each language in "RUN SAMPLE TESTS")

Examples:
removNb(26) should return [(15, 21), (21, 15)]
or

removNb(26) should return { {15, 21}, {21, 15} }
or

removeNb(26) should return [[15, 21], [21, 15]]
or

removNb(26) should return [ {15, 21}, {21, 15} ]
or

removNb(26) should return "15 21, 21 15"
or

in C:
removNb(26) should return  **an array of pairs {{15, 21}{21, 15}}**
tested by way of strings.*/



// function removeNb(n) {
//     console.log("Num: ", n);
//     let k = n;
//     let mySum = (n * (n+1))/2;
//     let l = 1
//     if(n % 2 == 0){
//         let l = n/2;
//     } else {
//         let l = n+1/2
//     }
//     if(l < 10){
//         l = 1;
//     }
    
//     let final = [];


//     for (let i = l; i <= n; i++) { //iterates through first number
//         //console.log("First number: ", i);
//         for (let m = l; m <= n; m++) { //iterates through second number
//             //console.log("Second number: ", m)
//             let sum = mySum - i - m;
//             let product = m * i;
            
            
//             //console.log(product, sum)
//             if (sum == product) { 
//                 //checking to see if the set number produce == sum of sequence
//                 final.push([i, m])
//                 //return final;
//                 /*if(m > l){
//                     //console.log("pushing set 2: ")
//                     return [[i, m], [m, i]];
//                 }*/
//                 //console.log("set: ", [i, m]);
//                 //console.log("-----{{{{{FINAL PUSH !!");
//             }

//         }
//         if (i == n) {
//             //console.log("final: ", final);
//             return final;
//         }
//     }
    
// }

// let myArray = []

// //console.log(removeNb(1000003))

// for(let i = 25; i < 3000; i++){
//     if(removeNb(i).length > 2){
//         let z = removeNb(i)
//         myArray.push(i, z)
//     }
// }

// console.log(myArray);
/*let highest = 0;
let lowest = 1;

for(let i = 0; i < myArray.length; i++){
    if(myArray[i][0] > highest){
        highest = myArray[i][0];
    }
    if(myArray[i][1] > highest){
        highest = myArray[i][1];
    }
    if(myArray[i][0] < lowest){
        lowest = myArray[i][0];
    }
    if(myArray[i][1] < lowest){
        lowest = myArray[i][1];
    }
}
console.log(myArray)
console.log(highest, lowest)*/

// console.log(myArray)
// /*code seems to work fine but with an input of 1006 it only gets to 826 before timing out
// (12000 ms).  Going to refactor the code by making i only go up to half of n*/

// sum > product move a up

// function removeNb(n) {
//     console.log("Num: ", n);
//     let mySum = (n * (n+1))/2;
//     let a = 1

//     if(n % 2 == 0){
//         a = n/2;
//     } else {
//         a = (n+1)/2
//     }
//     if(a < 10){
//         a = 1;
//     }

//     let start = a;
//     let b = n
//     let final = [];
//     let solved = false;

//     while(solved == false){
//         let sum = mySum - a - b;
//         let product = a * b;
//         if(product == sum){
//             let set = [a, b];
//             console.log("case2");
//             final.push(set);
//         }

//         if(b > start){
//             b--;
//         } else {
//             b = n;
//             a++;
//             if(a >= n){
//                 return final;
//             }
//         }
//     } 
// }

// console.log(removeNb(26))

// function removeNb(n) {
//     let l = 0;
//     if(n % 2 == 0){
//         l = n / 2;
//     } else {
//         l = (n+1)/2
//     }

//     let sum = (n*(n+1))/2;

//     let final = [];

//     for(let a = l; a < n; a++){
//         let b = (sum -a)/(a+1);
//         if(Number.isInteger(b)){
//             let set = [a, b]
//             final.push(set)
//         }
//         console.log(b)
//     }
//     return final;
// }

// removeNb(26)


function removeNb(n) {
    let l = 0;
    if(n % 2 == 0){
        l = n / 2;
    } else {
        l = (n+1)/2
    }
    let sum = (n*(n+1))/2;
    let final = [];
    for(let a = l; a < n; a++){
        let b = (sum -a)/(a+1);
        if(Number.isInteger(b)){
            final.push([a, b])
        }
    }
    return final;
}

//this was the final function