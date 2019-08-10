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

const useUrl = true;


// const prefix = useUrl ? 'https://em-proposal.now.sh/' : __dirname + '/public'

// https://now-cdn-demos.c1i44.now.sh/md

const seeReqPar = true;

const handleGet = get(async(req, res) => {
    //seeRequestParams(seeReqPar, req);
    return getResponse(req, res);
});

function getResponse(req, res) {
    seeRequestParams(seeReqPar, req);
    try {
        console.log('req.url: ', req.url);
        switch (req.url) {
            case '/':
                return send(res, 200, fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8'));
            case '/favicon':
                return send(res, 200, fs.readFileSync(path.join(__dirname, 'public', 'favicon.ico'), 'utf8'));
            case '/desc':
                return send(res, 200, fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8'));
            case '/mdsheet-intro':
                return send(res, 200, renderMarkdown('md/1_solution-desc.md'));
            case '/mdsheet-ccp1':
                return send(res, 200, renderMarkdown('md/2_cloud-components-intro.md'));
            case '/mdsheet-sc':
                return send(res, 200, renderMarkdown('md/_1_secure-connection.md'));
            case '/mdsheet-vpc':
                return send(res, 200, renderMarkdown('md/_2_virtual-private-cloud.md'));
            case '/mdsheet-s3':
                return send(res, 200, renderMarkdown('md/_3_s3storage.md'));
            case '/mdsheet-ns':
                return send(res, 200, renderMarkdown('md/_4_notification-service.md'));
            case '/mdsheet-im':
                return send(res, 200, renderMarkdown('md/_5_identity-management.md'));
            case '/mdsheet-cred':
                return send(res, 200, renderMarkdown('md/_7_management-console.md'));
            case '/mdsheet-mc':
                return send(res, 200, renderMarkdown('md/_6_credentials.md'));
            case '/mdsheet-cc':
                return send(res, 200, renderMarkdown('md/_8_cloud-configuration.md'));
            case '/mdsheet-sec-ops':
                return send(res, 200, renderMarkdown('md/3_operation-to-security.md'));
            case '/mdsheet-enc-comp':
                return send(res, 200, renderMarkdown('md/4_encryption-to-compliance.md'));
            case '/mdsheet-gloss':
                return send(res, 200, renderMarkdown('md/5_glossary-table.md'));
            case '/cost':
                return send(res, 200, fs.readFileSync(path.join(__dirname, 'public/cost.html'), 'utf8'));
            case '/get-table':
                return send(res, 200, fs.readFileSync(path.join(__dirname, 'public', '_html-comp', 'table.html'), 'utf8'));
            case '/style':
                return send(res, 200, fs.readFileSync(path.join(__dirname, 'public', 'style.css'), 'utf8'));
            case '/getcost':
                return send(res, 200, renderMarkdown('md/6_cost.md'));
            case '/mdsheet-tail':
                return send(res, 200, renderMarkdown('md/_tail-sections.md'));
            case '/favicon.ico':
                return send(res, 100, 'Fuck the favicon!');
            default:
                return send(res, 400, 'Bad request');
        }
    } catch (err) {
        return send(res, 500, `CAUGHT Server error: ${err}`);
    }
}

function renderMarkdown(file) {
    console.log(__dirname);
    path.join(__dirname, file);
    console.log('path.join(__dirname,file);: ', path.join(__dirname, file));
    return md.render(fs.readFileSync(path.join(__dirname, 'public', file), 'utf8'))
};

function seeRequestParams(reqPar, req) {
    if (reqPar) {
        console.table(req.headers);
        var reqParamsTable = { path: req.path, params: req.params, body: req.url }
        console.table(reqParamsTable);
    };
}

module.exports = handleGet;