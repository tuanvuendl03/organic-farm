# Hướng Dẫn Đưa Dự Án Lên GitHub & Phát Hành Trực Tuyến (GitHub Pages)

Chào bạn! Tôi đã khởi tạo thành công kho lưu trữ Git cục bộ (**Local Git Repository**) cho dự án `organic-farm` và thực hiện Commit đầu tiên lưu trữ toàn bộ mã nguồn website (bao gồm giao diện sản phẩm, AI Chatbot và các sửa đổi hình ảnh).

Dưới đây là hướng dẫn cực kỳ ngắn gọn và dễ hiểu giúp bạn tạo Repository trên GitHub cá nhân, đẩy mã nguồn lên và **kích hoạt trang web chạy trực tuyến miễn phí** để gửi cho mọi người xem ngay lập tức!

---

## 🚀 BƯỚC 1: Tạo Repository mới trên GitHub

1. Truy cập vào tài khoản GitHub của bạn: [https://github.com](https://github.com)
2. Nhấp vào nút **New** (hoặc dấu cộng **+** ở góc trên cùng bên phải -> chọn **New repository**).
3. Điền các thông tin:
   - **Repository name**: `organic-farm`
   - **Description** (Tùy chọn): *Website demo nông trại hữu cơ Lahub tích hợp trợ lý ảo AI.*
   - **Public/Private**: Chọn **Public** (để mọi người có thể vào xem code và chạy website trực tuyến).
   - **LƯU Ý QUAN TRỌNG**: **KHÔNG** tích chọn bất kỳ mục nào trong phần *"Initialize this repository with"* (như Add a README file, Add .gitignore, hay Choose a license) vì chúng ta đã có sẵn mã nguồn ở máy.
4. Nhấp vào nút **Create repository**.

---

## 💻 BƯỚC 2: Liên kết mã nguồn và đẩy lên GitHub

Mở cửa sổ Command Prompt / Terminal tại thư mục `c:\xampp\htdocs\organic-farm` và chạy lần lượt các lệnh sau (thay thế tên tài khoản `tuanvuendl03` bằng tên đăng nhập GitHub của bạn nếu khác):

```bash
# 1. Đổi tên nhánh chính thành main (chuẩn GitHub mới)
git branch -M main

# 2. Liên kết kho lưu trữ máy bạn với kho lưu trữ trực tuyến trên GitHub
git remote add origin https://github.com/tuanvuendl03/organic-farm.git

# 3. Đẩy toàn bộ mã nguồn lên GitHub (hệ thống sẽ yêu cầu đăng nhập nếu là lần đầu)
git push -u origin main
```

---

## 🌐 BƯỚC 3: Kích hoạt chạy trang web trực tuyến (GitHub Pages)

Vì website của chúng ta là trang tĩnh hoàn chỉnh (gồm HTML, CSS, JS thuần), bạn có thể xuất bản nó thành một liên kết hoạt động thực tế trên Internet **chỉ với vài cú click miễn phí**:

1. Tại trang Repository `organic-farm` trên GitHub của bạn, nhấp vào thẻ **Settings** (biểu tượng bánh răng ở thanh menu trên cùng).
2. Ở thanh menu bên trái, tìm và nhấp vào mục **Pages** (dưới phần *Code and automation*).
3. Trong mục **Build and deployment** -> phần **Source**, giữ nguyên là `Deploy from a branch`.
4. Trong phần **Branch**:
   - Chọn nhánh **main** (thay cho *None*).
   - Ô bên cạnh chọn thư mục gốc `/ (root)`.
5. Nhấp nút **Save**.

🎉 **HOÀN THÀNH!** 
Đợi khoảng 1-2 phút, GitHub sẽ xuất bản trang web của bạn. Hãy tải lại trang Pages này, bạn sẽ nhận được một thông báo màu xanh kèm theo đường dẫn trực tuyến có dạng:
👉 **`https://tuanvuendl03.github.io/organic-farm/`**

Bạn có thể sao chép liên kết này gửi cho khách hàng, bạn bè hay đồng nghiệp click vào để trải nghiệm đầy đủ các tính năng (từ hiệu ứng Caterpilar lúc mở trang, xem chi tiết sản phẩm, giỏ hàng, cho tới chat với Kỹ sư Lahub AI) ngay trên điện thoại hoặc máy tính của họ!
