function reverseString(str) {
    let reverse = '';
    for (const c of str) {
        reverse = c + reverse;
    }
    return reverse;
}

console.log(reverseString('Hello World'))
console.log(reverseString('Saharul Sifat World'))
console.log(reverseString('Reverse the World'))