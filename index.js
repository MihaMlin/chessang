import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app = express(); //celotna aplikacija v app
const path = path();
const PORT = rocess.env.PORT || 5000;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist/chess-ang'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname+'/dist/chess-ang/index.html')));

app.listen(PORT);

//const express = require('express');
//const path = require('path');
//const app = express();
//app.use(express.static(__dirname + '/dist/chess-ang'));
//app.get('/*', function(req,res) {res.sendFile(path.join(__dirname+'/dist/chess-ang/index.html'));});
//    app.listen(process.env.PORT || 8080);