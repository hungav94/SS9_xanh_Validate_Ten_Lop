function isLop(str) {
    regex=/^[ACP][0-9]{4}[GHIKLM]$/;
    if (regex.test(str)) {
        return 'tên lớp hợp lệ';
    } else {
        return 'tên lớp không hợp lệ';
    }
}