function concat(arr1, arr2) {
    // Use the spread operator (...) to concatenate the arrays
    return [...arr1, ...arr2];
  }
  
  // Test cases
  console.log(concat([1, 3, 5], [2, 6, 8])); // ➞ [1, 3, 5, 2, 6, 8]
  console.log(concat([7, 8], [10, 9, 1, 1, 2])); // ➞ [7, 8, 10, 9, 1, 1, 2]
  console.log(concat([4, 5, 1], [3, 3, 3, 3, 3])); // ➞ [4, 5, 1, 3, 3, 3, 3, 3]
  