# marpit-with-revealjs-sample

Currently, **_Marpit_** has not fully supported **_Reveal.js_**. \
However, some functions are able to be implemented by writing **_Html_** in the
**_Markdown_** file. \
Indeed, this way sounds weird, but it works.

> [!WARNING] > [bg] does not work properly with **_MarpIt_** + **_Reveal.js_**

> [!NOTE] > `transition` in slides should be used **_Marpit_** directives, instead of `data-transition` in **_Reveal.js_**

## _Disclaimer_

And [this sample](https://github.com/pi2pie/marpit-with-revealjs-sample) modified by **pi2pie**.
This is a side project for experiencing how to let them work together and also how to make slides more efficiently.


---

## Usage

First of all, clone this repo.

```sh
git clone https://github.com/pi2pie/marpit-with-revealjs-sample.git
```

And then install packages.

```sh
yarn install

or

npm install
```

And the slides contents could be changed. \
Get into `src/contents/slides.md` \
Modify this file, write the contents what you like.

Preview the slides.

```sh
npm run start
```

Build the slides in `dist/*`

```sh
npm run build
```

> [!WARNING] > In `slides.md`, if you change `styles` instead of contents, run `npm run build` first. 
> For this, the result would be the correct `styles` you set in your `slides.md`.
> `styles`: your css class name or inline style.