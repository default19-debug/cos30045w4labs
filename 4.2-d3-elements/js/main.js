// Exercise 4.2 — Manipulate and add elements to a webpage with D3
// (1) This file is the new JavaScript file that holds the D3 code.

// (2) Apply style to existing HTML elements using D3.
d3.select("h1")
  .style("color", "#1f6f8b")
  .style("font-family", "Arial, sans-serif");

d3.select(".intro")
  .style("color", "navy")
  .style("font-size", "1.05rem");

d3.select(".chart-area")
  .style("background-color", "#e3f1f6")
  .style("padding", "0.75rem 1rem")
  .style("border-radius", "8px")
  .style("max-width", "560px");

// (3) Append elements using D3.
// A paragraph inside the chart area...
d3.select(".chart-area")
  .append("p")
  .text("Samsung, LG and Kogan register far more models than any other brand.");

// ...and three more paragraphs at the end of the page, styled as they are added.
d3.select("main")
  .append("p")
  .text("This paragraph was added with D3.")
  .style("color", "#4a5866");

d3.select("main")
  .append("p")
  .text("So was this one.")
  .style("color", "#4a5866");

d3.select("main")
  .append("p")
  .text("And this one, in italics.")
  .style("color", "#4a5866")
  .style("font-style", "italic");

// (4) Append shapes using D3: an SVG container inside the chart area, then shapes inside it.
const svg = d3.select(".chart-area")
  .append("svg")
  .attr("width", 500)
  .attr("height", 200)
  .style("background-color", "#ffffff")
  .style("border", "1px solid #b8cdd6");

// Circles: area hints at relative size (Samsung > LG > Kogan)
svg.append("circle")
  .attr("cx", 80)
  .attr("cy", 95)
  .attr("r", 60)
  .attr("fill", "#5470c6");

svg.append("circle")
  .attr("cx", 175)
  .attr("cy", 70)
  .attr("r", 45)
  .attr("fill", "#91a7e0");

svg.append("circle")
  .attr("cx", 170)
  .attr("cy", 145)
  .attr("r", 38)
  .attr("fill", "#2f4b9a");

// A rectangle, a line and a text label
svg.append("rect")
  .attr("x", 260)
  .attr("y", 80)
  .attr("width", 180)
  .attr("height", 40)
  .attr("fill", "green");

svg.append("line")
  .attr("x1", 260)
  .attr("y1", 150)
  .attr("x2", 440)
  .attr("y2", 150)
  .attr("stroke", "#333333")
  .attr("stroke-width", 3);

svg.append("text")
  .attr("x", 260)
  .attr("y", 175)
  .text("Shapes appended with D3")
  .style("font-family", "Arial, sans-serif")
  .style("font-size", "14px")
  .attr("fill", "#333333");
