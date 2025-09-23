"use strict";
// tsc -init tạo tsconfig
// thay đổi nội dung
// tạo file src/index.ts
// tsc -w
// tạo file index.html
// link dist/index.js vào index.html
//string
let myName = "hoadv21";
// myName = 30
let myHome = "Hà Nội";
let greeting = `Chào mừng bạn ${myName}`;
// console.log(greeting.toLowerCase());
//number
let myAge = 30;
let price = 2.44444;
// console.log(price.toFixed(2));
//boolean
let myGender = true;
// if(myGender){
//     console.log('Nam');
// }else{
//     console.log('Nữ');
// }
function sayHello(name) {
    return `Xin chào ${name}`;
}
// console.log(sayHello("chinhpd5"));
let sayHello2 = function (age) {
    console.log(`Tuổi của bạn ${age}`);
};
// sayHello2(20)
let sayHello3 = (home) => {
    return `Quê quán: ${home}`;
};
// console.log(sayHello3("Hà Nội"));
// let variable = 30
/**
 * 1. Viết 1 hàm trả về chu vi và diện tích hình chữ nhật
 * 2. Viết 1 hàm tính tổng nhiều số (không biết trước số lượng tham số), sử dụng rest parameter
 * 3. Viết hàm trả về số lượng xuất hiện của 1 kí tự trong chuỗi
 * 4. Viết hàm trả về boolean kiểm tra 1 số có phải số nguyên tố
 */
// Câu 1:
function question1(a, b) {
    return `Chu vi: ${(a + b) * 2}, Diện tích: ${a * b}`;
}
// console.log(question1(3,4));
// Câu 2:
// spread
// rest
function sum(...rest) {
    // console.log(rest);
    let total = 0;
    rest.forEach((item) => {
        // console.log(item);
        total += item;
    });
    return total;
}
// console.log(sum(1,2,3,4,5));
// console.log(sum(1,2,3,4,5,6,7,8,9));
// Câu 3
function countLetter(text, letter) {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] == letter)
            count++;
    }
    return count;
}
// console.log(countLetter('xin chao cac ban', 'n'));
function nguyenTo(num) {
    if (num <= 0)
        return false;
    if (num <= 2)
        return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0)
            return false;
    }
    return true;
}
// console.log(nguyenTo(9));
