//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

const findWords = (string1, list1) => {
    for (let x of list1) {
        if(string1.toLowerCase().includes(x.toLowerCase())){
            console.log("Matched dog_name", x);
        }
        else {
            console.log("No Matches", x);
        } 
    }
};

//Call method here with parameters

findWords(dog_string, dog_names)

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    //code goes here

    for (let i=0; i < arr.length; i++) {
        if (i %2 === 0) {
            arr.splice(i,1, "even index") 
            console.log(arr)
        }
    }
}
replaceEvens(arr)

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


// CodeWars Python to JS solutions //
//codewars #1: Abbreviate a Two Word Name https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript//
function abbrevName(name){
    const newArray = name.split(" ")
    return (newArray[0][0] + "." + newArray[1][0]).toUpperCase()
 }
console.log(abbrevName("John Samford"))


//codewars #2: Convert number to reversed array of digits, https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript//
function digitize(n) {
    const new_num = n
    return new_num.toString().split('').reverse().map(Number);
  }


