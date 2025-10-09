# WEB502_REACTTS

## Assignment 2: Tiếp nối Assignment 1 - Xây dựng Frontend React TypeScript với Authentication (Cơ bản & Nâng cao)

### Mục tiêu
Mở rộng từ Assignment 1 (Danh sách sản phẩm với Bootstrap, pagination, search): Thêm authentication (đăng ký/đăng nhập), CRUD đầy đủ cho Products. **Nâng cao**: Thêm CRUD Categories và Comments cho sản phẩm. **Bonus**: Kết nối thực tế với backend Node.js + MongoDB (từ WEB503), sử dụng Axios cho API calls.

Sử dụng React TypeScript, React Router (navigation), Axios (HTTP client), Bootstrap (UI). Không sử dụng Fake Data; fetch từ API.

### Yêu cầu cơ bản: Authentication & CRUD Products
1. **Authentication**:
   - Components: LoginForm, RegisterForm (form validation với React Hook Form + Yup).
   - Lưu JWT token vào localStorage, redirect sau login (protected routes với React Router).
   - Header: Hiển thị user info, logout button.
   - Protected: Admin routes (CRUD Products) yêu cầu login & role 'admin'.

2. **CRUD Products** (/products):
   - **List**: GET /api/products (pagination ?page=1&perPage=25, search ?title=keyword). Hiển thị grid Bootstrap như Asm1, với buttons "Mua ngay"/"Add to cart".
   - **Add**: Modal form POST /api/products (fields: name, price, description, image?).
   - **Edit**: Modal PUT /api/products/:id (chỉ admin).
   - **Delete**: Confirm dialog DELETE /api/products/:id (chỉ admin).

3. **Routing**:
   - /: Home (list products).
   - /login, /register: Auth forms.
   - /admin/products: CRUD (protected).

4. **Test cơ bản**:
   - Chạy app, test login/register (mock API nếu chưa có backend).
   - CRUD products với fake data hoặc mock Axios.
   - Kiểm tra protected routes (redirect nếu chưa login).

### Yêu cầu nâng cao: Categories & Comments
1. **CRUD Categories** (/admin/categories):
   - **List**: GET /api/categories (pagination ?page=1&limit=10).
   - **Add/Edit/Delete**: Forms POST/PUT/DELETE /api/categories (fields: name, description; admin only).
   - Tích hợp: Filter products theo category (?category=name).

2. **Comments**:
   - **Add**: Form POST /api/products/:id/comments {content} (yêu cầu login, hiển thị dưới product detail).
   - **List**: GET /api/products/:id/comments (pagination ?page=1&limit=5, hiển thị với user info).
   - **Edit/Delete**: Buttons cho owner (PUT/DELETE /api/comments/:id).
   - Product Detail: Route /products/:id với comments section.

3. **Query nâng cao Products**:
   - GET /api/products?category=name&minPrice=0&maxPrice=1000&page=1&limit=25.
   - Filter/search/pagination như Asm1, populate category name.

4. **Test nâng cao**:
   - Tạo category, filter products.
   - Thêm/view/edit comment (với login).
   - Kiểm tra quyền (user thường chỉ add comment, không CRUD category).

### Bonus: Kết nối Backend
- Sử dụng API từ WEB503 (Node.js + MongoDB): Auth (/api/auth), Products/Categories/Comments.
- Xử lý errors (401 unauthorized, 404 not found).

### Hướng dẫn nộp bài
- Code GitHub (branch asm2, với TypeScript strict).
- Demo video/screenshot: Auth flow, CRUD, comments.
- Report Markdown: Thay đổi so Asm1, challenges.
- Nếu bonus: Link backend repo.

**Deadline**: [Ngày nộp]. Điểm cơ bản: 7/10. Nâng cao: +2/10. Bonus: +1/10.
