"use strict";
// 1 Khai bao funtion
function addNumber(num1, num2) {
  return num1 + num2;
}
const addNumberArrow = (number2) => {};
// 2 Defautl + optional param
function showName(name = "hoadv", age) {
  return `Xin chao ban ${name}`;
}
const myName = showName();
console.log(myName);
