var Metalsmith = require('metalsmith'),
    markdown = require('metalsmith-markdown'),
    layouts = require('metalsmith-layouts'),
    metadata = require('metalsmith-metadata'),
    watch = require('metalsmith-watch'),
    serve = require('metalsmith-serve');
var metalsmith = Metalsmith(__dirname)
    .use(serve())
    .use(watch({paths: {"**/*": "**/*"}, livereload: true}))
    .use(markdown())
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
