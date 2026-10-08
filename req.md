# Week 4 Lab — requirements

From *COS30045 W4 Class* (Exercises 4.1–4.6). Each item links to where it is done.

## 4.1 SVGs

- [x] Build an SVG house and garden (initial version) — [`4.1-svg-house/initial.html`](4.1-svg-house/initial.html)
- [x] Include examples of:
  - [x] Shapes (line, rectangle, circle, ellipse) — [`house.html`](4.1-svg-house/house.html)
  - [x] Paths — roof, hills, smoke, garden path, birds, mailbox arc
  - [x] Text — "Home sweet home", house number
  - [x] Grouping and transformations — `<g>` and `<use>` with `translate`, `scale`, `rotate`
  - [x] Styling — CSS classes, gradients, opacity, `currentColor`
- [x] Add or change shapes so the house differs from the initial code — see "What changed" on `house.html`
- [x] Screenshot of the initial code and the completed drawing — [`initial-code.png`](4.1-svg-house/screenshots/initial-code.png), [`initial.png`](4.1-svg-house/screenshots/initial.png), [`customised.png`](4.1-svg-house/screenshots/customised.png)
- [x] Annotate screenshots with coordinate points for a sample of shapes — [`customised-annotated.png`](4.1-svg-house/screenshots/customised-annotated.png) (or press **Show coordinates** on `house.html`)

## 4.2 D3: manipulate and add elements

- [x] Add a new JS file for D3 code — [`4.2-d3-elements/js/main.js`](4.2-d3-elements/js/main.js)
- [x] Apply style to HTML elements using D3 — `d3.select("h1").style(...)`
- [x] Append an element using D3 (e.g. `p`) — four appended paragraphs
- [x] Append a shape using D3 — SVG with circles, a rectangle, a line and text

## 4.3 D3 set up

- [x] Delete the style and append code from 4.2 — [`4.3-d3-setup/js/main.js`](4.3-d3-setup/js/main.js)
- [x] Add a class to style a responsive container for SVG elements — `.responsive-svg-container` in [`css/style.css`](css/style.css)
- [x] Create the SVG object in the div with the responsive class — `viewBox="0 0 1200 1600"`
- [x] Add a test SVG rectangle

## 4.4 Load data from CSV

- [x] Use a row conversion function with `d3.csv()` — [`4.4-load-csv/js/main.js`](4.4-load-csv/js/main.js)
- [x] Check the browser console for the JavaScript objects created from the data set — `console.log(data)`, `console.table(data)`
- [x] Use D3 to find information about the data set — `d3.max`, `d3.min`, `d3.extent`, `d3.sum`, `d3.mean`, `d3.median`, sort
- [x] Data has a category column — `brand`, from the KNIME exercise ([`data/tvBrandCount.csv`](data/tvBrandCount.csv))

## 4.5 D3 binding and drawing with data

- [x] Bind the data to DOM elements — `selectAll("rect").data(data).join("rect")` in [`4.5-data-binding/js/main.js`](4.5-data-binding/js/main.js)
- [x] Add attributes to rectangles to reflect the data — `width = count`
- [x] Space out the bars — `y = (barHeight + 5) * i`

## 4.6 D3 scaling charts

- [x] Linear scale for count data — `d3.scaleLinear()` in [`4.6-scales/js/main.js`](4.6-scales/js/main.js)
- [x] Band scale for category data — `d3.scaleBand()`
- [x] Padding — `.padding(0.2)`
- [x] Labels (from lecture W4.4) — brand and value labels in grouped `<g>` elements
