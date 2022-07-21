/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {};                  // 1 * 1 = O(1)
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = O(n)
    i++                             // 2 * n = O(n)
  ) {
    const word = words[i];          // 1 * n = O(n)
    if (!seen[word]) {              // 1 * n = O(n)
      seen[word] = true;
      unique[unique.length] = word; // n * 1 = O(n)
    }
  }
  return unique;
} // Big O Notation for uniqueLinear: O(n)

function uniqueQuadratic(words) {
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = O(n)
    i++                             // 2 * n = O(n)
  ) {
    const word = words[i];          // 1 * n = O(n)
    let isUnique = true;            // 1 * 1 = O(1)
    for (
      let c = 0;                    // 1 * 1 = O(1)
      c < i;                        // n * n = O(n^2)
      c++                           // n * n = O(n^2)
    ) {
      const comparing = words[c];   // n * n = O(n^2)
      if (comparing === word) {     // n * n = O(n^2)
        isUnique = false;           // 1 * 1 = O(1)
      }
    }
    if (isUnique) {                 // 1 * n^2 = O(n^2)
      unique[unique.length] = word; // n^2 * 1 = O(n^2)
    }
  }
  return unique;                    // 1 * 1 = O(1)
} // Big O Notation for uniqueQuadratic: O(n^2)
