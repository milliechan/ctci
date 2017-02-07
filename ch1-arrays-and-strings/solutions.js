'use strict';
// 1.1 Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures? 

// naive approach
function isUnique(string) {
  let count = {}
  var characters = string.split(''); 
  for (var i = 0; i < characters.length; i++) {
    if(count.hasOwnProperty(characters[i])) {
      return false
    } else {
      count[characters[i]] = 1
    }
  }
  return true
}

// without additional data structures
function isUnique2(string) {
  let currentLetter = ''
  for (var i = 0; i < string.length; i++) {
    currentLetter = string[i]
    for (var j = 0; j < string.length; j++) {
      if (currentLetter === string[j] && i != j) {
        return false
      }
    }
  }
  return true
}
let string2 = "abac"
console.log(isUnique2(string2))


//1.2 Check Permutation: Given 2 strings, write a method to decide if one is a permutation of the other. 

// 1.3 URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold additional characters, and that you are given the "true" length of the string. 
// ex: input: "Mr John Smith    ", 13 
// ex: output: "Mr%20John%20Smith"