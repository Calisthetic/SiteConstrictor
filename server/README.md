## Ctrl + Shift + V <- preview
# Client
```
npm ini -y
npm i express
npm i express pg
npm -D nodemon
npm i react-router-dom
```

# Server
### check version
```bash
psql --version
```
### enter as user postgres (1234)
```bash
psql -U postgres
```
### all databases
```bash
\l
```
### rus code page
```bash
psql \! chcp 1251
```
### connect to db
```bash
\connect site_constructor;
```
### tables
```bash
\dt
```

# Git
Так надо:
```bash
git add .
```

Коммит:
```bash
git commit -m ""
```

Указать версию сборки:
```bash
git tag v1.0.3
```

Отправить новую версию:
```bash
git push
```

Отправить новый тег:
```bash
git push origin --tags
```


