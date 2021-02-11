# TOTVS Task List

[![web-app](https://img.shields.io/badge/demo-diegoavieira.github.io%2Ftotvs--task--list-yellowgreen)](https://diegoavieira.github.io/totvs-task-list)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.4.

## Requirements

```
npm install -g @angular/cli
npm install -g json-server
```

## Installation

```
npm install
```

## Development

Run the fake REST API server on a terminal:

```
json-server --delay 500 db.json
```

And in another terminal run:

```
npm run build-libs
npm run web-app-serve
```

The app will run on `http://localhost:4200`.

## Unit Tests

```
npm run build-libs
npm run test-all
```

## Build

```
npm run build-libs
npm run web-app-build
```
