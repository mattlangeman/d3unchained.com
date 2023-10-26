<script>
    import * as d3 from "d3";
    import { onMount } from 'svelte';

    import CodeDisplay from "./CodeDisplay.svelte";
    import Snippet from "./snippets/d3-bar-chart.svelte";
    import Snippet2 from "./snippets/d3-bar-chart-v2.svelte";
    import SnippetString from "./snippets/d3-bar-chart.svelte?raw";
    import Snippet2String from "./snippets/d3-bar-chart-v2.svelte?raw";

    let value;

    let topOffset = 0;
    $: stepNum = currentStep

    let stepCommentRegex = /<!--[\s\S]*?-->/g
    let commentStr = Snippet2String.match(stepCommentRegex)[0]

    // Removing the HTML comment delimiters and splitting by the "Step" keyword
    let steps = commentStr.replace(/<!--|-->/g, '').trim().split(/\bStep\b/).filter(Boolean);

    let parsedSteps = steps.map(step => {
        let lines = step.trim().split('\n');
        let stepNum = lines[0].trim();
        let description = lines[1].replace('Description: ', '').trim();
        let lineRange = lines[2].replace('Lines: ', '').trim();
        return {
            step: stepNum,
            description: description,
            lines: lineRange
        };
    });

    $: numSteps = parsedSteps.length

    let innerHeight;
    let innerWidth;
    let scrollY;

    let stickyContainer;
    let stickyCodeContainer;
    let scrollContainer;

    let scrollContainerTop;
    let stickyContainerTop;
    let scrollDiff = 0;

    $: scrollStepHeight = innerHeight * 0.8
    $: scrollStepWidth = innerWidth;
    $: scrollContainerHeight = scrollStepHeight * numSteps;
    $: stepContainerWidth = innerWidth * numSteps;

    // create scale that translates vertical scroll within scrollContainer
    // to horizontal scroll within stepContainer

    $: scrollStepScale = d3.scaleLinear()
        .domain([0, scrollContainerHeight])
        .range([0, stepContainerWidth])

    $: currentStep = (scrollDiff && scrollStepWidth) ? Math.floor((-scrollDiff + scrollStepHeight*.5) / scrollStepHeight)+1 : 1;

    let highlightDivs = [];
    onMount(() => {
        const updateStepContainerPostion = () => {
            // get top position of scroll container
            scrollContainerTop = scrollContainer.getBoundingClientRect().top;
            stickyContainerTop = stickyContainer.getBoundingClientRect().top;
            scrollDiff = scrollContainerTop - stickyContainerTop;

            highlightDivs = document.querySelectorAll('.line-highlight');
            let minTop = 9999;
            let maxTop = 0;
            for (let i = 0; i < highlightDivs.length; i++) {
                // get the top of the highlight div based on style top
                let top = parseInt(highlightDivs[i].style.top.replace('px', ''));
                if (top < minTop) minTop = top
                if (top > maxTop) maxTop = top
            }
            if (minTop > 300 && minTop < 9999) topOffset = -minTop + 40;
            else topOffset = 0;

        };

        window.addEventListener('scroll', updateStepContainerPostion);
        updateStepContainerPostion()

        return () => {
            window.removeEventListener('scroll', updateStepContainerPostion);
        };
    });



</script>

<svelte:head>
  <link href="https://cdn.jsdelivr.net/npm/prism-themes@1.4.0/themes/prism-material-dark.css" rel="stylesheet" />
</svelte:head>

<svelte:window bind:innerHeight={innerHeight} bind:innerWidth={innerWidth} bind:scrollY={scrollY}/>

<div class="mt-4">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
        <h2 class="text-3xl font-bold">Standard D3 vs Svelte and D3</h2>
        <div class="grid md:grid-cols-2 gap-x-4 mt-4 overflow-hidden">
            <div class="hidden md:block">
                <Snippet/>
            </div>
            <div>
                <Snippet2/>
            </div>
        </div>
    </div>
    <div class="section-container flex mt-2">
        <div bind:this={scrollContainer} style="height: {scrollContainerHeight}px;"
            class="code-steps invisible w-[0.1%]">
        </div>
        <div bind:this={stickyContainer}
            class="w-[99.9%] h-[90vh] relative sticky-code sticky top-4 overflow-hidden">
            <div bind:this={stickyCodeContainer} class="grid md:grid-cols-2 gap-x-4 relative h-full">
                <div class="hidden md:block bg-[#2f2f2f] overflow-hidden">
                    <CodeDisplay
                        codeString={SnippetString}
                        stepNum={stepNum}
                        topOffset={topOffset}
                    />
                </div>
                <div class="bg-[#2f2f2f] overflow-hidden">
                    <CodeDisplay
                        codeString={Snippet2String}
                        stepNum={stepNum}
                        topOffset={topOffset}
                    />
                </div>
            </div>
            <div class="absolute grid grid-cols-8 bottom-0 overflow-hidden"
                style="width: {stepContainerWidth}px; transform: translateX({scrollStepScale(scrollDiff)}px);">
                    {#each parsedSteps as step, index (index)}
                    <div class="flex justify-center">
                        <div class='w-[80%] sm:w-[70%] md:w-[50%] lg:w-[600px] border bg-white rounded p-4 m-4 opacity-90'>
                            <div class="text-md text-gray-600">{step.description}</div>
                        </div>
                    </div>

                    {/each}
            </div>
        </div>
    </div>
</div>