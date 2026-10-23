# STARFRONT WORLD — PILOT ARTWORK RELEASE V2 (STAGING)

## TRẠNG THÁI
Đây là **gói bổ sung R2**, chưa push/tag/publish GitHub. 182 ảnh WebP thật của 8 Pilot, từ 8 ZIP đã duyệt trong ChatGPT Library. Không chứa ảnh review/rejected.

## CẤU TRÚC
- `images/pilots/<pilotId>/*.webp`: 182 file canonical.
- `manifests/pilot-v2-artworks.json`: inventory toàn bộ 182 ảnh + SHA256 + dimensions + source ZIP.
- `SHA256SUMS_PILOT_R2.txt`: checksums xác minh.

**QUAN TRỌNG:** Gói này KHÔNG chứa hoặc thay thế `manifests/assets-manifest.json` hiện đang chạy của R1. Không có đầy đủ bản manifest R1 để ghép đúng schema, nên không được ghi đè hoặc dùng pilot-v2-artworks.json như thể là schema runtime của WEB-01.

## CÁCH PHÁT HÀNH AN TOÀN
1. Dùng một working branch mới từ repository `viettanpham/starfront-assets` với **toàn bộ nội dung R1 hiện tại** (giữ `starfront-world-assets/images/` phẳng và `manifests/assets-manifest.json`).
2. Giải nén ZIP này tại root repo sao cho thêm `starfront-world-assets/images/pilots/...` và `starfront-world-assets/manifests/pilot-v2-artworks.json`; KHÔNG xóa tệp R1.
3. Kiểm tra checksum với `SHA256SUMS_PILOT_R2.txt`, đối chiếu `pilot-v2-artworks.json`.
4. Hợp nhất **theo schema hiện hữu** vào `manifests/assets-manifest.json` sao cho mọi assetId R1 được giữ nguyên, các asset R2 có ID/path/metadata mới. Nếu cần sửa resolver, xử lý trong codebase app và test cả V1/V2.
5. Audit R1+R2 (kiểm tra URL, image metadata và số lượng). Commit, tạo **tag mới** `v2.0-assets-r2` (không xóa hoặc force-move R1).
6. Kiểm tra CDN jsDelivr URLs của ảnh mới; qua WEB-01 AdminCP Fast/Full Validation rồi mới Activate R2.
7. Sau khi được kích hoạt, kiểm tra Gallery/Stage 8 Pilot và V1 regression.

## LƯU Ý VALENTINE
Bộ 30 ảnh hiện tại là approved baseline, chủ dự án đang rework. Nên thay file mới nhất **trước khi tag R2**, nếu chưa hoàn thành thì tạm giữ Valentine R1/hoãn tag; nếu R2 đã phát hành, thay bằng tag R3, tuyệt đối không sửa immutable tag R2.

## CÁC PILOT NAM
Alviss/Eric/Marcus/Victor có các file fullbody/portrait cũ trong R1 theo screenshot GitHub chủ dự án cung cấp; chúng KHÔNG nằm trong gói 182 ảnh mới. Không xóa đường dẫn cũ.

## CÁC THƯ MỤC CHƯA CÓ
`images/gear`, `images/equipment`, `images/environments`, `images/ui` dành cho release tương lai, chưa cần đưa folder rỗng vào Git.

## PERSISTENCE
Không upload qua API ghi vào `public/assets` trên Cloud Run (local ephemeral filesystem). GitHub release R2 là immutable asset distribution; staging/durable upload qua GCS là luồng khác, cần kiểm tra riêng.

## ALIAS CHO CORE KHÔNG ĐỔI TÊN
- Valentine: CORE `activity` = `valentine-activity-001.webp`.
- Rhea: CORE `portrait` = `rhea-portrait-command.webp`.
Cần map trong runtime manifest đúng filename gốc, không rename gây đứt tham chiếu.
