"use strict";

let myName = "hoadv";
let myAge = 36;
let myCourse = "Typescript";
// Array
let myCourses = ["Nodejs", "JSNC", "Typescript"];
let myPoints = [1, 2, 3, 4];
let student = {
  id: 1,
  name: "hoadv",
  age: 20,
  address: "VN",
  vneid: "12345667",
};
let anyStudent = {
  id: "2",
};
// void: ko co return
// kieu du lieu : number, string, boolead
function addNumber() {
  // xu ly logic ko can tra ve ket qua, ko co return
  return "1";
}
// Viết hàm trả về số lượng xuất hiện của 1 kí tự trong chuỗi
function demkytu(str, char) {
  let count = 0;
  for (const c of str) {
    if (c.toLocaleUpperCase() === char.toLocaleUpperCase()) {
      count++;
    }
  }
  return `So lan xua hien ky tu ${char} trong chuoi ${str} la ${count} lan`;
}
// console.log(demkytu("HelLo", "l"));
// 7. Union Type
let result;
result = 42; // Hợp lệ
result = "Success"; // Hợp lệ
result = true; // Hợp lệ
// 7.2 Literal Type
let statusCode;
let orderStatus;
statusCode = "success"; // Hợp lệ
// statusCode = "failed"; // Lỗi
let value = null;
let score = undefined;
let hasScore = false;
let input;
// khi sử dụng thì TypeScript bắt buộc bạn phải kiểm tra kiểu trước.
if (typeof input === "string") {
  input.toLocaleUpperCase();
}
// 10: Type Assertions
let someValue = "This is a string";
let strLength = someValue.length;
let strLength2 = someValue.length;
// const err = error as AxiosError;
