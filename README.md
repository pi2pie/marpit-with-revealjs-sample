# marpit-with-revealjs-sample

Currently, **_Marpit_** has not fully supported **_Reveal.js_**. \
However, some functions are able to be implemented by writing **_Html_** in the
**_Markdown_** file. \
Indeed, this way sounds weird, but it works.

> ⚠︎ > [bg] does not work properly with **_MarpIt_** + **_Reveal.js_**

> ⚡︎ > `transition` in slides should be used **_Marpit_** directives, instead of `data-transition` in **_Reveal.js_**

## _Disclaimer_

And [this sample](https://github.com/pi2pie/marpit-with-revealjs-sample) modified by **pi2pie**.
This is a side project for experiencing how to let them work together and also how to make slides more efficiently.

---

## Usage

First, clone this repo or **[use this template](https://github.com/pi2pie/marpit-with-revealjs-sample/generate)**

```sh
git clone https://github.com/pi2pie/marpit-with-revealjs-sample.git
```

And remove the `.git`, and create your own.

```sh
$ cd marpit-with-revealjs-sample
$ rm -rf .git
$ git init
$ git add .
$ git commit -m 'init' -a
```

And then install packages.

```sh
$ yarn install

or

$ npm install
```

And the slides contents could be changed. \
Get into `src/contents/slides.md` \
Modify this file, write the contents what you like.

Preview the slides.

```sh
$ npm run start
```

Build the slides in `dist/*`

```sh
$ npm run build
```

> [!WARNING] > In `slides.md`, if you change `styles` instead of contents, run `npm run build` first.
> For this, the result would be the correct `styles` you set in your `slides.md`.
>
> `styles`: your css class name or inline style.

### Combined

```sh
$ npm run pack
```

This command would run `build` and `start`.

---

## Structure

```ini
./src
├── app.js
├── assets
│   └── DocIconP.svg
├── contents
│   └── slides.md
├── css
│   ├── fonts.css
│   ├── light.css
│   ├── styles.css
│   └── utils-css /
├── index.html
└── plugins
    ├── auto-animate.js
    └── transition.js
```

This is the files structure. \
`assets/` directory is for media files, put your images or videos here.

```js
// src/app.js
<!-- promo banner -->

<div class="promo-banner">
<a class="promo-link" href="/" rel="noopener noreferrer">
<img src="./assets/DocIconP.svg" alt=""></a>
</div>
```

And also, in `app.js`, the `promo-banner`use `./assets/DocIconP.svg` as **Logo**. \
This one could be changed, it is just like a placeholder.

`css`:
There is the `utility-first css` for the design concept here.

