const express = require('express'),
  helmet = require('helmet'),
  compression = require('compression'),
  app = express(),
  http = require('http'),
  path = require('path'),
  server = http.createServer(app);

app.use(helmet());
app.use(compression());

app.use('/build', express.static(path.join(__dirname, 'build')));
app.use('/fonts', express.static(path.join(__dirname, 'fonts')));
app.use('/favicons', express.static(path.join(__dirname, 'favicons')));

app.get('/', (req, res) => {
  res.sendFile(  'index.html',{root:__dirname})
});

app.use(function (req, res, next) {
  console.error("сработало 404");
  res.sendStatus(404);
});

app.use(function (err, req, res, next) {
  err.userMessage = err.userMessage || 'На сервере произошла ошибка';
  if (res.status() < 500)
    res.status(500);
  res.send(err.userMessage);
});

server.listen(3000, function () {
  console.log(`Приложение запущено http://localhost:3000`);
});