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

Использовать npm пакет ["qs"](https://www.npmjs.com/package/qs) для чтения query параметра `?id=3`

При реализации списка пользователей в виде функционального компонента с хуками и хранением 
списка в стейте нужно прочитать раздел документации
["пропуск эффектов"](https://ru.reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects)