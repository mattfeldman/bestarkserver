var Metalsmith = require('metalsmith'),
    markdown = require('metalsmith-markdown'),
    layouts = require('metalsmith-layouts'),
    metadata = require('metalsmith-metadata'),
    watch = require('metalsmith-watch'),
    serve = require('metalsmith-serve'),
    asset = require('metalsmith-static');

var metalsmith = Metalsmith(__dirname)
    .use(serve())
    .use(watch({
        livereload: true
    }))
    .use(markdown())
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
        "default": 'index.html'
    }))
    .source('content')
    .destination('./dist-new')
    .build(function (err) {
        if (err) throw err;
    });
