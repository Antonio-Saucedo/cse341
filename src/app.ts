import express from 'express';
require('dotenv').config();
import { initDb } from './db/connect';
import swaggerRouter from './routers/swagger.router';
import arrowsRouter from './routers/arrows.router';
import axesRouter from './routers/axes.router';
import bowsRouter from './routers/bows.router';
import clubsRouter from './routers/clubs.router';
import fistsRouter from './routers/fists.router';
import foodsRouter from './routers/foods.router';
import knifesRouter from './routers/knifes.router';
import pickaxesRouter from './routers/pickaxes.router';
import polearmsRouter from './routers/polearms.router';
import shieldsRouter from './routers/shields.router';
import spearsRouter from './routers/spears.router';
import swordsRouter from './routers/swords.router';
import { auth, requiresAuth } from'express-openid-connect';

const app = express();
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

app.set('views', 'views');
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  console.log(req.oidc.isAuthenticated());
  res.render('index', {
    title: 'Valheim Info API',
    isAuthenticated: req.oidc.isAuthenticated()
  });
});

app.use('/', swaggerRouter);
app.use('/', arrowsRouter);
app.use('/', axesRouter);
app.use('/', bowsRouter);
app.use('/', clubsRouter);
app.use('/', fistsRouter);
app.use('/', foodsRouter);
app.use('/', knifesRouter);
app.use('/', pickaxesRouter);
app.use('/', polearmsRouter);
app.use('/', shieldsRouter);
app.use('/', spearsRouter);
app.use('/', swordsRouter);

initDb((err: Error) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(process.env.PORT!);
    console.log(`Connected to DB and listening on ${process.env.PORT!}`);
  }
});

module.exports = app;