// 1 Khai bao funtion
function addNumber(num1: number, num2: number): number {
  return num1 + num2;
}

const addNumberArrow = (number2: number): void => {};

// 2 Defautl + optional param
function showName(name: string = "hoadv", age?: number): string {
  return `Xin chao ban ${name}`;
}

const myName = showName();

console.log(myName);

// 3 Spread Operators
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // Kết quả: 6

// 4 Rest Parameter
function printItems(prefix: string, ...items: string[]): void {
  items.forEach((item) => console.log(`${prefix}: ${item}`));
}

printItems("Item", "Apple", "Banana", "Orange");
// Kết quả:
// Item: Apple
// Item: Banana
// Item: Orange
