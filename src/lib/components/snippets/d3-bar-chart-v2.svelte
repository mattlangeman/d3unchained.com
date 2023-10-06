<script>
    import * as d3 from "d3";

    let data = [4, 8, 15, 16, 23, 42]

    let xScale = d3.scaleLinear()
        .domain([0, d3.max(data)])
        .range([0, 420])

</script>

<div id="svelte-d3-barchart">
    <div class="bar-chart">
        {#each data as d}
            <div class="bar"
                style="width:{xScale(d)}px;">
                {d}
            </div>
        {/each}
    </div>
</div>

<style>
    .bar-chart {
        width: 100%;
        font: 10px sans-serif;
        color: white;
        text-align: right;
    }
    .bar {
        padding: 3px;
        margin: 1px;
        background-color: steelblue;
    }
</style>

<!--
Step 1:
Description: Define the data
Lines: 4

Step 2:
Description: Create your scale
Lines: 6-8

Step 3:
Description: Create any empty chart container
Lines: 13,20

Step 4:
Description: Create a div for each bar/data point
Lines: 14-15,18-19

Step 5:
Description: Set the width of each bar
Lines: 16

Step 6:
Description: Style the bar
Lines: 30-34

Step 7:
Description: Add a data label to each bar
Lines: 17
-->