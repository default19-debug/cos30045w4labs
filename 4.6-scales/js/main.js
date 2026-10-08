// Exercise 4.6 — D3 scaling charts

const svg = d3.select(".responsive-svg-container")
  .append("svg")
  .attr("viewBox", "0 0 1200 760")
  .style("border", "1px solid black");

const labelWidth = 200;   // space on the left for the brand names
const barArea = 900;      // horizontal space the longest bar may use
const chartHeight = 740;  // vertical space shared by all the bars

const drawBarChart = data => {

  // (1) Linear scale for the count data: continuous values -> bar length
  const xScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.count)])
    .range([0, barArea]);

  // (2) Band scale for the category data: one equal band of height per brand
  // (3) Padding leaves a gap between neighbouring bands
  const yScale = d3.scaleBand()
    .domain(data.map(d => d.brand))
    .range([0, chartHeight])
    .padding(0.2);

  // One group per brand holds its bar and both labels, so they move together
  const barAndLabel = svg
    .selectAll("g")
    .data(data)
    .join("g")
    .attr("transform", d => `translate(0, ${10 + yScale(d.brand)})`);

  // The bar
  barAndLabel
    .append("rect")
    .attr("class", d => `bar bar-${d.brand.replace(/\s+/g, "-")}`)
    .attr("x", labelWidth)
    .attr("y", 0)
    .attr("width", d => xScale(d.count))
    .attr("height", yScale.bandwidth())
    .attr("fill", d => d.brand === "kogan" ? "#1f5fbf" : "#3f8f3f");

  // Category label, right-aligned against the start of the bar
  barAndLabel
    .append("text")
    .text(d => d.brand.toUpperCase())
    .attr("x", labelWidth - 10)
    .attr("y", yScale.bandwidth() / 2)
    .attr("dy", "0.35em")
    .attr("text-anchor", "end")
    .style("font-family", "sans-serif")
    .style("font-size", "16px")
    .style("fill", "#1d2733");

  // Value label, just past the end of the bar
  barAndLabel
    .append("text")
    .text(d => d.count)
    .attr("x", d => labelWidth + xScale(d.count) + 6)
    .attr("y", yScale.bandwidth() / 2)
    .attr("dy", "0.35em")
    .style("font-family", "sans-serif")
    .style("font-size", "15px")
    .style("fill", "#4a5866");
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
