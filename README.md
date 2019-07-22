```
  _____                     _       _           _         ____            _                 
 | ____|__ _ ___ _   _     / \   __| |_ __ ___ (_)_ __   / ___| _   _ ___| |_ ___ _ __ ___  
 |  _| / _` / __| | | |   / _ \ / _` | '_ ` _ \| | '_ \  \___ \| | | / __| __/ _ \ '_ ` _ \ 
 | |__| (_| \__ \ |_| |  / ___ \ (_| | | | | | | | | | |  ___) | |_| \__ \ ||  __/ | | | | |
 |_____\__,_|___/\__, | /_/   \_\__,_|_| |_| |_|_|_| |_| |____/ \__, |___/\__\___|_| |_| |_|
                 |___/                                          |___/                       
```

# easyadmin-core
* **Easy Admin System v4** - *CMS focused on easy use*
* Version: __4.0__
* Backend core with RESTful API using Node.js, Express, TypeScript, MySQL, Sequelize ORM
* Author & Maintainer: Jan Elznic – [Homepage](https://janelznic.cz) – [Github](https://github.com/janelznic) – [GitLab](https://gitlab.elznic.net/janelznic) – [LinkedIn](https://linkedin.com/in/janelznic/)


## Table of Contents
- [Links](#Links)
- [Documentation](#Documentation)
- [Features](#Features)
- [Getting Started](#Getting-Started)
  - [Prerequisites](#Prerequisites)
  - [Installation](#Installation)
  - [Directory Structure](#Directory-Structure)
  - [NPM Scripts](#NPM-Scripts)
- [Development](#Development)
  - [Recommendations](#Recommendations)
  - [Contributing](#Contributing)
    - [Git Branches](#Git-Branches)
  - [Development Environment](#Development-Environment)
- [License](#License)


## Links
* [This project Git repository](https://github.com/janelznic/easyadmin-core)
* [Web User Interface Git repository](https://github.com/janelznic/easyadmin-ui)


## Documentation
- [Users](doc/users.md)


## Features
- REST API
- MVC model (model, view, controller, services)
- [HTTP Bearer authentication](https://docs.nestjs.com/techniques/authentication) strategy authenticates users using a bearer token
- [TypeScript](https://www.typescriptlang.org/) as Language
- Framework: [NestJS](https://nestjs.com/)
- Database: [MySQL server 8.0](https://dev.mysql.com/doc/refman/8.0/en/introduction.html)
- [Sequelize ORM](http://docs.sequelizejs.com/) (object-relational mapping)
- Linting and formatting code using [TSLint](https://palantir.github.io/tslint/) & [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/) for maintain consistent coding style
- [Jest](https://jestjs.io/) unit tests framework
- Using the last ECMAScript 8 (2017) features as `async-await`
- [nodemon](https://nodemon.io/) build tool with monitoring for any changes in source code


## Getting Started

### Prerequisites

* You need to install [MySQL server](https://dev.mysql.com/doc/refman/8.0/en/installing.html) either on your local machine.
* Create manually a new database (preferably with charset `utf8mb4` and collation `utf8mb4_unicode_ci`).


### Installation

1. Clone git repository:

   `git clone git@github.com:janelznic/easyadmin-core.git`


2. Go to repository directory *easyadmin-core*:

   `cd easyadmin-core`


3. Prepare config file and import MySQL database files

   `npm run prepare`


4. Install all the module dependencies:

   `npm install` or `npm i`


### Directory structure
```
── LICENSE
├── README.md
├── bin
|  ├── _get_source_dir.sh
|  ├── backup_db.sh
|  └── install.sh
├── config
├── db
|  └── mysql
|     └── install
|        ├── data.sql
|        └── structure.sql
├── doc
|  └── users.md
├── nodemon-debug.json
├── nodemon.json
├── package-lock.json
├── package.json
├── src
|  ├── app.module.ts
|  ├── config.ts
|  ├── consts
|  |  └── app.config.ts
|  ├── db
|  |  └── mysql
|  |     └── mysql.ts
|  ├── main.hmr.ts
|  ├── main.ts
├── test
|  ├── app.e2e-spec.ts
|  └── jest-e2e.json
├── tsconfig.json
├── tsconfig.spec.json
├── tslint.json
└── webpack.config.js
```


## NPM Scripts
- `backup:db` - Backup database structure and data into the file
- `build` - Transpile TypeScript to ES2017
- `dev` - Run the development server without transpile to ES2017
- `format` - Prettier code formatter
- `lint` - Lint your TS code
- `prepare` - Prepare config file and import MySQL database files
- `reinstall` - Reinstall
- `start` - Run the transpiled application
- `structure` - List contents of directories in tree-like format
- `test` - Run unit tests
- `test:cov` - Show unit tests coverage
- `test:e2e` - Run e2e tests
- `test:watch` - Watch all files and run unit tests when changes occured
- `uninstall` - Uninstall (only node_modules, not MySQL DB)



## Development

### Recommendations
* **.editorconfig** plug-in compatible editor ([http://editorconfig.org](http://editorconfig.org))

### Contributing
Please use `npm run lint` command before every commit and fix all your errors and warnings!


#### Git Branches
* __master__ - Production, __always stable__
* __test__ - Test (to be merged with *develop* branch), RC versions only
* __develop__ - Development branch (always make feature branches from this)
* __hotfix/*__ - Hotfixes (to be merged with *develop* and *test* branch)
* __feature/*__ - Feature branches (to be merged with *develop* branch only)

__IMPORTANT NOTE:__ Always make pull requests only from your feature branch to *develop* branch, ***NOT*** to *master* branch!


### Development Environment
You can use built-in development server that will monitor for any changes in your source and automatically restart your server with monitoring for any changes in source code.

1. Start development server with `npm run dev`
2. Go to: `http://localhost:3000/users`


## License

MIT © Jan Elznic – [Homepage](https://janelznic.cz) – [Github](https://github.com/janelznic) – [GitLab](https://gitlab.elznic.net/janelznic) – [LinkedIn](https://linkedin.com/in/janelznic/)
