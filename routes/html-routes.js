var path = require('path');

module.exports = function (app){

    app.get('/', (res, req) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    app.get('/form', (res, req) => {
        res.sendFile(path.join(__dirname, '../public/form.html'));
    });

    app.get('/results', (res, req) => {
        res.sendFile(path.join(__dirname, '../public/results.html'));
    });

}