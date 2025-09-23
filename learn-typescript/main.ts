// array
let myArray: number[] = [1, 2, 3, 4, 5];
let myArray2: string[] = ["a", "b", "c"];

let myArray3: Array<boolean> = [true, false, true];

// object
let myInfo: {
  name: string;
  age: number;
  gender?: boolean; // có thể có giá trị hoặc không
} = {
  name: "hoadv",
  age: 20,
  gender: true,
};

// Type alias

type Info = {
  name: string;
  age: number;
  gender?: boolean;
};

let myInfo2: Info = {
  name: "Nguyễn Văn A",
  age: 30,
};

function show(data: Info): void {}

let myTuple: [string, number, boolean] = ["hoadv", 20, true];

function hcn(a: number, b: number): [number, number] {
  return [(a + b) * 2, a * b];
}

let result = hcn(2, 3);

// console.log(result[0]);
// console.log(result[1]);

type RGB = [number, number, number];

let black: RGB = [0, 0, 0];
let white: RGB = [255, 255, 255];

// union
let myNum: number | string | boolean = 20;
myNum = "abc";

let myArray4: string[] | number[] = [1, 2, 3, 4, 5];
myArray4 = ["a", "b", "c"];

let myArray5: (string | number)[] = [1, "a", 2, "b"];

function show1(data: string | number): void {}

// any và unknow

let myVar: any;
// myVar = 20;
myVar = "hoadv";
// console.log(myVar.toUpperCase());

let myVar2: unknown;
// myVar2 = 20;
myVar2 = "abc";
// if(typeof myVar2 == 'string')
//     console.log(myVar2.toUpperCase());

//enum
enum Status {
  Success = "SUCCESS",
  Warning = "WARNING",
  Error = "ERROR",
}

// console.log(Status.Success);
// console.log(Status.Warning);
// console.log(Status.Error);

// console.log(Status[0]);

// Generic

function getData1(data: string[]): string | undefined {
  return data[0];
}

// console.log(getData1(["a","b","c"]));

function getData2(data: number[]): number | undefined {
  return data[0];
}

// console.log(getData2([1,2,3,4,5]));

function getData<T>(data: T[]): T | undefined {
  return data[0];
}

// console.log(getData<string>(["a","b"]));
// console.log(getData<number>([1,2,3,4]));

type Sts<T> = {
  data: T;
  status: boolean;
};

let UserSts: Sts<{ name: string; age: number }> = {
  data: {
    name: "hoadv",
    age: 20,
  },
  status: true,
};

let PostSts: Sts<{ title: string; price: number }> = {
  data: {
    title: "Post 1",
    price: 20000,
  },
  status: false,
};

/**
 * Tạo type Product có các trường sau:
 * name: string
 * price: number
 * sale: boolean
 * rate: enum {low : 'Thấp', medium: 'Trung bình', hight : 'Cao'}
 *
 * Tạo mảng listProducts có các phần tử có kiểu Product
 * Nhập ít nhất 5 phần tử
 *
 * Viết hàm thêm mới 1 phần tử vào mảng listProducts có key = description,
 * có giá trị = 'Tốt' nếu price > 5, 'Bình thường' nếu price <=5 (sử dụng map)
 *
 * Viết hàm hiển thị danh sách sản phẩm
 * (Tên sản phẩm, giá bán, trạng thái sale,Đánh giá) (Sử dụng forEach)
 *
 * Viết hàm tính tổng giá bán sản phẩm (sử dụng reduce)
 *
 * Viết hàm lọc những sản phẩm đang Sale và
 * đánh giá từ Trung bình trở lên (Sử dụng filter)
 *
 */
