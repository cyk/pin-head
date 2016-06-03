<h1 align="center">
  <a href="http://pin-head.cyk.im/"><img src="https://cloud.githubusercontent.com/assets/423755/15715762/8b4d3824-27d4-11e6-9ca7-9a4e19aa9b74.png" alt="PinHead"></a>
  <br>
  PinHead
  <br>
  <br>
</h1>

<h4 align="center">Repin based on your face's emotion captured by webcam</h4>

<p align="center">
 <a href="https://github.com/mgechev/angular2-style-guide"><img src="https://mgechev.github.io/angular2-style-guide/images/badge.svg" alt="Angular 2 Style Guide"></a>
 <a href="https://travis-ci.org/cyk/pin-head"><img src="https://travis-ci.org/cyk/pin-head.svg?branch=master" alt="Build Status"></a>
 <a href="http://opensource.org/licenses/MIT"><img src="http://img.shields.io/badge/license-MIT-brightgreen.svg" alt="MIT license"></a>
 <a href="https://david-dm.org/cyk/pin-head"><img src="https://david-dm.org/cyk/pin-head.svg" alt="Dependency Status"></a>
 <a href="https://david-dm.org/cyk/pin-head#info=devDependencies"><img src="https://david-dm.org/cyk/pin-head/dev-status.svg" alt="devDependency Status"></a>
<a href="#technologies"><img src="https://cloud.githubusercontent.com/assets/423755/15264045/04adfb00-1924-11e6-8fd2-208c7e5d2ffc.png"></a>
</p>

## Introduction

**PinHead** is an Angular2 app based on [mgechev's seed project](https://github.com/mgechev/angular2-seed) that repins based on your face's emotion captured by webcam and analyzed by [Google's Vision API](https://cloud.google.com/vision/). This project is my active exploration of AngularJS and RxJS.

A little while ago I set out on a journey learning about this [extremely sweet and clever kitten](http://whichcatisyourjavascriptframework.com/#angular2) that is Angular 2. Not too long ago Google released its Vision API sentiment analysis. I wanted to focus on Angular 2 with RxJS, so a server-less backend was a convenient way to avoid scope creep. I took a brief detour to set up a rudimentary server-less API endpoint that analyzes an image for facial sentiment. For more details on this, check out the gist on [Face Sentiments with Google Vision API via AWS API Gateway and Lambda](https://gist.github.com/cyk/8ec6481d3dcbe10376f8).

:warning: **Work in progress**  Though the basic functionality is implemented, [there is still much to do](https://github.com/cyk/pin-head/issues) (and for me to learn). Pull requests are welcome and appreciated! 

You can check out the latest version by visiting [pin-head.cyk.im](http://pin-head.cyk.im) &mdash; it requires camera access and a Pinterest account with boards (owned and followed).

### How does it work?

After choosing a board to pin from and a board to pin to, a pin will be presented every few seconds. Then, behind the scenes...

1. A snapshot from your browser camera is taken
2. The snapshot is encoded and sent off to a sentiment endpoint
3. The Google Vision API then analyzes the image for faces and their sentiments
4. If the likeliest sentiment is JOY then the related pin in pinned to you board.

Obviously, it works best with kittens and puppies. :wink:

## Screenshot

<p align="center">
	<img src="http://i.imgur.com/QMpj44K.gif" alt="Demo">
</p>

## How to Contribute

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

Pinhead icon by [Icons8](https://icons8.com)

## License

MIT
