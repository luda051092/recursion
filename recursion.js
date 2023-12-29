/** product: calculate the product of an array of numbers. */

function product(nums, index = 0) {
  // Bae case. If the array is empty, return 1 
  if (index === nums.length) {
    return 1;
  }

  // Recursive case: multiply current element with product of the rest of the array
  return nums[index] * product(nums, index + 1);

}

/** longest: return the length of the longest word in an array of words. */


function longest(words, maxLength = 0) {
  // Base Case: if the list of words is empty, return the maxLength.
  if (words.length === 0) {
    return maxLength;
  }

  // Recursive case: compare the length of the current word with the maxLength.
  const currentWordLength = words[0].length;
  const newMaxLength = Math.max(maxLength, currentWordLength);

  // Call the function recursively with the rest of the words in the list
  return longest(words.slice(1), newMaxLength);

}

/** everyOther: return a string with every other letter. */

function everyOther(str, index = 0, result = '') {
  // Base case: if the index is greater than or equal to the length of the string
  if (index >= str.length) {
    return result;
  }

  // Recursive case: add every other to the result string
  result += str[index];

  // Call function recursively with the next index
  return everyOther(str, index + 2, result);

}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  // Base case: if the string is empty or has only one character, it's a palindrome
  if (str.length <= 1) {
    return true;
  }

  // Recursive case: check if first and last characters are the same
  if (str[0] === str[str.length - 1]) {
    // If they are the same, check if the substring without the first and last character is a palindrome
    return isPalindrome(str.slice(1, -1));
  } else {
    // If the first and last characters are different, it is not a palindrome
    return false;
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, index = 0) {
  // Base case: if the current index is greater than or equal to the array length, val is not present. 
  if (index >= arr.length) {
    return -1;
  }

  // Base case: if current element is equal to val, return the current index
  if (arr[index] === val) {
    return index;
  }

  // Recursive case: call findIndex with the next index
  return findIndex(arr, val, index + 1);

}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  // Base case: if the string is empty or has only one character, return the string
  if (str.length <= 1) {
    return str;
  }

  // Recursive case: reverse the substring excluding the first character
  // concatenate the first character at the end
  return revString(str.slice(1)) + str[0];
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let result = [];

  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      result.push(obj[key]);
    } else if (typeof obj[key] === 'object') {
      // If the value is an object, recursively call gatherStrings
      // concatenate results to the current result array
      result = result.concat(gatherStrings(obj[key]));
    }
  }

  return result;

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, start = 0, end = arr.length - 1) {
  if (start > end) {
    // Base case: value not found
    return -1;
  }

  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === val) {
    // Base case: value found
    return mid;
  } else if (arr[mid] > val) {
    // Recursive case: search in the left half
    return binarySearch(arr, val, start, mid - 1);
  } else {
    // Recursive case: start in the right half
    return binarySearch(arr, val, mid + 1, end);
  }


}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
