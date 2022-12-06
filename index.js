import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import {fileURLToPath} from 'url';

const app = express(); //celotna aplikacija v app
const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist/chess-ang'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/dist/chess-ang/index.html')));

app.listen(PORT);

//const express = require('express');
//const path = require('path');
//const app = express();
//app.use(express.static(__dirname + '/dist/chess-ang'));
//app.get('/*', function(req,res) {res.sendFile(path.join(__dirname+'/dist/chess-ang/index.html'));});
//    app.listen(process.env.PORT || 8080);