# React Express Starter Kit
This starter kit is for front-end applications that use React but need additional backend support. This is for projects with heavy front-end application logic, and for developers who want to utilize a true component-driven development process.

Feel free to open a pull-request if you have an idea or improvement!

To view an example, check out the `examples` branch!

## Usage
__Note:__ You should use this starter kit with the [starter-kit](https://www.npmjs.com/package/starter-kit) utility.

```
./bin/bootstrap
./bin/dev-start
```

## Build
__Note:__ Build process target files overwrite dev process files for ease of use.

```
./bin/build
```

## Important Files
|File|What's Important About It?
|------|------|
|`app/components`|Where you should place the React components.|
|`app/sass/main.scss`|The main Sass file, where you should put your Sass imports.|
|`app/routes.jsx`|Where the react-router routes reside. You should add your routes here.|
|`server/html.js`|Where the main HTML source sent at the end of each request resides.|
|`server/server.js`|Where the express server resides.|

## Passing Data From Server to Client
Currently, the data you want passed to the server on express request should be passed in the `req.initialData` variable in your routes. Make sure to use the `next()` function in your routes if you want to render the React client.

## Features
- HTML5 (obviously)
- Support for IE9+
- [React](https://facebook.github.io/react/)
- [react-router](https://github.com/rackt/react-router)
- [Bower](http://bower.io)
- [Webpack](http://webpack.github.io/) (Development)
	- [Webpack development server](http://webpack.github.io/docs/webpack-dev-server.html)
	- [React Hot Loader](http://gaearon.github.io/react-hot-loader/)
	- [SASS Loader](https://github.com/jtangelder/sass-loader)
- Supervisor
- ExpressJS

## Optional Features
:shipit: We try to keep what we need to ship to a minimum. As such, here's a list of recommended libraries that you may need to install through Bower, NPM, or implement through a CDN.

As this particular starter-kit uses Webpack, it's __recommended__ that you install Javascript libraries through NPM whenever possible so that it can be easily required within modules. :money_with_wings:

- [Bourbon](http://bourbon.io/) `bower install bourbon --save`
- [Susy](http://susy.oddbird.net/) `bower install susy --save`
- [Neat](http://neat.bourbon.io/) `bower install neat --save`
- [jQuery](http://jquery.com/) `npm install jquery --save`
- [Radium](http://projects.formidablelabs.com/radium/) `npm install radium --save` (particularly for development purposes. Allows you to hot-load styles!)
- [FontAwesome](http://fortawesome.github.io/Font-Awesome/icons/) `bower install fontawesome --save`

### CDN Drop-Ins
**jQuery** (v. 2.1.3) IE >=9
```html
<script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
```
**jQuery** (v. 1.11.2)
```html
<script src="https://code.jquery.com/jquery-1.11.2.min.js"></script>
```
**FontAwesome** (v. 4.3.0)
```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
```
