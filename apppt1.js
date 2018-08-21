$(document).ready(function() {
    clearInput();
    $('#textInput').keyup(function() {
        $textInput = $(this).val();
        $textInput ? $('#btnSubmit').prop('disabled', false) : $('#btnSubmit').prop('disabled', true);
    });

    $('#btnSubmit').click(function(event) {
        event.preventDefault();
        alert($textInput);
        $h2 = $(`<h2>${$textInput}</h2>`);
        $h2.hover(function() {
            $(this).css('background-color', randomColor());
        });
        $h2.dblclick(function() {
            $(this).remove();
        })
        $('#list').append($h2);
        clearInput();
        // console.log(randomColor());
    });

    $('body').append('<div id="container"></div>');
    $('body').append('<ul id="list"></ul>');
});

function clearInput() {
    $('#textInput').val('');
    $('#btnSubmit').prop('disabled', true);
}

function randomColor() {
    color = []
    for (i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 255));
    }
    return `rgb(${color})`;
}
