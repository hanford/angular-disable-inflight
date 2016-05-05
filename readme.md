## angular-disable-inflight

[![NPM][notify-icon]][notify-url]

#### Installation  
Installation is super easy, simply add the dependencies to your angular module, and inject ```angular-disable-inflight``` in your angular module.

```
# use npm
$ npm install angular-disable-inflight --save
```

Add angular-disable-inflight to your dependencies

```
// app.js
angular
  .module('yourApp', [
    require('angular-disable-inflight')
  ])
```

```
// template.html
<button disable-inflight ng-click="..">Submit</button>
```  
Thats it! The element will be ``disabled="disabled"`` while requests are pending

[notify-icon]: https://nodei.co/npm/angular-disable-inflight.png?downloads=true
[notify-url]: https://npmjs.org/package/angular-notify
