### Пример решения задания 2
C помощью [git](https://git-scm.com/) забрать весь репозиторий себе 
```
git clone https://github.com/makeconstnotvar/tasks
```

Перейти в директорию `/tasks/stage2/example`, установить npm пакеты, собрать приложение, запустить `express` сервер  

```
cd tasks/stage2/example
npm install
npm run build
npm run start
```

Все что должен сделать Express.js - отдать нужные файлы по запросу, см `server.js`
```javascript
app.use('/build', express.static(path.join(__dirname, 'build')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/img', express.static(path.join(__dirname, 'img')));

app.get(['/', '/counter', '/users', '/users-alt'], function (req, res) {
 res.sendFile('index.html', {root: __dirname})
});
``` 


При реализации выделения активного пункта меню в Example навешивается класс `active`, 
при этом сохраняется класс, который задан в jsx разметке (см NavLink.jsx)

Использовать npm пакет ["qs"](https://www.npmjs.com/package/qs) для чтения query параметра `?id=3`

Example содержит реализацию страницы "Пользователи Github" с помощью классового компонента и функционального. 
В обоих случаях текст поиска и отфильтрованные пользователи лежат в стейтах
 
При реализации списка пользователей в виде функционального компонента с хуками и хранением 
списка в стейте важно прочитать раздел документации
["пропуск эффектов"](https://ru.reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects)