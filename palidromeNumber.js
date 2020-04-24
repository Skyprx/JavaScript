// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

var isPalindrome = function(x) {
    if (x<0) return false;
    x = x.toString().split('')
    for (let i=0, j=Math.floor(x.length/2); i<j; i++) {
        if (x[i] != x[x.length-1-i])
            return false;
    }
    return true
};

console.log(isPalindrome(10))

// Reads 01 from right to left. Therefore it will return false since it's not a palindrome number.

console.log(isPalindrome(121))

// Reads 121 from right to left. This is a palindrome number and will return true.