import { Marpit, Element } from "@marp-team/marpit";
import autoAnimate from "./plugins/auto-animate";
import transition from "./plugins/transition";
import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm";
import Search from "reveal.js/plugin/search/search.esm";
import Highlight from "reveal.js/plugin/highlight/highlight.esm";
import "reveal.js/dist/reveal.css";
import "./css/styles.css";
import HTMLStr from "./contents/slides.md";

const marpit = new Marpit({
  container: [
    new Element("div", { class: "reveal" }),
    new Element("div", { class: "slides" }),
  ],
});

// Marpit plugins for reveal.js
marpit.use(autoAnimate).use(transition);

const markdown = HTMLStr.trim();

const { html } = marpit.render(markdown);
document.body.innerHTML =
  html +
  `
<!-- promo banner -->

<div class="promo-banner">
<a class="promo-link" href="/" rel="noopener noreferrer">
<img src="./assets/DocIconP.svg" alt=""></a>
</div>
`;

// Initialize reveal.js
Reveal.initialize({
  width: 1280,
  height: 720,

  // Factor of the display size that should remain empty around
  // the content
  margin: 0,

  // Bounds for smallest/largest possible scale to apply to content
  minScale: 0.01,
  maxScale: 1.25,

  // Use 1 based indexing for # links to match slide number (default is zero
  // based)
  hashOneBasedIndex: true,
  
  // Add the current slide number to the URL hash so that reloading the
  // page/copying the URL will return you to the same slide
  hash: true, 

  plugins: [Markdown, Search, Highlight] });