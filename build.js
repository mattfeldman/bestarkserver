var Metalsmith = require('metalsmith'),
    markdown = require('metalsmith-markdown');

var metalsmith = Metalsmith(__dirname)
    .use(markdown())
    .source('./content')
    .destination('./dist-new')
    .build(function(err){
        if (err) throw err;
    });
