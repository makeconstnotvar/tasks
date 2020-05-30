const express = require('express'),
  app = express(),
  http = require('http'),
  path = require('path'),
  server = http.createServer(app);

app.use('/build', express.static(path.join(__dirname, 'build')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/img', express.static(path.join(__dirname, 'img')));

app.get('*', (req, res) => {
  res.sendFile(  'index.html',{root:__dirname})
});

app.use(function (req, res, next) {
  console.error("сработало 404");
  res.sendStatus(404);
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  console.error(err.stack);
  err.userMessage = err.userMessage || 'На сервере произошла ошибка';
  if (res.status() < 500)
    res.status(500);
  res.send(err.userMessage);
});

server.listen(3000, function () {
  console.log(`Приложение запущено http://localhost:3000`);
});