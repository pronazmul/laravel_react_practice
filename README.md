<h1 align="center">React install in Laravel 8 Basic Setup Project</h1>

> Step 1 Installation Commands

```sh

$ composer create-project --prefer-dist laravel/laravel laravel_react_practice
$ npm install
$ npm install react
$ npm install react-dom
 
```

> Step 2 Route Setup, index.blade.php Setup, App.js Setup & Compile.

- Create a index.blade.php file in view & Set a cs exact route to it
- Setup index.blade.php
```sh 

<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Laravel | React</title>
        <link rel="stylesheet" href="{{asset('css/app.css')}}">
    </head>
    <body>
        <div id='root'></div>
        <script src="{{asset('js/app.js')}}"></script>
    </body>
</html>
```
- Setup resource>js>app.js {React.StrctMode}
```sh
import React from 'react'
import ReactDom from 'react-dom'

ReactDom.render(
    <React.StrictMode>
            <h1>Hello World I am from React World</h1>
    </React.StrictMode>,
document.getElementById('root')
)
```
- Setup resource>js>app.js {Functional Component}
```sh
    import React from 'react'
    import ReactDom from 'react-dom'
    function Practice(){
        return <h1>Hello World I am from React Functional Component</h1>
    }
    export default Practice
    ReactDom.render(<Practice/>,document.getElementById('root'))
```
- set webpack.mix.js

```sh 
mix.react('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        //
    ])
```
> Step 3 Compiling Assets & Laravel Server Start Command

```sh
$ npm run dev
$ php artisan serve

``` 
> Laravel React Folder Structure Overview

| Fild Name | Laravel | React|
| ------ | ------ | ------ |
| node_modules Dir | Yes |  Yes |
| Public Dir | Yes | Yes | 
| Src Dir | Resources>JS | Src |
| .gitignore File | Yes | Yes |
| .packege.json file | Yes | Yes |
| .package-lock.json File | Yes | Yes |
| readme.md File | Yes | Yes |

- *NOTE:*  App.js | App.test.js | index.js | serviceWorker.js | setupTests.js (Must Be Setup In Lravel-> Resource -> Js)
