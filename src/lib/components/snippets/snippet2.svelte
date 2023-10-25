<script>
    import * as d3 from "d3";

    let data = [4, 8, 15, 16, 23, 42]

    let chartContainerWidth;
    $: chartWidth = chartContainerWidth ? chartContainerWidth * .9 : 0

    $: xScale = d3.scaleLinear()
        .domain([0, d3.max(data)])
        .range([0, chartWidth])

    let barHeight = 20;
    let barPadding = 2;

    let chartHeight = (barHeight + barPadding) * data.length;

</script>

<div class="bar-chart" bind:clientWidth={chartContainerWidth}>
    <svg width={chartWidth} height="{chartHeight}">
        {#each data as d, i}
            <rect class="bar"
                width="{xScale(d)}"
                height="{barHeight}px"
                y="{i * (barHeight + barPadding)}"
                fill="steelblue">
            </rect>
            <text class="bar-label"
                x="{xScale(d) - 3}"
                y="{i * (barHeight + barPadding) + 13}"
                text-anchor="end"
                fill="white"
                style="font-size: 10px;
                        font-family: sans-serif;">
                {d}
            </text>
        {/each}
    </svg>
</div>

<style>
    .bar-chart {
        width: 100%;
    }
</style>
<!--
Step 1:
Description: We need to set the height of the chart. The div based chart will automatically adjust the container height based on the number of bars.
Lines: 16, 21

Step 2:
Description: Create a rect for each bar
Lines: 23, 28

Step 3:
Description: Set the width of each bar to the value of the data
Lines: 24

Step 4:
Description: Set the height and y position for the bar. Y position is based on the index of the bar, bar height, and 5px margin
Lines: 13,25-26

Step 5:
Description: We need to create a text element to contain the data label.
Lines: 29,37

Step 6:
Description: The position of the label is based on the width and y position of the bar.
Lines: 30-31

Step 7:
Description: SVGs use fill instead of background-color
Lines: 27

Step 8:
Description: We put the CSS for the text element inline, although it could go within a styles section.
Lines: 34-35
-->