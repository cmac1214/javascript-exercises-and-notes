//This is all about strings
const aString ='The quick brown fox jumped over the moon';

//What is the length of the string?
const stringLength = aString.length; //this is property access
console.log('String length: ', stringLength);

//what is the first in the string?
const firstChar =aString.charAt(0)
console.log('The first letter: ', firstChar);

//what is another way to find the first in the string?
const firstCharAnotherWay =aString[0];
console.log('The first letter another way: ', firstCharAnotherWay);

//What is the seventh letter of the string?
const seventhChar = aString[6];
//know that you can use charAt
console.log('the seventh letter: ', seventhChar);

//how do I put string together? (contentation
const stringsTogether =aString.concat('!');
const stringsTogetherAgain =aString + ('!');
console.log('String Together: ', stringsTogether);
console.log('String Together Again', stringsTogetherAgain);
console.log('aString: ', aString);

//FACT: strings are immutable. You can get new ones., but you
//modify existing ones.

//I want part of a string, how do i do that?
const firstFiveChar = aString.slice(0, 5); //endIndex is not included
console.log('First Five Chars: ', firstFiveChar);

//How do I split a sentence into the words?
const words = aString.split(' ');

//what are the number of words in the string?
const numberofWords = aString.split('').length;
console.log('Words: ', words);
console.log('Number of words:', numberofWords);


//How many spaces are in the string?
console.log('Number of Words:', numberofWords -1);
//What is the longest word in the string?
const startingWords = aString.split('';
const lengthofWords = startingWords.map(word => word.length);
function max(listOfNums) {
  let maximum = listofNums[0];
  for (let num in listofNums){
    if(num > maximum) {
      maximum = num;
    }
  }
    return maximum;
  }
//How do I reverse a string?
const reverseString = aString.split('', reverse().join('';)
console.log('Reversed String: ', reverseString);
