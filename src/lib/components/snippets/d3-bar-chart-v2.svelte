<script>
    import * as d3 from "d3";

    let data = [4, 8, 15, 16, 23, 42]
    let chartWidth = 370;

    let xScale = d3.scaleLinear()
        .domain([0, d3.max(data)])
        .range([0, chartWidth])

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
Description: The width the the chart is hardcoded in this example. In other examples we bind the width to the width of the container.
Lines: 5

Step 3:
Description: Create your scale. This is the only bit of d3 code needed in the Svelte version. It is used to map values from the data to pixel values within the chart.
Lines: 7-9

Step 4:
Description: Create any empty chart container
Lines: 14,21

Step 5:
Description: Create a div for each bar/data point
Lines: 15-16,19-20

Step 6:
Description: Set the width of each bar
Lines: 17

Step 7:
Description: Style the bar
Lines: 31-35

Step 8:
Description: Add a data label to each bar
Lines: 18
-->