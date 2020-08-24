// Math check
let area = (radius) => Math.PI * radius * radius;
let perimeter = (radius) => 2 * Math.PI * radius;

// Palindrome simple check example madam
let palidrome = (str) => {
  let strText = str.toLowerCase();
  let reverseText = strText.split("").reverse().join("");
  return reverseText === strText;
};

// Palindrome rearrange check example 'cciiv'
let palindromeRearrange = (str) => {
  str = str.toLowerCase();
  const charCounts = [...str].reduce((counts, char) => {
    counts[char] = counts[char] ? counts[char] + 1 : 1;
    return counts;
  }, {});
  return (
    Object.values(charCounts).filter((count) => count % 2 !== 0).length <= 1
  );
};

// Merge sorting
let mergeSort = (list) => {
  // Getting the half part of the list
  let half = list.length / 2;
  if (list.length < 2) {
    return list;
  }
  // Getting the left part of the list, by default the other part will be the right
  const left = list.splice(0, half);
  // Call merge function and mergeSort recursively to solve the sorting
  return merge(mergeSort(left), mergeSort(list));
};

function merge(left, right) {
  let list = [];
  // Main loop through the left and right parts to merge them sorted
  while (left.length && right.length) {
    // Execute the comparison statement
    if (left[0] < right[0]) {
      list.push(left.shift());
    } else {
      list.push(right.shift());
    }
  }
  // Return the list sorted and merged with the rest operator.
  return [...list, ...left, ...right];
}

module.exports = {
  area: area,
  perimeter: perimeter,
  palidrome: palidrome,
  palindromeRearrange: palindromeRearrange,
  mergeSort: mergeSort,
};
