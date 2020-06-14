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

let counter = 0;

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

app.get('/timeout', (req, res) => {
  counter++;
  let rnd = randomInteger(1, 5) * 1000
  setTimeout((timeout) => {
    if (counter % 5 === 0)
      res.status(200).send({data: true, timeout})
    else
      res.status(500).send({data: false, timeout})
  }, rnd, rnd)

});

app.get(['/', '/movie/:id', '/request'], (req, res) => {
  res.sendFile('index.html', {root: __dirname})
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