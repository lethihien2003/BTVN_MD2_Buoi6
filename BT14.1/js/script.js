$(document).ready(function() {
    // Thêm
    $('#add').click(function() {
        var textTitle = $('#title').val();
        if (textTitle.trim() !== '') {
            var listItem = $('<li>').text(textTitle);
            var deleteButton = $('<button>').text('X').click(function() {
                listItem.remove();
            });
            listItem.append(deleteButton);
            $('#list').append(listItem);
            $('#title').val('');

            listItem.click(function() {
                listItem.toggleClass('completed');
                updateCheckmark(listItem);
            });
        }  else {
            alert('Vui lòng nhập nội dung trước khi thêm!');
        }
    });

    // Event Enter
    $('#title').keypress(function(event) {
        if (event.which === 13) {
            $('#add').click();
        }
    });

    function updateCheckmark(item) {
        var checkmark = $('<span>').text('✓').addClass('checkmark');
        item.find('.checkmark').remove();
        if (item.hasClass('completed')) {
            item.prepend(checkmark);
        }else {
            item.prepend(checkmark);
        }
    }
});
