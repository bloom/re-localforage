# re-localforage

```
yarn add localforage
yarn add re-localforage
```

Then add

```
  "bs-dependencies": ["re-localforage"]
```

to your bsconfig.json.

Then you can use it like this (assuming you have some webpack setup that can import Elm files like [elm-webpack-loader](https://github.com/elm-community/elm-webpack-loader)):

```reason
let lf = LocalForage.instance;
/* This'll be a promise of unit. */
let setItemPromise = lf##setItem("user", someJson)
/* This'll be a promise with some json in it.*/
let getItemPromise = lf##getItem("user")
```
