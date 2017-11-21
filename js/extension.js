$(document).ready(function () {
    loadData();
});

var loadData = function () {
    $('#files').empty();
    $('#files').append($('<option>').text("Select"));
    $.each(data, function (i, obj) {
        $('#files').append($('<option>').text(obj.Description).attr('value', obj.val));
    });

}