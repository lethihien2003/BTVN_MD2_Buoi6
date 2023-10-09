$(document).ready(function() {
    // Ẩn nội dung
    $('.accordion_content').hide();

    // thêm click
    $('.accordion_header').click(function() {
        // Chuyển đổi phần nội dung
        $(this).next('.accordion_content').slideToggle();

        // Chuyển đổi biểu tượng
        var icon = $(this).find('.plus_icon');
        if (icon.text() === '+') {
            icon.text('-');
        } else {
            icon.text('+');
        }

        // Đóng những phần khác
        $('.accordion_content').not($(this).next('.accordion_content')).slideUp();
        $('.plus_icon').not(icon).text('+');
    });


});

