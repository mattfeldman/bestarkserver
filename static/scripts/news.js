$(document).ready(function () {
    $(".rss-container").rss("http://steamcommunity.com/groups/bestarkserver/rss",
        {
            // outer template for the html transformation
            // default: "<ul>{entries}</ul>"
            // valid values: any string0
            layoutTemplate: "<div class='ui items'>{entries}</div>",

            // inner template for each entry
            // default: '<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>'
            // valid values: any string
            entryTemplate: '<div class="item"><div class="content"><div class="header"><a href="{url}">{title}</a></div><div class="meta"><span class="date">{date}</span><span class="user">{author}</span></div><div class="description">{body}</div></div></div>',
            dateFormat: 'MMMM Do, YYYY',

        },
        function callback() {
            $(".news.loader").remove();
        }
    );
});