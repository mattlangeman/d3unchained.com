<script>
    import { onMount } from "svelte";
    import * as d3 from "d3";

    let data = [4, 8, 15, 16, 23, 42]
    let chartWidth = 370;

    let xScale = d3.scaleLinear()
        .domain([0, d3.max(data)])
        .range([0, chartWidth])

    const div = d3.create("div")
    .style("font", "10px sans-serif")
    .style("text-align", "right")
    .style("color", "white");

    div.selectAll("div")
        .data(data)
        .join("div")
            .style("width", d => `${xScale(d)}px`)
            .style("background", "steelblue")
            .style("padding", "3px")
            .style("margin", "1px")
            .text(d => d);

    onMount(() => {
        document.getElementById("standard-d3-barchart")
            .appendChild(div.node());
    });
</script>

<div id="standard-d3-barchart"></div>

<!--
Step 1:
Description: Define the data
Lines: 5

Step 3:
Description: The width the the chart is hardcoded in this example. In other examples we bind the width to the width of the container.
Lines: 6

Step 2:
Description: Create your scale
Lines: 8-10

Step 4:
Description: Create any empty (detached) chart container
Lines: 12-15

Step 5:
Description: Create a div for each bar/data point
Lines: 17-19

Step 6:
Description: Set the width of each bar
Lines: 20

Step 7:
Description: Style the bar
Lines: 21-23

Step 8:
Description: Add a data label to each bar
Lines: 24
-->