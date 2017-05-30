'use strict'

let express = require('express');
let app = express();
let note = require('../mocks/notes.json');
let user = require('../mocks/users.json');
let bodyParser = require('body-parser');

//this parses the strings into JSON (the body part)
app.use(bodyParser.urlencoded({extended: true}));

//tells the app that folder public is the one to use
app.use(express.static('../public'))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//routes below

app.get('/users', function(req, res) {
    res.send(user);
    res.end();
});

//route which gets user by ID
app.get('/users/:id', function(req, res) {
    let usr = getUserByID(req.params.id)
    res.send(usr);
    res.end();
});
//route which get notes by ID
app.get('/notes/:id', function(req, res) {
    let nte = getNoteByID(req.params.id)
    res.send(nte);
    res.end();
});

app.get('/notes', function(req, res) {
    res.send(note);
    res.end();
});



app.use(bodyParser.json());

let server = app.listen(9000, function() {
    console.log('Server Started port: 9000')
})

//function get users by ID
function getUserByID(id) {
    let db = user.users
    for (let i = 0; i < db.length; i++) {
        let usr = db[i]
        if (usr._id == id) {
            return usr
        }
    }
}
//function get notes by ID
function getNoteByID(id) {
    let db = note.notes
    for (let i = 0; i < db.length; i++) {
        let nte = db[i]
        if (nte._id == id) {
            return nte
        }
    }
}
