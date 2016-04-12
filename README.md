# React con Redux Boilerplate

A boilerplate client app built with React and Redux to be hosted on Surge.sh

## Features

- [**react-transform-hmr**](https://github.com/gaearon/react-transform-hmr)

- [**Redux**](https://github.com/rackt/redux)

- [**Babel**](http://babeljs.io/)

- [**PostCSS**](https://github.com/postcss/postcss)

- [**rrtr**](https://github.com/taion/rrtr)

- [**Surge.sh**](https://surge.sh/)

- [**BaseCSS**](http://www.basscss.com/)


## Getting started

- Run `npm install` to install the dependencies.

- Run `npm start` to start the local web server.

- Go to `http://localhost:3000` to see the app running.

## Building & Deploying

- Run `npm run build` to compile all the files in a `build` folder.

- Run `npm run deploy` to upload `build` directory to Surge.sh.


## CSS

The css files in `css` directory and subdirectories are transpliles into (`main.css`) with PostCSS.

## JS

All `import` & `require` files will be built at runtime to `build/bundle.js`. Webpack automatically optimizes JavaScript with `UglifyJS`.

## Testing

Run `npm test` for unit tests.

### Images to HTML

Add the images to HTML files

```HTML
<!-- Normal Image -->
<img src="img/yourimg.png" />
<!-- Meta tags -->
<meta property="og:image" content="img/yourimg.png" />
<!-- ... -->
```
Also import images with webpack to include in the build

```JavaScript
import 'file?name=[name].[ext]!../img/an_img.png';
```

## License

This project is licensed under the MIT license, Copyright (c) 2016 Andrew Burnes. For more information see `LICENSE.md`.
