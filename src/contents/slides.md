---
# reveal.js specific directives
transition: slide
---

# It's a simple demo

Experience how [Marpit] works with [reveal.js]

---

<!--_class: danger big-->
This slide's screen size is for desktop or tablet.

---

<!--_transition: zoom -->
## [Marpit] + [reveal.js]

[![h:100](https://marpit.marp.app/marpit.png)][marpit]
[![h:100](https://revealjs.com/images/logo/reveal-black-text-sticker.png)][reveal.js]

See [the source code](https://codesandbox.io/s/nw80vrxvpp?file=/src/index.js) on CodeSandbox.

[marpit]: https://marpit.marp.app/
[reveal.js]: https://revealjs.com/

---

<!--_transition: fade -->

And [this sample](https://github.com/pi2pie/marpit-with-revealjs-sample) modified by **pi2pie**.  

---
### Check out image syntax

```markdown
![bg vertical](url)
![bg](url)

```
Actually the `[bg]` image syntax does not work properly. \
Therefore, back to write `html`. \
Such as …

```Html
<section>
<img src="url">
</section>

```

---

<section>
<div class="layout-horizon">
<img class="col-33" src="https://fakeimg.pl/450x450/0288d1/fff/?text=A">
<img class="col-33" src="https://fakeimg.pl/450x450/02669d/fff/?text=B">
<img class="col-33" src="https://fakeimg.pl/450x450/67b8e3/fff/?text=C">
</div>
</section>

---

<section>
<div class="ph2">
<div class="ba bw3 bRad4">
<div class="layout-vertical items-center m-0 pv5">
<img src="https://fakeimg.pl/1200x96/0288d1/fff/?text=A">
<img src="https://fakeimg.pl/1200x96/02669d/fff/?text=B">
<img src="https://fakeimg.pl/1200x96/67b8e3/fff/?text=C">
</div>
</div>
</div>
</section>

---

<!--_transition: fade -->

<section data-background-color="aquamarine">
<div class="layout-horizon ph4" style="gap: 1em;">
<div class="col-50">
<img src="https://fakeimg.pl/800x600/0288d1/fff/?text=A">
</div>
<div class="col-50">
<h2 class="r-fit-text">FIT TEXT</h2>
<h2 class="r-fit-text">CAN BE USED FOR MULTIPLE HEADLINES</h2>
</div>

</section>

---

<section>
  <div class="r-stack">
  <img class="fragment fade-out" data-fragment-index="0" src="https://placekitten.com/450/300" width="450" height="300">
  <img class="fragment current-visible" data-fragment-index="0" src="https://placekitten.com/300/450" width="300" height="450">
  <img class="fragment" src="https://placekitten.com/400/400" width="400" height="400">
  </div>
</section>

---

<section data-background-video="https://static.slid.es/site/homepage/v1/homepage-video-editor.mp4" 
          data-background-video-loop data-background-video-muted>
</section>


---

<section>
  <div class="mb5">
    <h2 class="ttn">Fragments</h2>
    <br>
    <p class="fragment">Fade in</p>
    <p class="fragment fade-out">Fade out</p>
    <p class="fragment highlight-red">Highlight red</p>
    <p class="fragment fade-in-then-out">Fade in, then out</p>
    <p class="fragment fade-up">Slide up while fading in</p>
  </div>
</section>

---

<section>
<div class="layout-vertical mb4">
<h2 class="ttn pr5">Markdown Table</h2>
<div data-markdown>
| Examples     | Command       |
|:-------------|:--------------|
| from 5 to 20 | `:5,20s/^/#`  |
| revert       | `:5,20s/^#//` |
</div>
</div>
</section>

---

<section data-auto-animate>

<div class="absolute push-15">
<div class="col-25 pa5 ba b-c-info bw3">
<p>BOX</p>
</div>
<p class="smaller mr7">push-15</p>
<div class="mt4">
<pre>
<code data-line-numbers="1">
  <div class="absolute push-15">
     <div class="col-25 pa5 ba b-c-info bw3">
     <p>BOX</p>
     </div>
  </div>
</code>
</pre>
</div>
</div>

</section>

---

<section data-auto-animate>

<div class="absolute push-25">
<div class="col-25 pa5 ba b-c-info bw3">
<p>BOX</p>
</div>
<p class="smaller mr7 danger em strong">push-25</p>
<div class="mt4">
<pre>
<code data-line-numbers="2">
  <div class="absolute push-25">
     <div class="col-25 pa5 ba b-c-info bw3">
     <p>BOX</p>
     </div>
  </div>
</code>
</pre>
</div>
</div>

</section>

---

<section>
<div class="layout-vertical mb6">
<div class="layout-horizon ph4 ml4" style="gap: 1em;">
 <div class="col-60">
  <p class="noto-sans-tc tl fw03">
    北冥有魚，其名為鯤。鯤之大，不知其幾千里也。化而為鳥，其名為鵬。鵬之背，不知其幾千里也；怒而飛，其翼若垂天之雲。是鳥也，海運則將徙於南冥。南冥者，天池也。
  </p>
 </div>
<div style="max-height: 560px;">
  <p class="noto-serif-tc fw07 wr-vr-R tl">
    北冥有魚，其名為鯤。鯤之大，不知其幾千里也。化而為鳥，其名為鵬。鵬之背，不知其幾千里也；怒而飛，其翼若垂天之雲。是鳥也，海運則將徙於南冥。南冥者，天池也。
  </p>
 </div>
</div>

<div class="layout-horizon justify-around ph6 bt bw2">

 <div class="smaller tl fw02">
  <p> < writing-mode: horizontal-tb</p>
  <p> < Default</p>
 </div>
 <div class="smaller tr fw02">
  <p>writing-mode: vertical-rl > </p>
 </div>

</div>


</div>
</section>

---

<!--
autoAnimate: true
transition: slide
-->

## _Disclaimer_

---
## _Disclaimer_

**[Marpit] is not only for [Marp](https://marp.app/)**. \
Please notice that, currently [Marpit] has not supported [reveal.js] offically.

---

<section data-auto-animate>
<h2>
<em>Disclaimer</em>
</h2>
<div class="fragment fade-up flex item-center col-80 pl6 tl">
<div data-markdown>
And [this sample](https://github.com/pi2pie/marpit-with-revealjs-sample) modified by **pi2pie**.
This is a side project for experiencing how to let them work together and also how to make slides more efficiently.
</div>
</div>
</section>