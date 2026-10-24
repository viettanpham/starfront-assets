# STARFRONT CDN R2+ — Hướng dẫn người phụ trách (GitHub)

## Cần biết trước
- Nhánh làm việc: `version1-r2` (hoặc cập nhật workflow nếu chọn tên nhánh khác).
- R1 trên `main` và tag cũ giữ nguyên; **không xóa R1**.
- Chỉ đưa ảnh đã duyệt vào `images/pilots/<pilot>/`.
- `files.json` được script sinh tự động; tuyệt đối không cần sửa tay.
- `gallery.json` chỉnh tên, phụ đề và mô tả. Nếu thiếu metadata, app phải có nhãn trung tính dựa trên filename.
- **Phải tích hợp loader của ứng dụng** để đọc files.json + gallery.json trước khi chuyển active CDN version.

## Lần đầu tiên phát hành R2
1. Vào GitHub repo `starfront-assets`, checkout nhánh `version1-r2` (hoặc tạo từ R1 nếu chưa có).
2. Upload/merge các file trong ZIP R2 vào **root repo**, không bọc thêm một thư mục cấp ngoài; giữ lại các file R1 còn cần để tương thích.
3. Trong repo Settings → Actions → General, bật quyền cần thiết cho GitHub Actions; workflow đã khai báo `contents: write`. Branch protection cần cho phép bot đẩy hoặc dùng Pull Request.
4. Actions → `Generate STARFRONT Asset Index` → Run workflow (nếu muốn chạy tay); kiểm tra bước generate, commit.
5. Kiểm tra số lượng ảnh và `files.json`, mở nhiều file WebP trực tiếp trên GitHub.
6. Kiểm tra 2 URL CDN sau khi tạo tag R2: `https://cdn.jsdelivr.net/gh/viettanpham/starfront-assets@v2.0-assets-r2/images/pilots/valentine/files.json` và `.../valentine/valentine-fullbody.webp`.
7. **Chỉ khi mọi kiểm tra đạt và app hỗ trợ schema R2**, tạo tag `v2.0-assets-r2` trỏ tới commit **sau khi** Action commit index.
8. Đổi active asset release sang R2; kiểm tra Gallery, fullscreen, Profile, Story anchor và rollback.

## R3/R4 — Thêm ảnh
1. Chọn nhánh `version1-r2` trên GitHub; vào `images/pilots/alviss/`.
2. Add file → Upload files → chọn WebP tên dạng `alviss-outfit-006.webp` → Commit changes.
3. Actions: đợi workflow thành công; kiểm tra `files.json` tự tăng số lượng, có SHA256 thực.
4. Muốn đặt tên đẹp: mở `gallery.json` → Edit → thêm entry filename vào `artworks`, điền `title`, `subtitle`, `description`, `category`, `order` → Commit.
5. **Nếu chỉnh metadata**, kiểm tra Action và commit cuối cùng trước khi tag.
6. Tạo tag `v2.0-assets-r3` ở commit đã hoàn tất, không sửa tag R2.
7. Chuyển active release R3 và kiểm tra màn hình thực tế.

## Thay ảnh cũ
- Upload phiên bản mới **cùng filename** và commit thay file cũ. Indexer tự đổi SHA, không đổi assetId.
- Lưu ý GitHub Web UI có thể không cho upload đè trực tiếp trong mọi trường hợp; dùng Git client hoặc xóa file cũ và thêm file mới trong cùng PR/commit.

## Xóa ảnh
- Kiểm tra Story chapters, Profile, character selection và Gallery không tham chiếu đến assetId đó.
- Xóa WebP; **đồng thời xóa entry cùng filename khỏi `gallery.json`**, nếu có; workflow sẽ FAIL nếu metadata vẫn trỏ ảnh đã xóa.
- Phát hành release mới sau khi QA.

## Thêm Pilot
- Tạo thư mục `images/pilots/<id>/` và upload ảnh, thêm `<id>` vào `images/pilots/manifest.json`, tạo `gallery.json` nếu cần.
- Tạo tag mới khi indexer chạy xong và runtime đã nhận Pilot.

## Rollback
- Đổi active release về tag đã ổn định, ví dụ `v2.0-assets-r2`; không xóa hay di chuyển immutable tags.
- Nếu lỗi do code runtime, rollback code tương ứng nữa.

## QA tối thiểu
- GitHub Actions green; tất cả tên WebP hợp lệ, tất cả paths/CDN HTTP 200.
- Kiểm tra số lượng hình, ảnh đại diện, một số artwork lớn, Gallery title/subtitle và Fullscreen info.
- Story chỉ dùng ảnh được scene anchors chỉ định; các chương không có ảnh không để panel trống.
- `files.json` machine-generated; `gallery.json` editorial; không chứa mô tả suy đoán khi không có nguồn xác thực.
