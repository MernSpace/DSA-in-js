function intersection(arra1, arra2) {
    return arra1.filter((value) => arra2.includes(value));
}

console.log(intersection([1, 2, 2, 1], [2, 2]))
console.log(intersection([101, 202, 302, 101], [202, 101])) 