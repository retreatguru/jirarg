$(function() {
    var columns = [];
    $('.ghx-swimlane').each(function(lane_index, lane) {
        $(lane).find('.ghx-column').each(function(column_index, column) {
            var points = $(column).find('.ghx-extra-field[data-tooltip^="Story Points"]').find('.ghx-extra-field-content').contents();
            $(points).each(function(i, p) {
                p = parseInt(p.textContent);
                if (isNaN(columns[column_index])) {
                    columns[column_index] = 0;
                }
                if (!isNaN(p)) {
                    columns[column_index] += p;
                }
            });
        });
    });
    console.log("Columns!");
    console.log(columns);
    $.each(columns, function(index, total) {
        var header = $('.ghx-column-headers').find('.ghx-column').get(index)
        $(header).find('.ghx-limits').append($('<span>').html("&nbsp; (" + total + " points)"));
    })
});