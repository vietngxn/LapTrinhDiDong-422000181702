# Câu hỏi bổ sung & Trả lời — Buổi 7: Navigation, Redux & API

### Câu 1: Cấu trúc điều hướng
**Vì sao `BookDetail` được đăng ký ở Stack mà không đặt trong Tab? Nếu đặt vào Tab thì màn hình sẽ khác đi thế nào?**
> **Trả lời:**
> Đăng ký `BookDetail` ở Root Native Stack giúp màn hình chi tiết che phủ toàn bộ giao diện (bao gồm cả thanh Bottom Tab) và tự động có nút quay lại (←) ở header theo hành vi điều hướng phân cấp chuẩn. Nếu đặt `BookDetail` vào bên trong Bottom Tab, thanh Tab Bar vẫn sẽ luôn hiển thị ở cạnh dưới màn hình, chiếm dụng không gian và không có nút back tự động để quay về danh sách trước đó mà phải tự xử lý navigation phức tạp.

---

### Câu 2: Redux Toolkit & useMemo
**Trong reducer viết `state.items.push(...)` mà sao state gốc không bị sửa trực tiếp? Thử bỏ `useMemo` trong `useCart`: kết quả hiển thị có đổi không, và có hậu quả gì?**
> **Trả lời:**
> Redux Toolkit sử dụng thư viện **Immer** bên dưới: khi chúng ta thực hiện các thao tác trông giống như đột biến (`push`, `splice`), Immer sẽ ghi nhận các thay đổi trên một bản sao nháp (`draft state`) và tự động tạo ra một state mới hoàn toàn bất biến (immutable). Nếu bỏ `useMemo` trong `useCart`, kết quả hiển thị (tổng tiền, tổng số lượng) **không đổi**, nhưng các phép tính `.reduce()` sẽ bị chạy lại ở mỗi chu kỳ component re-render; với giỏ hàng có nhiều mục hoặc component render thường xuyên sẽ gây lãng phí tài nguyên tính toán.

---

### Câu 3: Promise.all & Xử lý lỗi song song
**Nếu `getCategories()` lỗi còn `getBooks()` thành công thì Home hiện gì? Tìm cách để vẫn hiện được danh sách sách (gợi ý: `Promise.allSettled`) và nói rõ cách đó phải đánh đổi gì?**
> **Trả lời:**
> Vì `Promise.all` hoạt động theo cơ chế "fail-fast", chỉ cần một request bị lỗi (`getCategories`) thì cả Promise sẽ nhảy ngay vào khối `catch`, làm `HomeScreen` rơi vào trạng thái `ErrorView` và người dùng không xem được bất kỳ cuốn sách nào dù `getBooks` đã thành công. Để khắc phục, ta có thể thay bằng `Promise.allSettled`:
> ```typescript
> const [booksRes, catsRes] = await Promise.allSettled([getBooks(), getCategories()]);
> if (booksRes.status === "fulfilled") setBooks(booksRes.value);
> if (catsRes.status === "fulfilled") setCategories(catsRes.value);
> ```
> Đánh đổi: Giao diện sẽ ở trạng thái "bán phần" (có sách nhưng thiếu danh mục filter hoặc ngược lại), code xử lý phải kiểm tra trạng thái từng phần và hiển thị thông báo lỗi cục bộ thay vì dùng một trạng thái lỗi chung đơn giản.

---

### Câu 4: Debounce & Cleanup timer
**Vì sao không đặt `setTimeout` thẳng trong `onChangeText`? Hàm dọn dẹp (`return () => clearTimeout`) giúp tránh lỗi gì?**
> **Trả lời:**
> Nếu đặt `setTimeout` trực tiếp trong `onChangeText`, mỗi phím gõ sẽ kích hoạt một bộ đếm giờ riêng độc lập mà không bị hủy khi người dùng gõ ký tự kế tiếp, dẫn đến mỗi phím đều gây ra một lần lọc/gọi hàm (chỉ bị trễ đi chứ không được gộp lại). Hàm dọn dẹp `return () => clearTimeout(t)` trong `useEffect` giúp hủy timer cũ khi giá trị `value` thay đổi liên tục, chỉ thực thi duy nhất lần gõ cuối cùng sau khi ngừng gõ đủ khoảng trễ (`delay`), đồng thời tránh lỗi rò rỉ bộ nhớ hoặc cập nhật state khi component đã bị unmount.

---

### Câu 5: Code bổ sung (Sắp xếp theo giá tăng dần / giảm dần)
**Thêm tuỳ chọn sắp xếp “Giá tăng dần / giảm dần” cho Home. Chỉ cần thêm một state và sửa một chỗ trong visibleBooks.**
> **Đoạn code đã triển khai trong [HomeScreen.tsx](file:///d:/BookStore_Buoi7_Starter/BookStore_Buoi7_Starter/src/screens/HomeScreen.tsx):**
>
> 1. Khai báo state:
> ```typescript
> const [sortByPrice, setSortByPrice] = useState<"asc" | "desc" | null>(null);
> ```
>
> 2. Cập nhật `visibleBooks`:
> ```typescript
> const visibleBooks = useMemo(() => {
>   const filtered = filterBooks(books, {
>     keyword: debouncedKeyword,
>     categoryId,
>     priceRange,
>   });
>   if (sortByPrice === "asc") {
>     return [...filtered].sort((a, b) => a.price - b.price);
>   }
>   if (sortByPrice === "desc") {
>     return [...filtered].sort((a, b) => b.price - a.price);
>   }
>   return filtered;
> }, [books, debouncedKeyword, categoryId, priceRange, sortByPrice]);
> ```
>
> 3. Nút bấm toggle trạng thái sắp xếp hiển thị ở header danh sách:
> ```typescript
> const toggleSort = () => {
>   setSortByPrice((prev) => (prev === null ? "asc" : prev === "asc" ? "desc" : null));
> };
> ```

