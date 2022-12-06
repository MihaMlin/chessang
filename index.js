import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import {fileURLToPath} from 'url';

import usersRoutes from './routes/users.js';
import confirmRoute from './routes/confirm.js';
import loginRoute from './routes/login.js';

const app = express(); //celotna aplikacija v app
const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist/chess-ang'));

app.use('/users', usersRoutes);

app.use("/login", loginRoute);

app.use("/confirm", confirmRoute);

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/dist/chess-ang/index.html')));

app.listen(PORT);