function longestPalindrome(s) {

    if (s.length < 2) return s;

    let start = 0; end = 0;

    function chegara(left, rigth) {
        while (left >= 0 && rigth < s.length && s[left] === s[rigth]) {
            left--;
            rigth++
        }
        return [left + 1, rigth - 1];
    }

    for (let i = 0; i < s.length; i++) {

        let [l1, r1] = chegara(i, i);

        let [l2, r2] = chegara(i, i + 1);

        if (r1 - l1 > end - start) {
            start = l1;
            end = r1
        }

        if (r2 - l2 > end - start) {
            start = l2;
            end = r2
        }
    }

    return s.substring(start, end + 1)
}

// Test
console.log(longestPalindrome("babad")); // "bab" yoki "aba"
console.log(longestPalindrome("cbbd"));  // "bb"
