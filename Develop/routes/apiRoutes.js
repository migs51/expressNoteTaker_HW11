var db = require("../db/db.json");
var uuid = require("uuid/v1");

module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        res.json(db);
    });

    app.post("/api/notes", function (req, res) {
        let newNote = {
            id: uuid(),
            title: req.body.title,
            text: req.body.text
        }
        db.push(newNote);
        res.json(db);
    })

    app.delete("/api/notes/:id", function (req, res) {
        let id = req.params.id;
       db = db.filter(note => note.id !== id);
       res.json(db);
    })
};

