function isPalindrome(str){
    let reversed = str.split('').reverse().join('');
    if(reversed.toLowerCase() === str.toLowerCase()){
        console.log("It is a Palindrome");
    }else{
        console.log("It is not a Palindrome");
    }
}


isPalindrome('hello world')
isPalindrome("racecar"); // true
isPalindrome("hello"); // false
