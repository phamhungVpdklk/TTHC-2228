// File: danhmuc_thutuc.js
// Đây là nơi bạn quản lý danh sách tất cả các thủ tục hành chính.
// Để thêm một thủ tục mới, chỉ cần sao chép một khối {...}, dán xuống dưới và thay đổi nội dung.

const danhMucThuTuc = [
    {
        maTTHC: "1.012753.H19",
        tenFile: "1.012753.H19.html",
        tieuDe: "Cấp GCN lần đầu đối với tổ chức",
        moTa: "Đăng ký đất đai, tài sản gắn liền với đất và cấp Giấy chứng nhận lần đầu cho tổ chức đang sử dụng đất.",
        mauSac: "blue" // Màu viền trên của thẻ
    },
    {
        maTTHC: "1.012756.H19",
        tenFile: "1.012756.H19.html",
        tieuDe: "Đăng ký đất do Nhà nước quản lý",
        moTa: "Đăng ký đất đai lần đầu đối với trường hợp được Nhà nước giao đất để quản lý.",
        mauSac: "gray" // Màu viền trên của thẻ
    },
    {
        maTTHC: "1.012766.H19",
        tenFile: "1.012766.H19.html",
        tieuDe: "Xóa đăng ký cho thuê QSDĐ",
        moTa: "Xóa đăng ký thuê, cho thuê lại quyền sử dụng đất trong dự án xây dựng kinh doanh kết cấu hạ tầng.",
        mauSac: "red" // Màu viền trên của thẻ
    },
    {
        maTTHC: "1.012781.H19",
        tenFile: "1.012781.H19.html",
        tieuDe: "Cấp GCN cho đất tăng thêm",
        moTa: "Đăng ký và cấp Giấy chứng nhận cho thửa đất có diện tích tăng thêm do thay đổi ranh giới.",
        mauSac: "yellow" // Màu viền trên của thẻ
    },
    {
        maTTHC: "1.012782.H19",
        tenFile: "1.012782.H19.html",
        tieuDe: "Cấp GCN đất ở trước 2004",
        moTa: "Cấp GCN cho phần diện tích còn lại của thửa đất ở có vườn, ao đã được cấp GCN một phần trước 01/7/2004.",
        mauSac: "indigo" // Màu viền trên của thẻ
    },
    {
        maTTHC: "1.012783.H19",
        tenFile: "1.012783.H19.html",
        tieuDe: "Cấp đổi Giấy chứng nhận",
        moTa: "Cấp đổi Giấy chứng nhận quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất khi có thay đổi.",
        mauSac: "purple" // Màu viền trên của thẻ
    }
    // KHI CÓ THỦ TỤC MỚI, BẠN CHỈ CẦN THÊM MỘT KHỐI TƯƠNG TỰ VÀO ĐÂY
];
