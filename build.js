var metalsmith = require('metalsmith');
var permalinks = require('metalsmith-permalinks');
var assets = require('metalsmith-assets');
var collections = require('metalsmith-collections');
var markdown = require('metalsmith-markdown');
var templates = require('metalsmith-templates');


metalsmith(__dirname)
    .source('src')
    .use(collections({
        articles: {
        pattern: 'articles/**/*.md',
        sortBy: 'date',
        reverse: true
        }
    }))
    .use(markdown({
        gfm: true,
        tables: true, 
    }))
    .use(assets({
        source: 'src/assets/',
        destination: './'
    }))
    .use(permalinks())
    .use(templates({
        engine: 'jade',
        directory: 'templates'
    }))
    .destination('build')
    .build(function(err){
        if(err){
            throw err;
        }
});
