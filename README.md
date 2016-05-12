PinHead
=======

[![Angular 2 Style Guide](https://mgechev.github.io/angular2-style-guide/images/badge.svg)](https://github.com/mgechev/angular2-style-guide)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
[![Dependency Status](https://david-dm.org/cyk/pin-head.svg)](https://david-dm.org/cyk/pin-head)
[![devDependency Status](https://david-dm.org/cyk/pin-head/dev-status.svg)](https://david-dm.org/cyk/pin-head#info=devDependencies)

An example Angular2 application that enables pinning by facial expression.

![Tech](http://i.imgur.com/fgQnvt5.png)

![Demo](http://i.imgur.com/QMpj44K.gif)

Frameworks, libraries, and web APIs used:

- [Angular 2](https://angular.io/) ([mgechev/angular2-seed](http://github.com/mgechev/angular2-seed))
- [Angular 2 Material](https://github.com/angular/material2)
- [RxJS 5](https://github.com/ReactiveX/rxjs)
- [Pinterest API](https://developers.pinterest.com/docs/getting-started/introduction/)
- [Google Cloud Vision API](https://cloud.google.com/vision/) (with a bit of AWS [API Gateway](https://aws.amazon.com/api-gateway/) and [Lambda](https://aws.amazon.com/lambda/))

:warning: **Work in progress.** Though the basic functionality is implemented, [there is still much to do](https://github.com/cyk/pin-head/issues) (and for me to learn). Pull requests are welcome and appreciated!

## Setup

You'll need a [Pinterest App](https://developers.pinterest.com/apps/) and the [Google Vision API via AWS API Gateway and Lambda](https://gist.github.com/cyk/8ec6481d3dcbe10376f8). Once you have a Pinterest app id and a sentiments endpoint, update the [project.config.ts](https://github.com/cyk/pin-head/blob/master/tools/config/project.config.ts) file.

Please refer to the [mgechev/angular2-seed](http://github.com/mgechev/angular2-seed) documentation for additional setup and usage instructions.

## License

MIT
