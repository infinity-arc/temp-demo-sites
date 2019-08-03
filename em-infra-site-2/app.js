const { send } = require('micro')
const get = require('micro-get');
const fs = require('fs');
const path = require('path');
const cors = require('micro-cors');
const md = require('markdown-it')();
var markdownItAttrs = require('markdown-it-attrs');

md.use(markdownItAttrs, {
    // optional, these are default options
    leftDelimiter: '{',
    rightDelimiter: '}',
    allowedAttributes: [] // empty array = all attributes are allowed
});

const test = md.render(fs.readFileSync(path.join(__dirname, 'SolutionDesc.md'), 'utf8'));
console.log('test: ', test);

const handleGet = get(async(req, res) => {
    //console.log('req: ', req);
    //return send(res, 200, `It's a GET request!`);
    //res.setHeaders('Content-type', 'text/html')
    return getResponse(req, res);
});

function getResponse(req, res) {
    console.log('query: ', req.url);
    try {
        switch (req.url) {
            case '/':
                return send(res, 200, fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8'));
            case '/mdsheet':
                return send(res, 200, renderMarkdown('SolutionDesc.md'));
            case '/favicon.ico':
                return send(res, 100, 'Fuck the favicon!');
            default:
                return send(res, 400, 'Bad request');
        }
    } catch (err) {
        return send(res, 500, `CAUGHT Server error: ${err}`);
    }
}

const renderMarkdown = (file) => md.render(fs.readFileSync(path.join(__dirname, file), 'utf8'));

module.exports = handleGet;