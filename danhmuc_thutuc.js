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
    },
    {
        maTTHC: "1.012784.H19",
        tenFile: "1.012784.H19.html",
        tieuDe: "Tách thửa hoặc hợp thửa đất",
        moTa: "Thực hiện thủ tục tách hoặc hợp thửa đất theo quy định của pháp luật đất đai.",
        mauSac: "green" 
    },
    {
        maTTHC: "1.012785.H19",
        tenFile: "1.012785.H19.html",
        tieuDe: "Cấp GCN cho đất đã chuyển quyền trước 01/8/2024",
        moTa: "Đăng ký và cấp GCN cho người nhận quyền sử dụng đất trước 01/8/2024 nhưng chưa hoàn tất thủ tục.",
        mauSac: "teal"
    },
    {
        maTTHC: "1.012786.H19",
        tenFile: "1.012786.H19.html",
        tieuDe: "Cấp lại Giấy chứng nhận do bị mất",
        moTa: "Thực hiện thủ tục cấp lại Giấy chứng nhận quyền sử dụng đất, quyền sở hữu tài sản do bị mất.",
        mauSac: "orange"
    },
    {
        maTTHC: "1.012787.H19",
        tenFile: "1.012787.H19.html",
        tieuDe: "Cấp GCN cho người mua trong dự án BĐS",
        moTa: "Đăng ký và cấp GCN cho người nhận chuyển nhượng QSDĐ trong các dự án phát triển nhà ở.",
        mauSac: "cyan"
    },
    {
        maTTHC: "1.012789.H19",
        tenFile: "1.012789.H19.html",
        tieuDe: "Cung cấp thông tin, dữ liệu đất đai",
        moTa: "Khai thác thông tin, dữ liệu từ cơ sở dữ liệu đất đai theo yêu cầu của tổ chức, cá nhân.",
        mauSac: "slate" 
    }
    // KHI CÓ THỦ TỤC MỚI, BẠN CHỈ CẦN THÊM MỘT KHỐI TƯƠNG TỰ VÀO ĐÂY
];
