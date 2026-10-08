// Exercise 4.3 — D3 set up
// (1) The style and append code from 4.2 has been deleted.
// (2) .responsive-svg-container (in ../css/style.css) caps the width at 1200px and lets the
//     SVG inside it scale to whatever width is available.

// (3) Create the SVG object inside the div with the responsive class.
//     The viewBox defines a 1200 x 1600 coordinate system; the browser scales it to fit the page,
//     so the drawing keeps its proportions on any screen.
const svg = d3.select(".responsive-svg-container")
  .append("svg")
  .attr("viewBox", "0 0 1200 1600")
  .style("border", "1px solid black");

// (4) A test rectangle, to confirm the SVG is in place and the coordinate system works.
svg.append("rect")
  .attr("x", 10)
  .attr("y", 10)
  .attr("width", 414)
  .attr("height", 16)
  .attr("fill", "blue");
