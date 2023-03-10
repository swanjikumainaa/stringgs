// Extract the first four characters from the string below;
// "beautiful"
let comment="beautiful";
console.log(comment.slice(0,4));

// Insert the following string at the tenth index of the below variable:
// "eat"
const food = "I did not have appetite today"
console.log(food.replace(food[10],"eat"))

// Count how many times the following string appears in the string variable:
// 1. "the"
// 2."s"
const story= "She sells sea shells at the sea shore";
const char="the";
const count=story.split(char).length -1;
console.log(count);
const char1="s";
const count1=story.split(char1).length -1;
console.log(count1);

// Convert the following strings into the specified format:
// 1. UpperCase: "CONfidant"
// 2. LowerCase: "amazing", "beautiFUL"

const str1="CONfidant"
const str2=("amazing","beautiFUL")

console.log(str1.toUpperCase());
console.log(str2.toLowerCase());

//convertion to title case
// 3. Title case "A busy office"
 function titleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }
  console.log(titleCase("A busy office"));


    


