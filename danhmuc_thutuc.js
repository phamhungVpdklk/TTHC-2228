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
        mauSac: "green" // Màu viền trên của thẻ
    },
    {
        maTTHC: "1.012785.H19",
        tenFile: "1.012785.H19.html",
        tieuDe: "Cấp GCN cho đất đã chuyển quyền trước 01/8/2024",
        moTa: "Đăng ký và cấp GCN cho người nhận quyền sử dụng đất trước 01/8/2024 nhưng chưa hoàn tất thủ tục.",
        mauSac: "teal" // Màu viền trên của thẻ
    },
    {
        maTTHC: "1.012786.H19",
        tenFile: "1.012786.H19.html",
        tieuDe: "Cấp lại Giấy chứng nhận do bị mất",
        moTa: "Thực hiện thủ tục cấp lại Giấy chứng nhận quyền sử dụng đất, quyền sở hữu tài sản do bị mất.",
        mauSac: "orange" // Màu viền trên của thẻ
    },
    {
        maTTHC: "1.012787.H19",
        tenFile: "1.012787.H19.html",
        tieuDe: "Cấp GCN cho người mua trong dự án BĐS",
        moTa: "Đăng ký và cấp GCN cho người nhận chuyển nhượng QSDĐ trong các dự án phát triển nhà ở.",
        mauSac: "cyan" // Màu viền trên của thẻ
    },
    {
        maTTHC: "1.012789.H19",
        tenFile: "1.012789.H19.html",
        tieuDe: "Cung cấp thông tin, dữ liệu đất đai",
        moTa: "Khai thác thông tin, dữ liệu từ cơ sở dữ liệu đất đai theo yêu cầu của tổ chức, cá nhân.",
        mauSac: "slate"  // Màu viền trên của thẻ
    },
// Các thủ tục mới bổ sung (dán vào mảng danhMucThuTuc trong danhmuc_thutuc.js)
    {
        maTTHC: "1.012790.H19",
        tenFile: "1.012790.H19.html",
        tieuDe: "Đính chính Giấy chứng nhận đã cấp",
        moTa: "Thực hiện thủ tục đính chính sai sót thông tin trên Giấy chứng nhận đã cấp.",
        mauSac: "rose" // Tailwind color
    },
    {
        maTTHC: "1.012791.H19",
        tenFile: "1.012791.H19.html",
        tieuDe: "Thu hồi và cấp lại Giấy chứng nhận đã cấp không đúng quy định",
    	moTa: "Thu hồi Giấy chứng nhận cấp không đúng quy định và cấp lại sau khi thu hồi.",
    	mauSac: "emerald"  // Màu viền trên của thẻ
    },
    {
    	maTTHC: "1.012796.H19",
    	tenFile: "1.012796.H19.html",
    	tieuDe: "Đính chính Giấy chứng nhận đã cấp lần đầu có sai sót",
    	moTa: "Đính chính sai sót trên Giấy chứng nhận được cấp lần đầu.",
    	mauSac: "pink"  // Màu viền trên của thẻ
    },
    {
    	maTTHC: "1.012805.H19",
    	tenFile: "1.012805.H19.html",
    	tieuDe: "Giải quyết tranh chấp đất đai thuộc thẩm quyền của Chủ tịch UBND cấp tỉnh",
    	moTa: "Giải quyết tranh chấp đất đai thuộc thẩm quyền Chủ tịch UBND cấp tỉnh.",
    	mauSac: "amber"  // Màu viền trên của thẻ
    },
    {
    	maTTHC: "1.012812.H19",
    	tenFile: "1.012812.H19.html",
    	tieuDe: "Hòa giải tranh chấp đất đai",
    	moTa: "Hòa giải tranh chấp đất đai tại cấp xã.",
    	mauSac: "lime"  // Màu viền trên của thẻ
    },
    {
    	maTTHC: "1.012817.H19",
   	tenFile: "1.012817.H19.html",
    	tieuDe: "Xác định lại diện tích đất ở của hộ gia đình, cá nhân đã được cấp Giấy chứng nhận trước ngày 01/7/2004",
    	moTa: "Xác định lại diện tích đất ở của hộ gia đình, cá nhân cấp GCN trước ngày 01/7/2004.",
    	mauSac: "fuchsia"  // Màu viền trên của thẻ
    },
    {
    	maTTHC: "1.012818.H19",
    	tenFile: "1.012818.H19.html",
    	tieuDe: "Thu hồi và cấp lại Giấy chứng nhận đã cấp lần đầu không đúng quy định",
    	moTa: "Thu hồi Giấy chứng nhận cấp lần đầu không đúng quy định và cấp lại sau khi thu hồi.",
    	mauSac: "stone"  // Màu viền trên của thẻ
    },
    {
    	maTTHC: "1.013831.H19",
    	tenFile: "1.013831.H19.html",
    	tieuDe: "Đăng ký biến động QSDĐ, QSH tài sản (chuyển đổi, chuyển nhượng, thừa kế, tặng cho...)",
    	moTa: "Đăng ký biến động quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất trong các trường hợp chuyển đổi, chuyển nhượng, thừa kế, tặng cho, góp vốn.",
    	mauSac: "sky"  // Màu viền trên của thẻ
    },
    {
    	maTTHC: "1.013833.H19",
    	tenFile: "1.013833.H19.html",
    	tieuDe: "Đăng ký biến động đối với trường hợp đổi tên hoặc thay đổi thông tin về người sử dụng đất...",
    	moTa: "Đăng ký biến động khi có thay đổi thông tin người sử dụng đất, thửa đất hoặc hạn chế quyền, giảm diện tích do sạt lở.",
    	mauSac: "violet" // Màu viền trên của thẻ
    },
    {
    	maTTHC: "1.011441",
    	tenFile: "1.011441.html",
    	tieuDe: "Đăng ký biện pháp bảo đảm bằng quyền sử dụng đất, tài sản gắn liền với đất",
    	moTa: "Đăng ký biện pháp bảo đảm bằng quyền sử dụng đất, tài sản gắn liền với đất.",
    	mauSac: "orange" // Màu viền trên của thẻ
    },
    {
    	maTTHC: "1.011442",
    	tenFile: "1.011442.html",
    	tieuDe: "Đăng ký thay đổi biện pháp bảo đảm bằng quyền sử dụng đất, tài sản gắn liền với đất",
    	moTa: "Đăng ký thay đổi biện pháp bảo đảm bằng quyền sử dụng đất, tài sản gắn liền với đất.",
    	mauSac: "emerald"  // Màu viền trên của thẻ
    },
    {
    	maTTHC: "1.011443",
    	tenFile: "1.011443.html",
    	tieuDe: "Xóa đăng ký biện pháp bảo đảm bằng quyền sử dụng đất, tài sản gắn liền với đất",
    	moTa: "Xóa đăng ký biện pháp bảo đảm bằng quyền sử dụng đất, tài sản gắn liền với đất.",
    	mauSac: "red" // Màu viền trên của thẻ
    },
    {
    	maTTHC: "1.011444",
    	tenFile: "1.011444.html",
    	tieuDe: "Đăng ký thông báo xử lý tài sản bảo đảm, đăng ký thay đổi, xóa đăng ký thông báo xử lý tài sản bảo đảm ...",
    	moTa: "Đăng ký thông báo xử lý tài sản bảo đảm, đăng ký thay đổi, xóa đăng ký thông báo xử lý tài sản bảo đảm là quyền sử dụng đất, tài sản gắn liền với đất.",
    	mauSac: "indigo" // Màu viền trên của thẻ
    },
    {
    	maTTHC: "1.011445",
    	tenFile: "1.011445.html",
    	tieuDe: "Chuyển tiếp đăng ký thế chấp quyền tài sản phát sinh từ hợp đồng mua bán nhà ở hoặc từ hợp đồng mua bán tài sản khác gắn liền với đất",
    	moTa: "Chuyển tiếp đăng ký thế chấp quyền tài sản phát sinh từ hợp đồng mua bán nhà ở hoặc từ hợp đồng mua bán tài sản khác gắn liền với đất.",
    	mauSac: "pink"  // Màu viền trên của thẻ
    }

	
    // KHI CÓ THỦ TỤC MỚI, BẠN CHỈ CẦN THÊM MỘT KHỐI TƯƠNG TỰ VÀO ĐÂY
];
