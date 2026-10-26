# STARFRONT — Story Dynamic Config (quyết định 2026-10-25)

- Client bắt đầu từ `content-manifest.json` → `stories/manifest.json` → `stories/pilots/<pilotId>/manifest.json`; không hardcode Pilot hoặc số chương.
- Mỗi Chapter có `chapter-NN.json` chứa blocks; lazy-load khi đọc. `file: null` nếu chưa có nội dung.
- Danh mục có thể hiển thị tất cả chương và trạng thái, còn trạng thái vận hành (DRAFT/IN_PROGRESS/REVIEW/APPROVED/PUBLISHED/HIDDEN) do AdminCP/store quản lý; không ép sửa React.
- AdminCP điều khiển ẩn/hiện qua API/database; public CDN không bảo mật bản thảo đã upload.
- Chỉ xuất chapter nội dung ra CDN khi chủ dự án xác nhận được công bố; không tự viết hoặc điền văn xuôi giả.
- Thêm Pilot mới bằng manifest, thêm chương mới bằng chapter JSON + cập nhật pilot manifest và story index; phát hành immutable CDN tag mới.
- R3 hiện chỉ có full prose Valentine chương 01; 12 Pilot có thể có catalog, kể cả chưa có chapter.
