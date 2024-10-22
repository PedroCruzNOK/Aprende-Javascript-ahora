// Decimal: 0,1,2,3,4,5,6,7,8,9
// bit: 0 1
// byte: 8 bits
// Byte: 00000000 -> 0
// Byte: 00000001 -> 1
// Byte: 00000010 -> 2
// Byte: 00000011 -> 3

console.log(1 | 3); // 00000011 -> 3
console.log(1 | 4); // 00000101 -> 5
console.log(3 | 5); // 00000111 -> 7

console.log(1 & 3); // 00000001 -> 1
console.log(1 & 4); // 00000000 -> 0
console.log(3 & 5); // 00000001 -> 1