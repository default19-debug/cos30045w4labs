# COS30045 Week 4 Lab — SVGs and D3

COS30045 Data Visualisation · Swinburne University of Technology

Exercises 4.1 to 4.6: drawing with SVG, then building a D3 bar chart step by step from
television registration data processed in KNIME. Each exercise is its own page, so every stage
can be seen on its own; [`req.md`](req.md) maps every requirement to the file that meets it.

## Run it

The D3 pages load a CSV with `d3.csv()`, which browsers block on `file://`. Serve the folder:

- **VS Code:** right-click `index.html` → *Open with Live Server*, or
- **Terminal:** `python -m http.server 8000` (macOS: `python3`), then open <http://localhost:8000>

D3 v7.9.0 is bundled in `js/vendor/`, so no internet connection is needed.

## Exercises

| # | Page | What it shows |
|---|---|---|
| 4.1 | [`4.1-svg-house/`](4.1-svg-house/) | Initial SVG house (`initial.html`), customised house (`house.html`) with shapes, paths, text, groups, transforms and styling, and a coordinate overlay |
| 4.2 | [`4.2-d3-elements/`](4.2-d3-elements/) | D3 styles existing elements and appends paragraphs and SVG shapes from a separate JS file |
| 4.3 | [`4.3-d3-setup/`](4.3-d3-setup/) | Responsive SVG container, `viewBox`, test rectangle |
| 4.4 | [`4.4-load-csv/`](4.4-load-csv/) | `d3.csv()` with a row conversion function; console output and D3 summary statistics |
| 4.5 | [`4.5-data-binding/`](4.5-data-binding/) | `selectAll().data().join()` — one bar per brand, width from the data, bars spaced out |
| 4.6 | [`4.6-scales/`](4.6-scales/) | `scaleLinear` for counts, `scaleBand` with padding for brands, brand and value labels |

### 4.1 screenshots

`4.1-svg-house/screenshots/`

- `initial.png` and `initial-code.png` — the starting drawing and its code
- `customised.png` — the finished drawing
- `customised-annotated.png` — coordinates of a sample of shapes: the origin and axis directions,
  the wall rectangle, roof path vertices, the sun's group transform and ray rotation, a reused
  window, the door, the mailbox arc, the tree group's translate, the fence pickets and the garden
  path's Bézier control points

The initial drawing was generated with AI assistance as a starting point (the exercise suggests
GitHub Copilot); the customised version extends it.

Screenshots of 4.2–4.6 are in [`screenshots/`](screenshots/).

## Data

`data/tvBrandCount.csv` — television models per brand, 25 brands, 4,240 models.

Produced by the KNIME workflow [`knime/2026 TV Data.knwf`](knime/) from the Energy Rating register
of televisions (`tv_2026_02_15.csv`, data.gov.au, CC BY 4.0):

1. **CSV Reader** — raw registration data
2. **Column Filter** — keep `Brand_Reg`, `SoldIn`, `Availability Status`
3. **String Cleaner** — brand names to lower case
4. **String Replacer** — `samsung electronics` → `samsung`
5. **Nominal Value Row Filter** — `Availability Status` = Available
6. **Nominal Value Row Filter** — `SoldIn` includes Australia
7. **GroupBy** — count models per brand
8. **Column Renamer** — `brand`, `count`
9. **Row Filter** — brands with 20 or more models

## Structure

```
├── index.html            Lab hub
├── req.md                Requirements checklist
├── css/style.css         Shared page styles, including .responsive-svg-container
├── js/vendor/            D3 v7.9.0
├── data/                 tvBrandCount.csv
├── knime/                2026 TV Data.knwf
├── 4.1-svg-house/        initial.html, house.html, code.html, screenshots/
├── 4.2-d3-elements/      index.html, js/main.js
├── 4.3-d3-setup/         index.html, js/main.js
├── 4.4-load-csv/         index.html, js/main.js
├── 4.5-data-binding/     index.html, js/main.js
├── 4.6-scales/           index.html, js/main.js
└── screenshots/          4.2–4.6 and the hub page
```

## References

- Dufour, A. & Meeks, E. (2024). *D3.js in Action* (3rd ed.). Manning. Ch. 1–3.
- Department of Climate Change, Energy, the Environment and Water. *Energy Rating data for
  household appliances — televisions.* data.gov.au. CC BY 4.0.
