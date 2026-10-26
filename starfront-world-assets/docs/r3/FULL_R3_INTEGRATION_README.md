# STARFRONT FULL R3 — Integration Package

Đây là release candidate để tích hợp vào NHÁNH THỬ NGHIỆM, không phải tag CDN đã publish.

Gồm manifest/metadata cho 12 Pilot, Story dynamic, Valentine Chapter 01 và hai WebP Kaelen 021/022 đã xác minh SHA.
Không chứa toàn bộ WebP của 247 artwork; cần giữ nguyên các file ảnh hiện có từ asset repository.

Kiểm thử bắt buộc: đối chiếu đủ file WebP theo manifest, SHA-256, đường dẫn CDN, story refs, JSON schema, CI workflow R2 và chạy build/test trước khi tạo tag `v3.0-assets-r3`.
Không tự copy đè workflow hiện tại và không xóa assets R2.
