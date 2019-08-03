const { send } = require('micro')
const get = require('micro-get');
const fs = require('fs');
const path = require('path');

module.exports = get(async(req, res) => {
    //console.log('req: ', req);
    //return send(res, 200, `It's a GET request!`);
    //res.setHeaders('Content-type', 'text/html')
    return getResponse(req.url, res);
})

function getResponse(query, res) {
    console.log('query: ', query);
    switch (query) {
        case '/':
            return send(res, 200, fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8'));
        default:
            return send(res, 400, 'Bad request');
    }
}