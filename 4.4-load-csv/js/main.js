// Exercise 4.4 — Load data from a CSV file
// Data: ../data/tvBrandCount.csv, made by the KNIME workflow in ../knime/2026 TV Data.knwf

// For comparison: loaded WITHOUT a row conversion function, every value arrives as a string.
d3.csv("../data/tvBrandCount.csv").then(raw => {
  console.log("Without row conversion:", raw[0], "-> count is a", typeof raw[0].count);
});

// (1) Load WITH a row conversion function. It runs once per row: the place to format the data.
d3.csv("../data/tvBrandCount.csv", d => {
  return {
    brand: d.brand,   // category column (nominal)
    count: +d.count   // "+" converts the text "1096" into the number 1096
  };
}).then(data => {

  // (2) The array of JavaScript objects created from the data set
  console.log(data);
  console.log("With row conversion:", data[0], "-> count is a", typeof data[0].count);

  // (3) Use D3 to find information about the data set
  console.log("Number of brands:", data.length);
  console.log("Most models:", d3.max(data, d => d.count));
  console.log("Fewest models:", d3.min(data, d => d.count));
  console.log("Extent [min, max]:", d3.extent(data, d => d.count));
  console.log("Total models:", d3.sum(data, d => d.count));
  console.log("Mean per brand:", d3.mean(data, d => d.count));
  console.log("Median per brand:", d3.median(data, d => d.count));

  // Sort highest first, as the lecture does before drawing a bar chart
  data.sort((a, b) => b.count - a.count);
  console.log("Sorted by count:", data);
  console.table(data);

  showSummary(data);
});

// Writes the same findings into the page, using D3 selections and data binding.
const showSummary = data => {
  const max = d3.max(data, d => d.count);
  const min = d3.min(data, d => d.count);
  const brandsWith = value => data.filter(d => d.count === value).map(d => d.brand).join(", ");

  const stats = [
    { label: "Brands in the file", value: data.length, fn: "data.length" },
    { label: "Total models", value: d3.sum(data, d => d.count), fn: "d3.sum()" },
    { label: "Most models", value: `${max} (${brandsWith(max)})`, fn: "d3.max()" },
    { label: "Fewest models", value: `${min} (${brandsWith(min)})`, fn: "d3.min()" },
    { label: "Range", value: d3.extent(data, d => d.count).join(" – "), fn: "d3.extent()" },
    { label: "Mean per brand", value: d3.mean(data, d => d.count).toFixed(1), fn: "d3.mean()" },
    { label: "Median per brand", value: d3.median(data, d => d.count), fn: "d3.median()" }
  ];

  const statRows = d3.select("#stats tbody")
    .selectAll("tr")
    .data(stats)
    .join("tr");
  statRows.append("th").attr("scope", "row").text(d => d.label);
  statRows.append("td").attr("class", "num").text(d => d.value);
  statRows.append("td").append("code").text(d => d.fn);

  d3.select("#type-check")
    .text(`The row conversion turned count into a ${typeof data[0].count}, ` +
          `so D3 can compare and add the values instead of treating them as text.`);

  const rows = d3.select("#rows tbody")
    .selectAll("tr")
    .data(data)
    .join("tr");
  rows.append("td").attr("class", "num").text((d, i) => i + 1);
  rows.append("td").text(d => d.brand);
  rows.append("td").attr("class", "num").text(d => d.count);
};
