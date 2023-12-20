<h1 align="center"><img src="./tests/svg/0.svg" width="96" /> <br />Suited Icons Man</h1>
<p align="center">
  <strong>Avatar Style for <a href="https://dicebear.com/">DiceBear</a></strong><br />
  <a href="">Suited Icons</a> by <a href="urielcuriel.dev">Uriel Curiel</a>
</p>


<p align="center">
  The avatar style is based on <a href="">Suited Icons</a> by
  <a href="urielcuriel.dev">Uriel Curiel</a>, licensed under
  <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>. / Remix of the original.
</p>
<p align="center">
  See <a href="https://dicebear.com/licenses">license overview</a> for more information.
</p>

----

## Usage

Install the DiceBear package and this avatar style with the following command:

```
npm install @dicebear/core dicebear-suited-icons-man --save
```

Now you can create your first avatar.

```js
import { createAvatar } from '@dicebear/core';
import style from 'dicebear-suited-icons-man';

let svg = createAvatar(style, {
  // ... options
});
```

## Options

All options from [DiceBear](https://dicebear.com/docs/options) and additionally the following:

### body

type: `array`  
allowed: `variant01`, `variant02`, `variant07`, `variant09`, `variant08`, `variant06`, `variant05`, `variant03`, `variant04`  
default: `['variant01', 'variant02', 'variant06', 'variant05', 'variant03', 'variant04']`


### bodyColor

type: `array`  
default: `['d3d0ce', '8a7a6f', '84a8b7', 'ffb500', 'ac3d3e', 'c68152', '80c79a', '9b93bb', 'e06e69']`


### face

type: `array`  
allowed: `variant01`, `variant02`  
default: `['variant01']`


### mustache

type: `array`  
allowed: `variant01`  
default: `['variant01']`


### mustacheProbability

type: `integer`  
minimum: `0`  
maximum: `100`  
default: `20`


### top

type: `array`  
allowed: `variant01`, `variant02`, `variant03`, `variant04`, `variant08`, `variant09`, `variant07`, `variant06`, `variant05`  
default: `['variant01', 'variant02', 'variant03', 'variant04', 'variant06', 'variant05']`


### topColor

type: `array`  
default: `['ce7d2f', 'd9d9d9', '803b37']`



## Build this package

```
npm run build
```

## Test this package

```
npm run test
```
