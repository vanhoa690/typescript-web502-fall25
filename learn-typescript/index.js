// tsc -init tạo tsconfig
// thay đổi nội dung
// tạo file src/index.ts
// tsc -w
// tạo file index.html
// link dist/index.js vào index.html
//string
var myName = "hoadv21";
// myName = 30
var myHome = "Hà Nội";
var greeting = "Ch\u00E0o m\u1EEBng b\u1EA1n ".concat(myName);
// console.log(greeting.toLowerCase());
//number
var myAge = 30;
var price = 2.44444;
// console.log(price.toFixed(2));
//boolean
var myGender = true;
// if(myGender){
//     console.log('Nam');
// }else{
//     console.log('Nữ');
// }
function sayHello(name) {
    return "Xin ch\u00E0o ".concat(name);
}
// console.log(sayHello("chinhpd5"));
var sayHello2 = function (age) {
    console.log("Tu\u1ED5i c\u1EE7a b\u1EA1n ".concat(age));
};
// sayHello2(20)
var sayHello3 = function (home) {
    return "Qu\u00EA qu\u00E1n: ".concat(home);
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
    return "Chu vi: ".concat((a + b) * 2, ", Di\u1EC7n t\u00EDch: ").concat(a * b);
}
// console.log(question1(3,4));
// Câu 2:
// spread
// rest
function sum() {
    // console.log(rest);
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var total = 0;
    rest.forEach(function (item) {
        // console.log(item);
        total += item;
    });
    return total;
}
// console.log(sum(1,2,3,4,5));
// console.log(sum(1,2,3,4,5,6,7,8,9));
// Câu 3
function countLetter(text, letter) {
    var count = 0;
    for (var i = 0; i < text.length; i++) {
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
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0)
            return false;
    }
    return true;
}
// console.log(nguyenTo(9));
