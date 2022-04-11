---
# reveal.js specific directives
transition: slide
---

# It's a simple demo

---

<!--_transition: zoom -->
## [Marpit] + [reveal.js]

[![h:100](https://marpit.marp.app/marpit.png)][marpit]
[![h:100](https://revealjs.com/images/logo/reveal-black-text-sticker.png)][reveal.js]

See [the source code](https://codesandbox.io/s/nw80vrxvpp?file=/src/index.js) on CodeSandbox.

[marpit]: https://marpit.marp.app/
[reveal.js]: https://revealjs.com/

---

<section data-background-video="https://static.slid.es/site/homepage/v1/homepage-video-editor.mp4" 
          data-background-video-loop data-background-video-muted>
</section>

---

<section>
    <p class="fragment">Fade in</p>
    <p class="fragment fade-out">Fade out</p>
    <p class="fragment highlight-red">Highlight red</p>
    <p class="fragment fade-in-then-out">Fade in, then out</p>
    <p class="fragment fade-up">Slide up while fading in</p>
</section>

---

<section data-markdown>
| Examples     | Command       |
|:-------------|:--------------|
| from 5 to 20 | `:5,20s/^/#`  |
| revert       | `:5,20s/^#//` |
</section>

---

<!--
autoAnimate: true
transition: slide
-->

## _Disclaimer_

---

## _Disclaimer_

**[Marpit] is not only for [Marp](https://marp.app/)**. Please notice currently [Marpit] has not supported [reveal.js] offically.