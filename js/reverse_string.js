"use strict";

// reverse string and reverse the letters in the words 
function reverseString(string) {
  // split string into an array by spaces 
  // reverse the array 
  // map over the reversed words and split each word into an array of letters 
  // reverse the letters array 
  // take the map result and for each set of letters, join by '' 
  // now we have an array of reversed words with reversed letters 
  // rejoin the reversed letters by empty space 
  let reversedWords = string.split(' ').reverse();
  let reversedLetters = reversedWords
    .map(word => word.split('').reverse());
  reversedLetters = reversedLetters.map(word => word.join(''))
  console.log(reversedLetters)
}

const string1 = 'Hello world';
console.log(reverseString(string1))