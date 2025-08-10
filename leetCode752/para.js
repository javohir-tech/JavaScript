function longestPalindrome(s) {
  if (s.length < 2) return s;

  let start = 0, end = 0;

  // Markazdan kengaytirish funksiyasi
  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return [left + 1, right - 1]; // haqiqiy palindrom chegaralari
  }

  for (let i = 0; i < s.length; i++) {
    // Toq uzunlikli palindrom
    let [l1, r1] = expandAroundCenter(i, i);
    // Juft uzunlikli palindrom
    let [l2, r2] = expandAroundCenter(i, i + 1);

    if (r1 - l1 > end - start) {
      start = l1;
      end = r1;
    }
    if (r2 - l2 > end - start) {
      start = l2;
      end = r2;
    }
  }

  return s.substring(start, end + 1);
}

// Test
console.log(longestPalindrome("babad")); // "bab" yoki "aba"
console.log(longestPalindrome("cbbd"));  // "bb"
