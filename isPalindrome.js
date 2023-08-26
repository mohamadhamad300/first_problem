console.log("hello")



function reverseString(str) {
   
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
// console.log(splitString)
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
   // console.log(reverseArray)
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
   // console.log(joinArray)
    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}

function removespace(str) {
    // Step 1. Use the split() method to return a new array
    var str = str.replace(/[^a-zA-Z ]/g, "");
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 //console.log(splitString)
    // Step 2. Use the reverse() method to reverse the new created array
   // var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
   // console.log(reverseArray)
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = splitString.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    //console.log(joinArray)
    //Step 4. Return the reversed string
    joinArray= joinArray.replace(/ /g, "")
    joinArray=joinArray.toLowerCase();
    return joinArray; // "olleh"
}

 function isPalindrome(x){
let result=false
x=removespace(x);
x1=reverseString(x)
//console.log(x);
//console.log(x1);
    for(i=0;i<x.length;i++){
     //// console.log(x[i]);
       //console.log(x1[i])

        if(x[i] !== x1[i]){
result=false
break;
        }

else 
result=true;

//console.log(result)

    }

    return result;

}



/*
console.log(reverseString('A man, a plan, a canal, Panama!')); // Output: true
console.log(reverseString('Race car')); // Output: true
console.log(reverseString('Hello, world!')); // Output: false
*/

console.log(isPalindrome('A man, a plan, a canal, Panama!')); // Output: true
console.log(isPalindrome('Race car')); // Output: true
console.log(isPalindrome('Hello, world!')); // Output: false

