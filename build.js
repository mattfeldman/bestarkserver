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


var metalsmith = Metalsmith(__dirname);

if (process.argv.length != 3 || process.argv[2] !== "publish") {
    metalsmith.use(serve())
              .use(watch({
                  livereload: true
              }));
    console.log("Building once for publish.")
}

metalsmith
    .use(markdown())
    .use(permalinks())
    .use(collections({
        contacts: 'contacts/**/*.html'
    }))
    .use(asset({
        src: "static",
        dest: "."
    }))
    .use(metadata({
        "Site": "data/config.json",
        "Ark": "data/ark.yaml",
        "mods": "data/mods.json"
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
    .destination('./dist')
    .build(function (err) {
        if (err) throw err;
    });