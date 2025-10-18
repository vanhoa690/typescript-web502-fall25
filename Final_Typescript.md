# ĐỀ THI — WEB502: Ứng dụng quản lý khóa học bằng React + TypeScript

**Công nghệ:** React + TypeScript, fetch/axios, UI (Bootstrap)

---

## 1. Routes & Giao diện (1d)

Tạo các route sau:

- `/courses` → Danh sách khóa học
- `/courses/create` → Thêm khóa học mới
- `/courses/:id/update` → Sửa khóa học
- `/register` → Đăng ký tài khoản
- `/login` → Đăng nhập

### Giao diện

- Dùng Bootstrap.
- Có menu điều hướng để chuyển giữa các trang chính.
- Giao diện responsive cơ bản.

---

## 2. Dữ liệu mẫu

**Course (ví dụ)**

```json
{
  "id": "1",
  "courseName": "JS Cơ bản",
  "views": 20,
  "thumbnail": "https://upload.wikimedia.org/wikipedia/commons/8/8a/Javascript.jpg",
  "note": "none",
  "category": "Javascript"
}
```

### Backend endpoints (JSON Server ví dụ)

- `GET /courses`
- `GET /courses/:id`
- `POST /courses`
- `PUT /courses/:id`
- `DELETE /courses/:id`
- `POST /auth/register`
- `POST /auth/login`

---

## 3. Chức năng hiển thị & xoá (2.5d)

### Hiển thị danh sách (1.5d)

- Gọi API `GET /courses`.
- Hiển thị: Tên khóa học, Lượt xem, Ảnh, Ghi chú, Danh mục.

### Xóa (1d)

- Nút Xóa mỗi dòng/card.
- Confirm trước khi xóa (modal hoặc popconfirm).
- Sau xóa: hiển thị thông báo và refresh danh sách.

---

## 4. Thêm khóa học mới (2d)

### Form thêm (1d)

Form nhập:

- `courseName`: tên khóa học
- `views`: số lượt xem
- `thumbnail`: URL ảnh
- `note`: ghi chú
- `category`: chọn danh mục (Javascript, React, NodeJS, CSS)

Gửi `POST /courses` bằng fetch hoặc axios.

### Thông báo & chuyển trang (0.5d)

- Sau thêm thành công: hiển thị thông báo thành công và chuyển về `/courses`.

### Validate form (0.5d)

- `courseName`: bắt buộc, tối thiểu 3 ký tự.
- `views`: số >= 0.
- `thumbnail`: không rỗng.
- `category`: bắt buộc, chọn 1 trong các giá trị cho sẵn.

---

## 5. Sửa khóa học (2d)

### Form sửa (1d)

- Lấy dữ liệu `GET /courses/:id` và hiển thị sẵn trong form.
- Cho phép chỉnh sửa: tên, lượt xem, ảnh, ghi chú, danh mục.
- Gửi `PUT /courses/:id`.

### Thông báo & chuyển trang (0.5d)

- Sau cập nhật thành công hiển thị thông báo và quay lại `/courses`.

### Validate form (0.5d)

- Các quy tắc giống phần thêm mới.

---

## 6. Đăng ký & Đăng nhập (1.5d)

### Đăng ký (0.5d)

- Form: `email`, `password`, `username`.
- Validate:
  - Email: đúng định dạng, không rỗng.
  - Password: tối thiểu 6 ký tự.
- Sau đăng ký thành công → chuyển đến `/login`.

### Đăng nhập (0.5d)

- Form: `email`, `password`.
- Gọi `POST /auth/login`, nếu thành công lưu token (localStorage) và chuyển đến `/courses`.

### Validate form đăng nhập (0.5d)

- Email hợp lệ, password ≥ 6 ký tự.

---

## 7. Yêu cầu kỹ thuật

- Sử dụng **TypeScript** hoàn toàn, không dùng `any` bừa bãi.
- Tạo interface cho `Course`, `AuthUser`.
- Validate có thể dùng `react-hook-form`, `zod`.
- Có thông báo (toast) cho các hành động CRUD & auth.

---
