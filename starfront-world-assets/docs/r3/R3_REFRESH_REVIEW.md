# STARFRONT R3 — REFRESH CANDIDATE (2026-10-25)

## Trạng thái
Đây là bản metadata overlay **REVIEW / KHÔNG PUBLISH**. Không bao gồm binary WebP. Chưa kiểm chứng checksum trực tiếp với asset repository hoặc CDN. Không upload đè version2-r1.

| Pilot | Trước | Hiện tại | Record metadata |
|---|---:|---:|---:|
| alviss | 10 | 10 | NOT_VERIFIED_IN_THIS_OVERLAY |
| aria | 20 | 30 | 30 |
| eric | 2 | 2 | NOT_VERIFIED_IN_THIS_OVERLAY |
| fortuna | 30 | 30 | 25 |
| kaelen | 20 | 27 | 27 |
| lyra | 20 | 30 | 30 |
| marcus | 2 | 2 | NOT_VERIFIED_IN_THIS_OVERLAY |
| nova | 22 | 22 | NOT_VERIFIED_IN_THIS_OVERLAY |
| rhea | 23 | 23 | 23 |
| selena | 20 | 20 | 20 |
| valentine | 35 | 35 | 35 |
| victor | 2 | 2 | NOT_VERIFIED_IN_THIS_OVERLAY |

## Yêu cầu trước khi phát hành
- Soát filename + SHA của từng WebP thực tế, đặc biệt Lyra/Kaelen có artwork thay thế và cập nhật.
- Dùng generator R3 được kiểm thử để làm mới toàn bộ tổng số ở content-manifest và images/manifest, không đoán số trực tiếp.
- Merge có kiểm soát với asset repo hiện hành, giữ R2 và GitHub Actions đang hoạt động.
- Các pilot không có đủ record chi tiết (Nova/Alviss/Eric/Marcus/Victor) chưa tuyên bố READY.
- Review conflicts trong báo cáo JSON.
