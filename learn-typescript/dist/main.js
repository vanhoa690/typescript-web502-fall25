"use strict";
// array
let myArray = [1, 2, 3, 4, 5];
let myArray2 = ["a", "b", "c"];
let myArray3 = [true, false, true];
// object
let myInfo = {
    name: "hoadv",
    age: 20,
    gender: true,
};
let myInfo2 = {
    name: "Nguyễn Văn A",
    age: 30,
};
function show(data) { }
let myTuple = ["hoadv", 20, true];
function hcn(a, b) {
    return [(a + b) * 2, a * b];
}
let result = hcn(2, 3);
let black = [0, 0, 0];
let white = [255, 255, 255];
// union
let myNum = 20;
myNum = "abc";
let myArray4 = [1, 2, 3, 4, 5];
myArray4 = ["a", "b", "c"];
let myArray5 = [1, "a", 2, "b"];
function show1(data) { }
// any và unknow
let myVar;
// myVar = 20;
myVar = "hoadv";
// console.log(myVar.toUpperCase());
let myVar2;
// myVar2 = 20;
myVar2 = "abc";
// if(typeof myVar2 == 'string')
//     console.log(myVar2.toUpperCase());
//enum
var Status;
(function (Status) {
    Status["Success"] = "SUCCESS";
    Status["Warning"] = "WARNING";
    Status["Error"] = "ERROR";
})(Status || (Status = {}));
// console.log(Status.Success);
// console.log(Status.Warning);
// console.log(Status.Error);
// console.log(Status[0]);
// Generic
function getData1(data) {
    return data[0];
}
// console.log(getData1(["a","b","c"]));
function getData2(data) {
    return data[0];
}
// console.log(getData2([1,2,3,4,5]));
function getData(data) {
    return data[0];
}
let UserSts = {
    data: {
        name: "hoadv",
        age: 20,
    },
    status: true,
};
let PostSts = {
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
