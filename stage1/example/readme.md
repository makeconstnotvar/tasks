### Пример решения задания 1
C помощью [git](https://git-scm.com/) забрать весь репозиторий себе 
```
git clone https://github.com/makeconstnotvar/tasks
```

Перейти в директорию `/tasks/stage1/example`, установить npm пакеты, собрать приложение, запустить сервер `node-static`  

```
cd tasks/stage1/example
npm install
npm run build
npm run start
```

Example содержит страницу page4.js с примером использования компонента 
`Worker` и css вынесенные в отдельный файл `workers.css`