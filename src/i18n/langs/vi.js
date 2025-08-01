const vi = {
  message: {
    new_connection: 'Kết nối mới',
    refresh_connection: 'Làm mới',
    edit_connection: 'Sửa kết nối',
    duplicate_connection: 'Sao chép kết nối',
    del_connection: 'Xóa kết nối',
    close_connection: 'Đóng kết nối',
    add_new_line: 'Thêm dòng mới',
    dump_to_clipboard: 'Sao chép thành lệnh',
    redis_version: 'Phiên bản Redis',
    process_id: 'ID tiến trình',
    used_memory: 'Bộ nhớ đã sử dụng',
    used_memory_peak: 'Bộ nhớ sử dụng cao nhất',
    used_memory_lua: 'Bộ nhớ Lua đã sử dụng',
    connected_clients: 'Máy khách đang kết nối',
    total_connections_received: 'Tổng số kết nối',
    total_commands_processed: 'Tổng số lệnh đã xử lý',
    key_statistics: 'Thống kê khóa',
    all_redis_info: 'Tất cả thông tin Redis',
    server: 'Máy chủ',
    memory: 'Bộ nhớ',
    stats: 'Thống kê',
    settings: 'Cài đặt',
    ui_settings: 'Giao diện',
    feature_settings: 'Chức năng',
    common_settings: 'Chung',
    confirm_to_delete_row_data: 'Xác nhận xóa dữ liệu hàng này?',
    delete_success: 'Xóa thành công',
    delete_failed: 'Xóa thất bại',
    modify_success: 'Sửa đổi thành công',
    modify_failed: 'Sửa đổi thất bại',
    add_success: 'Thêm thành công',
    add_failed: 'Thêm thất bại',
    value_exists: 'Giá trị đã tồn tại',
    value_not_exists: 'Giá trị không tồn tại',
    refresh_success: 'Làm mới thành công',
    click_enter_to_rename: 'Nhấp hoặc nhấn Enter để đổi tên',
    click_enter_to_ttl: 'Nhấp hoặc nhấn Enter để sửa đổi TTL',
    confirm_to_delete_key: 'Xác nhận xóa {key} ?',
    confirm_to_rename_key: 'Xác nhận đổi tên {old} -> {new} ?',
    edit_line: 'Sửa dòng',
    auto_refresh: 'Tự động làm mới',
    auto_refresh_tip: 'Tự động làm mới, làm mới mỗi {interval} giây',
    key_not_exists: 'Khóa không tồn tại',
    collapse_all: 'Thu gọn tất cả',
    expand_all: 'Mở rộng tất cả',
    json_format_failed: 'Phân tích Json thất bại',
    msgpack_format_failed: 'Phân tích Msgpack thất bại',
    php_unserialize_format_failed: 'Giải tuần tự PHP thất bại',
    clean_up: 'Dọn dẹp',
    redis_console: 'Bảng điều khiển Redis',
    confirm_to_delete_connection: 'Xác nhận xóa kết nối?',
    connection_exists: 'Cấu hình kết nối đã tồn tại',
    close_to_edit_connection: 'Bạn phải đóng kết nối trước khi chỉnh sửa',
    close_to_connection: 'Xác nhận đóng kết nối?',
    ttl_delete: 'Đặt TTL <= 0 sẽ xóa khóa trực tiếp',
    max_page_reached: 'Đã đạt đến trang tối đa',
    add_new_key: 'Khóa mới',
    enter_new_key: 'Nhập tên khóa mới của bạn trước',
    key_type: 'Loại khóa',
    save: 'Lưu',
    enter_to_search: 'Nhấn Enter để tìm kiếm',
    export_success: 'Xuất thành công',
    select_import_file: 'Chọn tệp',
    import_success: 'Nhập thành công',
    put_file_here: 'Kéo tệp vào đây hoặc nhấp để chọn',
    config_connections: 'Kết nối',
    import: 'Nhập',
    export: 'Xuất',
    open: 'Mở',
    close: 'Đóng',
    open_new_tab: 'Mở trong tab mới',
    exact_search: 'Tìm kiếm chính xác',
    enter_to_exec: 'Nhấn Enter để thực thi lệnh, Lên và Xuống để chuyển đổi lịch sử',
    pre_version: 'Phiên bản',
    manual_update: 'Tải xuống thủ công',
    retry_too_many_times: 'Quá nhiều lần thử kết nối lại. Vui lòng kiểm tra trạng thái máy chủ',
    key_to_search: 'Tìm kiếm từ khóa',
    search_connection: 'Tìm kiếm kết nối',
    begin_update: 'Cập nhật',
    ignore_this_version: 'Bỏ qua phiên bản này',
    check_update: 'Kiểm tra cập nhật',
    update_checking: 'Đang kiểm tra cập nhật, vui lòng đợi...',
    update_available: 'Đã tìm thấy phiên bản mới',
    update_not_available: 'Phiên bản của bạn đã được cập nhật',
    update_error: 'Cập nhật thất bại',
    update_downloading: 'Đang tải xuống...',
    update_download_progress: 'Tiến trình tải xuống',
    update_downloaded: 'Tải xuống bản cập nhật hoàn tất, vui lòng khởi động lại ứng dụng của bạn.\
    [Mẹo]: Nếu bạn đang sử dụng Windows, sau khi đóng ứng dụng, hãy đợi biểu tượng trên màn hình làm mới về trạng thái bình thường (khoảng 10 giây), sau đó bạn có thể mở lại',
    mac_not_support_auto_update: 'Mac không hỗ trợ cập nhật tự động, vui lòng <a href="https://github.com/christianhood-nice/AnotherRedisDesktopManager/releases">tải xuống</a> và cài đặt lại thủ công,\
    hoặc chạy <br><code>brew reinstall --cask another-redis-desktop-manager </code>\
    <br><hr><br>❤️nếu nó hữu ích cho bạn, bạn có thể tài trợ thông qua <a href="https://apps.apple.com/app/id1516451072">AppStore</a>, và AppStore sẽ tự động cập nhật cho bạn.',
    font_family: 'Phông chữ',
    font_faq_title: 'Hướng dẫn cài đặt phông chữ',
    font_faq: '1. Có thể đặt nhiều phông chữ<br>\
    2. Việc chọn phông chữ là có thứ tự. Nên chọn phông chữ tiếng Anh trước, sau đó đến phông chữ ngôn ngữ của bạn<br>\
    3. Khi danh sách phông chữ hệ thống không thể tải trong một số trường hợp ngoại lệ, bạn có thể nhập tên phông chữ đã cài đặt theo cách thủ công.',
    private_key_faq: 'Hỗ trợ khóa riêng tư định dạng RSA, bắt đầu bằng <pre>-----BEGIN RSA PRIVATE KEY-----</pre>\
    đối với bắt đầu bằng <pre>-----BEGIN OPENSSH PRIVATE KEY-----</pre> bạn cần chuyển đổi định dạng thông qua <pre>ssh-keygen -p -m pem -f ~/.ssh/id_rsa</pre> Thao tác này sẽ không ảnh hưởng đến đăng nhập khóa riêng tư trước đó',
    dark_mode: 'Chế độ tối',
    load_more_keys: 'tải thêm',
    key_name: 'Tên khóa',
    project_home: 'Trang dự án',
    cluster_faq: 'Chọn bất kỳ nút nào trong cụm để điền và các nút khác sẽ được xác định tự động.',
    redis_status: 'Thông tin Redis',
    confirm_flush_db: 'Xác nhận xóa tất cả các khóa trong db{db} ?',
    flushdb: 'Xóa DB',
    flushdb_prompt: 'Nhập "{txt}"',
    info_disabled: 'Lỗi thực thi lệnh thông tin (có thể đã bị vô hiệu hóa), không thể hiển thị thông tin redis',
    page_zoom: 'Thu phóng trang',
    scan_disabled: 'Lỗi thực thi lệnh quét (có thể đã bị vô hiệu hóa), không thể hiển thị danh sách khóa',
    key_type_not_support: 'Hiển thị trực quan không được hỗ trợ cho loại này. Vui lòng sử dụng bảng điều khiển',
    delete_folder: 'Quét và xóa toàn bộ thư mục',
    multiple_select: 'Chọn nhiều',
    copy: 'Sao chép',
    copy_success: 'Sao chép thành công',
    keys_to_be_deleted: 'Các khóa sẽ bị xóa',
    delete_all: 'Xóa tất cả',
    clear_cache: 'Xóa bộ nhớ đệm',
    mark_color: 'Đánh dấu màu',
    key_no_permission: 'Quyền đọc tệp đã hết hạn, vui lòng chọn lại tệp khóa theo cách thủ công',
    toggle_check_all: 'Chọn tất cả | Bỏ chọn tất cả',
    select_lang: 'Chọn ngôn ngữ',
    clear_cache_tip: 'Khi có sự cố với máy khách, thao tác này sẽ xóa tất cả các kết nối và cấu hình để khôi phục máy khách',
    detail: 'Chi tiết',
    separator_tip: 'Dấu phân cách của chế độ xem dạng cây, đặt thành rỗng để tắt dạng cây và hiển thị các khóa dưới dạng danh sách',
    confirm_modify_unvisible_content: 'Nội dung chứa các ký tự không hiển thị, bạn có thể chỉnh sửa an toàn trong "Chế độ xem Hex". Nếu tiếp tục chỉnh sửa trong "Chế độ xem văn bản" có thể gây ra lỗi mã hóa, bạn có chắc chắn muốn tiếp tục không?',
    keys_per_loading: 'Số lượng tải',
    keys_per_loading_tip: 'Số lượng khóa được tải mỗi lần. Đặt quá lớn có thể ảnh hưởng đến hiệu suất',
    host: 'Máy chủ',
    port: 'Cổng',
    username: 'Tên người dùng',
    password: 'Mật khẩu',
    connection_name: 'Tên kết nối',
    separator: 'Dấu phân cách',
    timeout: 'Thời gian chờ',
    private_key: 'Khóa riêng',
    public_key: 'Khóa công khai',
    authority: 'Cơ quan',
    redis_node_password: 'Mật khẩu nút Redis',
    master_group_name: 'Tên nhóm chính',
    command_log: 'Nhật ký',
    sentinel_faq: 'Bạn có thể chọn một trong nhiều sentinel. Vui lòng điền cấu hình sentinel cho địa chỉ, cổng và mật khẩu. Mật khẩu nút Redis là mật khẩu của nút Master được giám sát bởi sentinel.',
    hotkey: 'Phím nóng',
    persist: 'Xóa thời gian hết hạn',
    custom_formatter: 'Trình định dạng tùy chỉnh',
    edit: 'Chỉnh sửa',
    new: 'Mới',
    custom: 'Tùy chỉnh',
    hide_window: 'Ẩn cửa sổ',
    minimize_window: 'Thu nhỏ cửa sổ',
    maximize_window: 'Phóng to cửa sổ',
    load_all_keys: 'tải tất cả',
    show_load_all_keys: 'Bật nút để tải tất cả các phím',
    load_all_keys_tip: 'Tải tất cả các phím cùng một lúc. Nếu số lượng phím quá lớn, máy khách có thể bị kẹt. Vui lòng sử dụng nó một cách chính xác',
    tree_node_overflow: 'Quá nhiều khóa hoặc thư mục, chỉ giữ lại {num} để hiển thị. Nếu khóa của bạn không có ở đây, nên tìm kiếm mờ, hoặc đặt dấu phân cách để trải các khóa vào các thư mục',
    connection_readonly: 'Chế độ chỉ đọc. Cấm thêm, chỉnh sửa và xóa',
    memory_analysis: 'Phân tích bộ nhớ',
    begin: 'Bắt đầu',
    pause: 'Tạm dừng',
    restart: 'Khởi động lại',
    max_display: 'Số lượng hiển thị tối đa: {num}',
    max_scan: 'Số lần quét tối đa: {num}',
    close_left: 'Đóng các tab bên trái',
    close_right: 'Đóng các tab bên phải',
    close_other: 'Đóng các tab khác',
    slow_log: 'Truy vấn chậm',
    load_current_folder: 'Chỉ tải thư mục hiện tại',
    custom_name: 'Tên tùy chỉnh',
    theme_select: 'Màu chủ đề',
    theme_system: 'Hệ thống',
    theme_light: 'Sáng',
    theme_dark: 'Tối',
  },
};

export default vi;
