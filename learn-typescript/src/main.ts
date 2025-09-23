let myName: string = "hoadv";

let myAge: number = 36;

let hasCar: boolean = false;

let myCourse = "Typescript";

// Array
let myCourses: string[] = ["Nodejs", "JSNC", "Typescript"];

let myPoints: number[] = [1, 2, 3, 4];

//Object : {}

// type
// interface
interface Student {
  id: number;
  name: string;
  age: number;
  address: string;
  vneid: string;
}

let student: Student = {
  id: 1,
  name: "hoadv",
  age: 20,
  address: "VN",
  vneid: "12345667",
};

let anyStudent: any = {
  id: "2",
};

// void: ko co return
// kieu du lieu : number, string, boolead
function addNumber(): string {
  // xu ly logic ko can tra ve ket qua, ko co return
  return "1";
}

// Viết hàm trả về số lượng xuất hiện của 1 kí tự trong chuỗi
function demkytu(str: string, char: string): string {
  let count: number = 0;
  for (const c of str) {
    if (c.toLocaleUpperCase() === char.toLocaleUpperCase()) {
      count++;
    }
  }
  return `So lan xua hien ky tu ${char} trong chuoi ${str} la ${count} lan`;
}

// console.log(demkytu("HelLo", "l"));

// 7. Union Type
let result: number | string | boolean;
result = 42; // Hợp lệ
result = "Success"; // Hợp lệ
result = true; // Hợp lệ

// 7.2 Literal Type
let statusCode: "success" | "error";
let orderStatus: "Pending" | "Processing" | "Confirmed";
statusCode = "success"; // Hợp lệ
// statusCode = "failed"; // Lỗi

let value: string | null = null;
let score: number | undefined = undefined;
let hasScore: false | undefined = false;

let input: unknown;
// khi sử dụng thì TypeScript bắt buộc bạn phải kiểm tra kiểu trước.
if (typeof input === "string") {
  input.toLocaleUpperCase();
}

// 10: Type Assertions

let someValue: any = "This is a string";

let strLength: number = (someValue as string).length;
let strLength2: number = (<string>someValue).length;
// const err = error as AxiosError;
