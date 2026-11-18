# Trả lời 

1. `errors` và `valid` là giá trị dẫn xuất từ dữ liệu form hiện tại, nên tính trong mỗi lần render giúp chúng luôn đồng bộ; lưu riêng bằng `useState` dễ bị cũ hoặc lệch khi quên cập nhật sau một lần sửa input.
2. Nếu `clear()` chạy trước `createOrder`, mất mạng vẫn làm giỏ hàng trống dù đơn chưa được tạo; chỉ xoá sau khi API thành công sẽ giữ giỏ để người dùng thử lại khi thất bại.
3. `PUT /users/1` thay toàn bộ user bằng dữ liệu gửi lên nên các trường không có như `email` và `password` sẽ mất; dùng `PATCH` để chỉ cập nhật `name` và `phone`, giữ nguyên trường khác.
4. Bỏ hoàn tác trong `catch` khiến thông báo vẫn hiện đã đọc dù server chưa lưu khi mất mạng; cập nhật lạc quan phù hợp với yêu thích, nhưng không nên dùng cho thanh toán vì cần xác nhận giao dịch từ server.
5. Bộ lọc Đơn hàng dùng state `status` để lọc danh sách thành `visibleOrders` và truyền danh sách đó vào `FlatList` qua `data`.
