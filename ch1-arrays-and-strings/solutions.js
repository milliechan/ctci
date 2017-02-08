'use strict';
// 1.1 Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures? 

// naive approach
function isUnique(string) {
  let count = {};
  var characters = string.split(''); 
  for (var i = 0; i < characters.length; i++) {
    if(count.hasOwnProperty(characters[i])) {
      return false;
    } else {
      count[characters[i]] = 1;
    }
  }
  return true
}

// without additional data structures
function isUnique2(string) {
  let currentLetter = '';
  for (var i = 0; i < string.length; i++) {
    currentLetter = string[i];
    for (var j = 0; j < string.length; j++) {
      if (currentLetter === string[j] && i != j) {
        return false;
      }
    }
  }
  return true;
}

// let string2 = "abac"
// console.log(isUnique2(string2))


//1.2 Check Permutation: Given 2 strings, write a method to decide if one is a permutation of the other. 
// convert string to array, swap places, then rejoin back into string to 
// for each letter in string2, swap the position with the current index (needs 2 loops)

function checkPermutation(string, string2) {
  let firstWordArr = string.split('');
  for (let i = 0; i < firstWordArr.length; i++) {
    let currentLetter = firstWordArr[i];
    for (let j = 0; j < firstWordArr.length; j++) {
      if ( i != j ) {
        let copyArr = string.split('');
        copyArr[i] = firstWordArr[j];
        copyArr[j] = firstWordArr[i]; 
        if (copyArr.join('') === string2) {
          return true;
        }
      }
    }
    return false;
  }
}

// console.log(checkPermutation("abc", "bac"))
// console.log(checkPermutation("abc", "ccc"))



// 1.3 URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold additional characters, and that you are given the "true" length of the string. 
// ex: input: "Mr John Smith    ", 13 
// ex: output: "Mr%20John%20Smith"
// split into array
//  delete empty strings from array 
// join array into string with "%20"

function URLify(string) {
  let arr = string.split(' '); 
  arr = arr.filter(item => item != '');
  return arr.join('%20');
}

// console.log(URLify("Mr John Smith   "))


// 1.4 Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words. 
//ex. input: Tact Coa 
//ex. output: True (permutations: "taco cat", "atco cta", etc.)


function isPermutationOfPalindrome(string) {
  // use hash table to count how many times each char appears 
  // then iterate through hash table and ensure that no more than one char has an odd count 

  let arr = string.split('').filter(item => item != ' ')
  let count = {}

  for (var i = 0; i < arr.length; i++) {
    if (count.hasOwnProperty(arr[i])) {
      count[arr[i]] += 1 
    } else {
      count[arr[i]] = 1 
    }
  }

  let oddCount = 0;
  for (var key in count) {
    if ( count[key] % 2 != 0 ) { 
      oddCount++
    }
  }

  if (oddCount > 1) {
    return false
  } else if (oddCount === 0 || oddCount === 1) {
    return true
  }
} 

// console.log(isPermutationOfPalindrome("tact coa"))


//1.5 One Away: There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away. 
//ex.: pale, ple -> true
//ex.: pales, pale -> true
//ex. pale, bale -> true
//ex. pale, bake -> false 

//1.6 String Compression: Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters(a-z). 

//1.7 Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place? 

//1.8 Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0. 

//1.9 String Rotation: Assume you have a method isSubstring which checks if one word is a substring of another. Given two strings, s1, and s2 write code to check if s2 is a rotation of s1 using only one call to isSubstring (e.g. "waterbottle" is a rotation of "erbottlewat")











