var Metalsmith = require('metalsmith'),
    markdown = require('metalsmith-markdown'),
    layouts = require('metalsmith-layouts'),
    metadata = require('metalsmith-metadata'),
    watch = require('metalsmith-watch'),
    serve = require('metalsmith-serve'),
    inPlace = require('metalsmith-in-place'),
    permalinks = require('metalsmith-permalinks'),
    collections = require('metalsmith-collections'),
    asset = require('metalsmith-static');

var async = require('async'),
    got = require('got');

var steamPluginData = function (mods) {
    var baseUrl = "http://api.embed.ly/1/extract?key=14045eca3d45445aa1f234d96aaad59d&url=http%3A%2F%2Fsteamcommunity.com%2Fsharedfiles%2Ffiledetails%2F%3Fid%3D";
    var mods = ["520879363",
        "509793590",
        "529801313",
        "531396658",
        "566885854",
        "510590313",
        "539464369",
        "535821068",
        "564895376",
        "520953653",
        "544598236",
        "559651126",
        "566887000",
        "509791002",
        "534838287"];

    return function (files, metalsmith, done) {
        var metaRef = metalsmith.metadata();
        var metaMods = [];
        async.map(mods,
            function (mod, next) {
                async.retry({times: 3, interval: 500}, function () {
                    got(baseUrl + mod, {json: true}).then(function (response) {
                        response.body.id = mod;
                        metaMods.push(response.body);
                        next();
                    });
                }, function (err) {
                    console.log(err);
                });
            },
            function (err) {
                metaRef["mods"] = metaMods;
                console.log("Done Pulling Steam Mod Data for "+metaMods.length);
                done();
            });
    };
};


var metalsmith = Metalsmith(__dirname)
    .use(serve())
    .use(watch({
        livereload: true
    }))
    .use(steamPluginData())
    .use(markdown())
    .use(permalinks())
    .use(collections({
        posts: 'contacts/**/*.html'
    }))
    .use(asset({
        src: "static",
        dest: "."
    }))
    .use(metadata({
        "Site": "data/config.json",
        "Ark": "data/ark.yaml"
    }))
    .use(layouts({
        engine: 'handlebars',
        directory: 'layouts',
        partials: 'partials',
        "default": 'default.html'
    }))
    .use(inPlace({
        engine: 'handlebars',
        partials: 'partials'
    }))
    .source('content')
    .destination('./dist-new')
    .build(function (err) {
        if (err) throw err;
    });