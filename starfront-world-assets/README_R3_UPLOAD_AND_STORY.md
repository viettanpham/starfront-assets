# STARFRONT WORLD V2 — FULL R3 RELEASE PACKAGE (CORRECT STRUCTURE)

Gói này đã được sửa đường dẫn ảnh để **khớp chính xác** với các trường `artworks[].path` của 12 Pilot Gallery manifest.

Giải nén một lần vào thư mục gốc repository (`starfront-assets/`), **merge** `starfront-world-assets/` với thư mục cùng tên có sẵn, không tạo lồng thư mục.

- 247 WebP vật lý được đặt tại `starfront-world-assets/images/pilots/<pilotId>/<filename>.webp`.
- Mỗi Pilot có `<pilotId>.json`, `files.json`, `gallery.json` trong cùng thư mục với WebP.
- Story có `stories/manifest.json`, `stories/pilots/<pilotId>/manifest.json`, và bản thảo thật Valentine `chapter-01.json`.
- 12 x 7 mục chapter trong danh mục, chỉ chương thật mới có JSON nội dung.
- Marcus/Victor gồm 4 tham chiếu V1, không có WebP R3.
- Không chứa hay thay thế `.github/workflows` và `scripts` hiện có.
- Không tự xóa file cũ, không phát hành tag CDN trước khi GitHub Actions/URL runtime PASS.

**Không dùng ZIP R3 trước đây:** bản đó lưu 247 ảnh phẳng trong `images/` nhưng manifest trỏ vào `images/pilots/<pilotId>/`, gây lỗi khi ứng dụng tải ảnh.

Kết quả kiểm tra SHA-256 (247/247), ZIP CRC và file-path được lưu tại `docs/r3/R3_FINAL_PACKAGE_VALIDATION.json`.
