var token = '974409b4ab6107e079c93574dd148749a790cfa6';

$.ajax({
    type: "GET",
    headers: {
        "Authorization": "token " + token,
        "Accept": "application/vnd.github.v3+json"
    },
    url: 'https://api.github.com/repos/Brasilfone/portal.bft/tags?page=1&per_page=100; rel="next"',
    dataType: "json",
    success: function (data) {
        $('#total-releases').text(data.length + ' Versões');
        $('#list-releases').empty();

        $.each(data, function(i, dataTag) {
            $('#list-releases').append(
                '<li class="media">' +
                    '<a href="#">' +
                        '<div class="media-body">' +
                            '<h4 class="media-heading">' + dataTag.name + '</h4>' +
                        '</div>' +
                    '</a>' +
                '</li>'
            );
        });
    }
});
