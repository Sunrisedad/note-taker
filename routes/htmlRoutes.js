// DEPENDENCIES

const path = require("path");

module.exports = function (app){

    
// ROUTE TO NOTES

    app.get('/notes', function(req, response) {
        response.sendFile(path.join(__dirname, '../public/notes.html'));
    });

// ROUTE TO INDEX
    
    app.get('*', function(req, response) {
        response.sendFile(path.join(__dirname, '../public/index.html'));
    });
};