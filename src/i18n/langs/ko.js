const ko = {
  message: {
    new_connection: '새 연결',
    refresh_connection: '새로고침',
    edit_connection: '연결 편집',
    duplicate_connection: '연결 복제',
    del_connection: '연결 삭제',
    close_connection: '연결 해제',
    add_new_line: '새 행 추가',
    dump_to_clipboard: '명령어 복사',
    redis_version: '레디스 버전',
    process_id: '프로세스 ID',
    used_memory: '사용중인 메모리',
    used_memory_peak: '최대 메모리 사용율',
    used_memory_lua: 'Lua 메모리 사용율',
    connected_clients: '클라이언트 연결',
    total_connections_received: '총 연결수',
    total_commands_processed: '총 명령어수',
    key_statistics: '키 통계',
    all_redis_info: '모든 레디스 정보',
    server: '서버',
    memory: '메모리',
    stats: '상태',
    settings: '설정',
    ui_settings: '모양',
    feature_settings: 'Function',
    common_settings: '일반',
    confirm_to_delete_row_data: '데이터 행을 삭제하시겠습니까?',
    delete_success: '삭제하였습니다.',
    delete_failed: '삭제 실패',
    modify_success: '수정하였습니다.',
    modify_failed: '수정 실패',
    add_success: '추가하였습니다.',
    add_failed: '추가 실패',
    value_exists: '값이 존재합니다',
    value_not_exists: '값이 존재하지 않습니다',
    refresh_success: '새로고침 성공',
    click_enter_to_rename: '클릭 또는 엔터로 이름 변경',
    click_enter_to_ttl: '클릭 또는 엔터로 TTL 변경',
    confirm_to_delete_key: '{key} 키를 삭제하시겠습니까?',
    confirm_to_rename_key: '{old} -> {new} 이름으로 변경하시겠습니까?',
    edit_line: '행 편집',
    auto_refresh: '자동 새로고침',
    auto_refresh_tip: '매 {interval}초마다 새로고침',
    key_not_exists: '존재하지 않는 키',
    collapse_all: '모두 접기',
    expand_all: '모두 펴기',
    json_format_failed: 'Json 변환 실패',
    msgpack_format_failed: 'Msgpack 변환 실패',
    php_unserialize_format_failed: 'PHP Unserialize 실패',
    clean_up: '비우기',
    redis_console: '레디스 콘솔',
    confirm_to_delete_connection: '연결을 삭제하시겠습니까?',
    connection_exists: '연결 설정이 이미 존재합니다',
    close_to_edit_connection: '편집하기 전에 연결을 종료합니다.',
    close_to_connection: '연결을 종료하시겠습니까?',
    ttl_delete: 'TTL<=0 으로 설정하면 키가 바로 삭제됩니다.',
    max_page_reached: '마지막 페이지',
    add_new_key: '새 키',
    enter_new_key: '새 키의 이름을 먼저 입력해주세요',
    key_type: '키 유형',
    save: '저장',
    enter_to_search: '엔터로 검색',
    export_success: '내보내기를 완료하였습니다.',
    select_import_file: '파일을 선택해주세요',
    import_success: '불러오기를 완료하였습니다.',
    put_file_here: '파일을 이 곳으로 드래그하거나 클릭하여 선택해주세요',
    config_connections: '연결',
    import: '불러오기',
    export: '내보내기',
    open: '열기',
    close: '닫기',
    open_new_tab: '새 탭에서 열기',
    exact_search: '완전일치 검색',
    enter_to_exec: '엔터를 통해 명령을 실행하고, 방향키 위아래로 실행기록을 전환할 수 있습니다.',
    pre_version: '버전',
    manual_update: '직접 다운로드',
    retry_too_many_times: '너무 많이 재연결을 시도하였습니다. 서버 상태를 확인해주세요.',
    key_to_search: '키워드 검색',
    search_connection: '검색 연결',
    begin_update: '업데이트',
    ignore_this_version: '이 버전 무시',
    check_update: '업데이트 확인',
    update_checking: '업데이트를 확인중입니다, 잠시만 기다려주세요...',
    update_available: '새 버전을 찾았습니다.',
    update_not_available: '최신버전입니다.',
    update_error: '업데이트 실패',
    update_downloading: '다운로드 중...',
    update_download_progress: '다운로드 진행률',
    update_downloaded: '업데이트가 완료되었습니다. 앱을 재시작해주세요.\
    [도움말]: Windows를 사용하는 경우 앱을 종료한 후 바탕 화면 아이콘이 정상 상태(약 10초)로 새로 고쳐질 때까지 기다린 후 다시 열 수 있습니다.',
    mac_not_support_auto_update: 'Mac은 자동 업데이트를 지원하지 않습니다. <a href="https://github.com/christianhood-nice/AnotherRedisDesktopManager/releases">직접 다운로드</a>하여 재설치해주세요.\
    또는 <br><code>brew reinstall --cask another-redis-desktop-manager</code> 명령을 실행하십시오.\
    <br><hr><br>❤️만약 이 프로그램이 당신에게 유용하다면 <a href="https://apps.apple.com/app/id1516451072">앱스토어</a>를 통하여 후원하실 수 있습니다. 또한, 앱스토어는 자동으로 업데이트됩니다.',
    font_family: '폰트 패밀리',
    font_faq_title: '폰트 설정 지침',
    font_faq: '1. 여러 폰트를 선택할 수 있습니다.<br>\
    2. 폰트는 선택된 순서대로 로드됩니다. 영문 폰트를 먼저 선택하고 당신의 언어 폰트를 선택하는 것을 추천합니다.<br>\
    3. 시스템 폰트가 목록에 없는 경우, 설치된 폰트명을 직접 입력할 수 있습니다.',
    private_key_faq: '다음으로 시작하는 RSA 유형의 개인키를 지원합니다, <pre>-----BEGIN RSA PRIVATE KEY-----</pre>\
    또는 <pre>-----BEGIN OPENSSH PRIVATE KEY-----</pre>형식 변경이 필요하다면 <pre>ssh-keygen -p -m pem -f ~/.ssh/id_rsa</pre>이 명령은 이전 개인키 로그인에 영향을 미치지 않습니다.',
    dark_mode: '다크 모드',
    load_more_keys: '더 불러오기',
    key_name: '키 명',
    project_home: '프로젝트 홈',
    cluster_faq: '클러스터의 노드 중 아무거나 하나에 대하여 입력하면 다른 노드들은 자동으로 인식합니다.',
    redis_status: '레디스 정보',
    confirm_flush_db: '{db} 데이터베이스의 모든 키를 삭제하시겠습니까?',
    flushdb: '데이터베이스 비우기',
    flushdb_prompt: '진행하려면 "{txt}"를 입력해주세요.',
    info_disabled: 'Info 명령 실행 예외(비활성화되었을 수 있음), Redis 정보를 표시할 수 없습니다.',
    page_zoom: '화면 확대',
    scan_disabled: '스캔 명령 실행 예외(비활성화되었을 수 있음), 키 목록을 표시할 수 없습니다.',
    key_type_not_support: '이 유형에는 시각화 표현이 지원되지 않습니다. 콘솔을 이용해주세요.',
    delete_folder: '모든 폴더를 스캔하고 삭제',
    multiple_select: '다중 선택',
    copy: '복사',
    copy_success: '복사 되었습니다.',
    keys_to_be_deleted: '삭제할 키',
    delete_all: '모두 삭제',
    clear_cache: '캐시 비우기',
    mark_color: '라벨 색상',
    key_no_permission: '파일 읽기 권한이 만료되었습니다, 파일을 직접 재선택해주세요.',
    toggle_check_all: '모두 선택 | 모두 해제',
    select_lang: '언어 선택',
    clear_cache_tip: '클라이언트에 문제가 있을 때, 이 작업을 통해 모든 연결과 환경설정을 삭제하여 클라이언트를 복구할 수 있습니다.',
    detail: '상세정보',
    separator_tip: '트리뷰를 위한 구분자로, 비워두면 트리가 비활성화되고 목록으로 키를 표시합니다.',
    confirm_modify_unvisible_content: '보이지않는 문자가 내용에 포함되어 있습니다. "Hex View"를 통해 안전하게 편집할 수 있습니다. "Text View"로 편집하면 오류가 발생할 수 있습니다. 정말로 계속 진행하시겠습니까?',
    keys_per_loading: '한 번에 로드할 개수',
    keys_per_loading_tip: '설정한 수 만큼 키를 불러옵니다. 너무 크게 설정하면 성능에 영향을 미칠 수 있습니다.',
    host: '호스트',
    port: '포트',
    username: '사용자명',
    password: '비밀번호',
    connection_name: '이름',
    separator: '구분자',
    timeout: '연결시도 시간제한',
    private_key: '개인키',
    public_key: '공개키',
    authority: '인증기관',
    redis_node_password: '레디스 노드 비밀번호',
    master_group_name: '마스터 그룹명',
    command_log: '로그',
    sentinel_faq: '여러 센티널 중 하나를 선택할 수 있습니다. 센티널의 주소, 포트 및 비밀번호를 입력하십시오. 레디스 노드 비밀번호는 센티널이 모니터링하는 마스터 노드의 비밀번호입니다.',
    hotkey: '단축키',
    persist: '만료시간 삭제',
    custom_formatter: '사용자정의 형식',
    edit: '편집',
    new: '생성',
    custom: '사용자정의',
    hide_window: '창 숨기기',
    minimize_window: '최소화',
    maximize_window: '최대화',
    load_all_keys: '모두 불러오기',
    show_load_all_keys: '모두 불러오기 버튼 활성화',
    load_all_keys_tip: '모든 키를 한 번에 불러옵니다. 만약 키가 너무 많다면 클라이언트가 멈출 수 있습니다. 사용에 주의 하십시오.',
    tree_node_overflow: '키나 폴더가 너무 많으면 {num}개만 표시합니다. 찾으려는 키가 보이지 않으면 퍼지 검색을 권장합니다. 또는 구분자를 설정하여 키들을 폴더로 분류할 수 있습니다.',
    connection_readonly: '읽기전용 모드입니다. 추가, 편집, 삭제가 제한됩니다.',
    memory_analysis: '메모리 분석',
    begin: '시작',
    pause: '일시정지',
    restart: '재시작',
    max_display: '최대 표시제한:  {num}',
    max_scan: '최대 스캔제한:  {num}',
    close_left: '좌측 탭 닫기',
    close_right: '우측 탭 닫기',
    close_other: '다른 탭 닫기',
    slow_log: '저성능 쿼리',
    load_current_folder: '현재 폴더만 로드',
    custom_name: '맞춤 이름',
    theme_select: '색상 테마',
    theme_system: '시스템',
    theme_light: '밝은 색',
    theme_dark: '어두운 색',
  },
};

export default ko;
