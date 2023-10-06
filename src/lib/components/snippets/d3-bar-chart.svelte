<script>
    import { onMount } from "svelte";
    import * as d3 from "d3";

    let data = [4, 8, 15, 16, 23, 42]

    let xScale = d3.scaleLinear()
        .domain([0, d3.max(data)])
        .range([0, 420])

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

Step 2:
Description: Create your scale
Lines: 7-9

Step 3:
Description: Create any empty (detached) chart container
Lines: 11-14

Step 4:
Description: Create a div for each bar/data point
Lines: 16-18

Step 5:
Description: Set the width of each bar
Lines: 19

Step 6:
Description: Style the bar
Lines: 20-22

Step 7:
Description: Add a data label to each bar
Lines: 23
-->