# marpit-with-revealjs-sample

Currently, **_Marpit_** has not fully supported **_Reveal.js_**. \
However, some functions are able to be implemented by writing **_Html_** in the
**_Markdown_** file. \
Yep, this way sounds werid, but it works.

> [!WARNING] > [bg] does not work properly with **_MarpIt_** + **_Reveal.js_**

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