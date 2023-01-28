# GitHub

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
git tag v1.0.2
```

Отправить новую версию:
```bash
git push
```

Отправить новый тег:
```bash
git push origin --tags
```

# Deploy
#### Project [site-constructor](https://site-constructor-flame.vercel.app/ "Vercel") on hosting
#### Hosting [configuration](https://vercel.com/kalashvovan/site-constructor)

## Development

#### All css [styles](https://htmlweb.ru/css/styles1.php)
#### Display: [flex](https://habr.com/ru/post/467049/)
#### Box-shadow [generator](https://active-vision.ru/icon/box-shadow/)
#### [Intup](https://developer.mozilla.org/ru/docs/Web/HTML/Element/Input) tag
#### How to [README.md](https://texterra.ru/blog/ischerpyvayushchaya-shpargalka-po-sintaksisu-razmetki-markdown-na-zametku-avtoram-veb-razrabotchikam.html "MD syntax")
#### npm [commands](https://gist.github.com/devrafalko/c0b1fca75732fcbf001f28e6d2f08c70)

# React App
```
npm start - Runs the app in the development mode. Open http://localhost:3000 to view it in your browser.

npm run build - Builds the app for production to the build folder.
```

CREATE TABLE users
(
    Id SERIAL PRIMARY KEY,
    Name CHARACTER VARYING(20),
    Password CHARACTER VARYING(20),
    Email CHARACTER VARYING(30),
    Age INTEGER
);
CREATE TABLE projects
(
    Id SERIAL PRIMARY KEY,
    UserId INTEGER REFERENCES users (Id),
);
CREATE TABLE blocks
(
    Id SERIAL PRIMARY KEY,
    ProjectId INTEGER REFERENCES projects (Id),
);
CREATE TABLE shadows
(
    Id SERIAL PRIMARY KEY,
    BlockId INTEGER REFERENCES blocks (Id),
    MarginX INTEGER,
    MarginY INTEGER,
    Blur INTEGER,
    Spread INTEGER,
    Opacity REAL,
    Inner BOOLEAN,
    COLOR CHARACTER (7),
);
