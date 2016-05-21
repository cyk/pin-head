<h1 align="center">
  <a href="https://pin-head.surge.sh/"><img src="https://cloud.githubusercontent.com/assets/423755/15446269/6aee257e-1ecf-11e6-85a2-28c700964fcc.png" alt="PinHead"></a>
  <br>
  PinHead
  <br>
  <br>
</h1>

<h4 align="center">Pin with face sentiments!</h4>

<p align="center">
 <a href="https://github.com/mgechev/angular2-style-guide"><img src="https://mgechev.github.io/angular2-style-guide/images/badge.svg" alt="Angular 2 Style Guide"></a>
 <a href="https://travis-ci.org/cyk/pin-head"><img src="https://travis-ci.org/cyk/pin-head.svg?branch=master" alt="Build Status"></a>
 <a href="http://opensource.org/licenses/MIT"><img src="http://img.shields.io/badge/license-MIT-brightgreen.svg" alt="MIT license"></a>
 <a href="https://david-dm.org/cyk/pin-head"><img src="https://david-dm.org/cyk/pin-head.svg" alt="Dependency Status"></a>
 <a href="https://david-dm.org/cyk/pin-head#info=devDependencies"><img src="https://david-dm.org/cyk/pin-head/dev-status.svg" alt="devDependency Status"></a>
<a href="#technologies"><img src="https://cloud.githubusercontent.com/assets/423755/15264045/04adfb00-1924-11e6-8fd2-208c7e5d2ffc.png"></a>
</p>

## Install

**PinHead** is still under active development. You can check out the latest version by visiting [pin-head.cyk.im](http://pin-head.cyk.im).

## Screenshot

<p align="center">
	<img src="http://i.imgur.com/QMpj44K.gif" alt="Demo">
</p>

## How to Contribute

:warning: **Work in progress.** Though the basic functionality is implemented, [there is still much to do](https://github.com/cyk/pin-head/issues) (and for me to learn). Pull requests are welcome and appreciated!

### Prerequisites

You'll need a [Pinterest App](https://developers.pinterest.com/apps/) and the [Google Vision API via AWS API Gateway and Lambda](https://gist.github.com/cyk/8ec6481d3dcbe10376f8). Once you have a Pinterest app id and a sentiments endpoint, update the [project.config.ts](https://github.com/cyk/pin-head/blob/master/tools/config/project.config.ts) file.

### Install dependencies

```
$ npm install
```
### Run app

```
$ npm start
```

Please refer to the [mgechev/angular2-seed](http://github.com/mgechev/angular2-seed) documentation for additional setup and usage instructions.

## Technologies

Frameworks, libraries, and web APIs used:

- [Angular 2](https://angular.io/) ([mgechev/angular2-seed](http://github.com/mgechev/angular2-seed))
- [Angular 2 Material](https://github.com/angular/material2)
- [RxJS 5](https://github.com/ReactiveX/rxjs)
- [Pinterest API](https://developers.pinterest.com/docs/getting-started/introduction/)
- [Google Cloud Vision API](https://cloud.google.com/vision/) (with a bit of AWS [API Gateway](https://aws.amazon.com/api-gateway/) and [Lambda](https://aws.amazon.com/lambda/))


## License

MIT
