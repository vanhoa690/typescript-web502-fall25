"use strict";
class Person {
    // hàm khởi tạo
    constructor(ID, NAME, AGE, GENDER) {
        this.id = ID;
        this.name = NAME;
        this.age = AGE;
        this.gender = GENDER;
    }
    // phương thước
    greeting() {
        return `Xin chào ${this.name}, tuổi: ${this.age}`;
    }
}
class User extends Person {
    constructor(ID, NAME, AGE, GENDER, ROLE) {
        super(ID, NAME, AGE, GENDER);
        this.role = ROLE;
    }
    show() {
        console.log(`Giới tính: ${this.gender ? "Nam" : "Nữ"}`);
    }
}
let p1 = new Person(1, "hoadv", 20, true);
p1.greeting();
let u1 = new User(1, "hoadv", 20, true, 1);
u1.show();
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
let myProduct = new Product(1, "bim bim", 2000);
/**
 * Xây dựng hệ thống quản lý sản phẩm trong một cửa hàng.

    Yêu cầu:

    1. Tạo một interface Product với các thuộc tính:

        id (number): Mã sản phẩm.
        name (string): Tên sản phẩm.
        price (number): Giá sản phẩm.
        category (string): Danh mục của sản phẩm (vd: "Điện tử", "Thực phẩm").

    2. Tạo một danh sách sản phẩm (mảng Product), nhập ít nhất 5 phần tử.

    3 .Viết một hàm filterByCategory nhận vào 2 tham số:
        Danh sách sản phẩm từ câu 1.
        Tên danh mục (string). Kết quả trả về là danh sách sản phẩm thuộc danh mục đó.

    4. Viết một hàm calculateTotalPrice tính tổng giá trị của tất cả sản phẩm trong danh sách.
    5. Viết một hàm findMinMax tìm sản phẩm có giá trị nhỏ và sản phẩm có giá trị lớn nhất.
 *
 */
/**
 * Xây dựng mô hình quản lý phương tiện giao thông với các loại phương tiện khác nhau.

    Yêu cầu:

    1.Tạo một interface Vehicle với các thuộc tính:
        name (string): Tên phương tiện.
        type (string): Loại phương tiện (vd: "Xe máy", "Ô tô", "Xe đạp").
        speed (number): Vận tốc trung bình (km/h).
    
    2.Tạo một interface MotorizedVehicle (mở rộng từ Vehicle) với thêm thuộc tính:
        fuelType (enum): Loại nhiên liệu (vd: "Xăng" hoặc "Điện").
    
    3.Viết một hàm calculateTravelTime nhận vào một đối tượng Vehicle và khoảng cách (km), trả về thời gian ước tính (giờ) để hoàn thành hành trình.

    4. Tạo một danh sách các phương tiện MotorizedVehicle, sau đó sử dụng hàm calculateTravelTime để tính thời gian di chuyển cho từng phương tiện với khoảng cách 100 km.

 */
