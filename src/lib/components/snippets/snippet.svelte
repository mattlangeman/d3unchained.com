<script>
    import * as d3 from "d3";

    let data = [4, 8, 15, 16, 23, 42]

    let chartContainerWidth;
    $: chartWidth = chartContainerWidth ? chartContainerWidth * .9 : 0
    $: xScale = d3.scaleLinear()
        .domain([0, d3.max(data)])
        .range([0, chartWidth])
</script>

<div class="bar-chart" bind:clientWidth={chartContainerWidth}>
    {#each data as d}
        <div class="bar"
            style="width:{xScale(d)}px;">
            {d}
        </div>
    {/each}
</div>

<style>
    .bar-chart {
        width: 100%;
        font: 10px sans-serif;
        color: white;
        text-align: right;
    }
    .bar {
        height: 20px;
        background-color: steelblue;
        margin-bottom: 2px;
        padding: 4px;
    }
</style>
<!--
Step 1:
Description: The div based chart will automatically change the height of the container based on the number of bars.
Lines: 13, 20

Step 2:
Description: Create a div for each bar/data point
Lines: 15,18

Step 3:
Description: Set the width of each bar
Lines: 16

Step 4:
Description: Set the height of each bar
Lines: 30

Step 5:
Description: We put the text label within the div element.
Lines: 17

Step 6:
Description: The text positioning happens based on the flow of DIVs and a bit of CSS.
Lines: 27, 33

Step 7:
Description: Divs use background-color instead of fill
Lines: 31

Step 8:
Description: Set the style for text within the entire bar chart.
Lines: 25-27
-->