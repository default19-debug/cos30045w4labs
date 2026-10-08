// Exercise 4.5 — D3 binding and drawing with data

// SVG set up as in 4.3. The height is trimmed from 1600 to fit 25 bars of 20 + 5 units.
const svg = d3.select(".responsive-svg-container")
  .append("svg")
  .attr("viewBox", "0 0 1200 640")
  .style("border", "1px solid black");

// Draw one bar per brand.
const drawBarChart = data => {
  const barHeight = 20;
  const spacing = 5;

  svg
    .selectAll("rect")   // (1) empty selection of the elements we are about to add
    .data(data)          //     bind the data: one rect will be created per row
    .join("rect")        //     add the rects to the DOM
    // (2) attributes that reflect the data
    .attr("class", d => {
      console.log(d);
      return `bar bar-${d.brand.replace(/\s+/g, "-")}`;   // e.g. "bar bar-spark-electronics"
    })
    .attr("width", d => d.count)          // bar length = number of models
    .attr("height", barHeight)
    // (3) space the bars out: x is always 0, y moves down one bar + gap per row
    .attr("x", 0)
    .attr("y", (d, i) => (barHeight + spacing) * i)
    // Highlight one brand with the ternary operator: blue for Kogan, green for everyone else
    .attr("fill", d => d.brand === "kogan" ? "#1f5fbf" : "#3f8f3f");
};

d3.csv("../data/tvBrandCount.csv", d => {
  return {
    brand: d.brand,
    count: +d.count
  };
}).then(data => {
  data.sort((a, b) => b.count - a.count);
  drawBarChart(data);
});
