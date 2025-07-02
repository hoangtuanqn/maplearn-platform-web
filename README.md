# 📋 HƯỚNG DẪN CÀI ĐẶT VÀ CHẠY DỰ ÁN

## 🚀 Yêu cầu hệ thống

Trước khi bắt đầu, hãy đảm bảo máy tính của bạn đã cài đặt:

- **Node.js** (phiên bản mới nhất)
- **Yarn** package manager
- **Git** để clone repository

## 🔧 Bước 1: Cài đặt Node.js

### Tải và cài đặt Node.js phiên bản mới nhất:

1. Truy cập trang web chính thức: [https://nodejs.org/](https://nodejs.org/)
2. Tải phiên bản **LTS** (Long Term Support) mới nhất
3. Chạy file cài đặt và làm theo hướng dẫn
4. Kiểm tra cài đặt thành công bằng lệnh:

```bash
node --version
npm --version
```

## 📦 Bước 2: Cài đặt Yarn

### Nếu chưa có Yarn, cài đặt bằng npm:

```bash
npm install -g yarn
```

### Kiểm tra Yarn đã được cài đặt:

```bash
yarn --version
```

## 📥 Bước 3: Clone Repository

Clone dự án về máy tính của bạn bằng lệnh sau:

```bash
git clone https://github.com/hoangtuanqn/maplearn-education-platform.git
```

Sau đó di chuyển vào thư mục dự án:

```bash
cd maplearn-education-platform
```

## 📦 Bước 4: Cài đặt Dependencies

Cài đặt tất cả các package cần thiết bằng Yarn:

```bash
yarn install
```

hoặc chỉ cần:

```bash
yarn
```

## ⚡ Bước 5: Chạy dự án

Khởi động server development bằng lệnh:

```bash
yarn run dev
```

hoặc:

```bash
yarn dev
```

## 🌐 Truy cập ứng dụng

Sau khi chạy thành công, mở trình duyệt và truy cập:

```
http://localhost:5173
```

hoặc địa chỉ được hiển thị trong terminal.

## 📝 Lưu ý quan trọng

- **Luôn sử dụng Yarn** thay vì npm cho dự án này để tránh xung đột dependencies
- Đảm bảo không có ứng dụng nào khác đang chạy trên cổng 5173
- Nếu gặp lỗi khi cài đặt, hãy thử:
    1. Xóa thư mục `node_modules`
    2. Xóa file `yarn.lock`
    3. Chạy lại `yarn install`
- Kiểm tra phiên bản Node.js bằng lệnh: `node --version` (khuyến nghị >= 18.0.0)

## 🔍 Troubleshooting

### Lỗi thường gặp:

**1. Lỗi "yarn: command not found"**

```bash
# Cài đặt lại Yarn
npm install -g yarn
```

**2. Lỗi port đã được sử dụng**

```bash
# Tìm và kill process đang sử dụng port 5173
npx kill-port 5173
```

**3. Lỗi permissions (macOS/Linux)**

```bash
# Thay đổi quyền sở hữu node_modules
sudo chown -R $(whoami) ~/.npm
```

---

**Chúc bạn setup thành công! 🎉**

_Lưu ý: Dự án này sử dụng Yarn làm package manager chính. Vui lòng không sử dụng npm để tránh xung đột dependencies._
