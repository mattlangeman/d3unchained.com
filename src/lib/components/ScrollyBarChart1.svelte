<script>
    import { onMount } from 'svelte';
    import { fly, slide, fade } from 'svelte/transition'

    import { cubicOut } from 'svelte/easing';


    import CodeDisplay from "./CodeDisplay.svelte";
    import Snippet from "./snippets/d3-bar-chart.svelte";
    import Snippet2 from "./snippets/d3-bar-chart-v2.svelte";
    import SnippetString from "./snippets/d3-bar-chart.svelte?raw";
    import Snippet2String from "./snippets/d3-bar-chart-v2.svelte?raw";

    import Scrolly from "$lib/utils/Scrolly.svelte";

    function fadeSlide(node, { duration, x }) {
        return {
            duration,
            css: (t, u) => `
            transform: translateX(${u * x}px);
            opacity: ${t}
            `,
            easing: cubicOut,
        };
    }


    let value;

    let topOffset = 0;
    $: stepNum = Math.max(value, 1)

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

    let highlightDivs = [];
    onMount(() => {
        const updateStepContainerPostion = () => {
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

    $: scrollContainerHeight = numSteps * innerHeight * 0.8;
    $: stepContainerWidth = numSteps * innerWidth;

</script>

<svelte:head>
  <link href="https://cdn.jsdelivr.net/npm/prism-themes@1.4.0/themes/prism-material-dark.css" rel="stylesheet" />
</svelte:head>

<svelte:window bind:innerHeight={innerHeight} bind:innerWidth={innerWidth} bind:scrollY={scrollY}/>

<div class="mt-4">
    <h2 class="text-3xl font-bold">Standard D3 vs Svelte and D3</h2>
    <div class="grid md:grid-cols-2 gap-x-4 mt-4 overflow-hidden">
        <div class="hidden md:block">
            <Snippet/>
        </div>
        <div>
            <Snippet2/>
        </div>
    </div>
    <div class="section-container flex mt-2">
        <div bind:this={scrollContainer} style="height: {scrollContainerHeight}px;"
            class="code-steps invisible w-[0.1%]">
            <Scrolly bind:value>
            {#each parsedSteps as step}
                <div class="step h-[90vh]">
                </div>
            {/each}
            </Scrolly>
        </div>
        <div bind:this={stickyContainer}
            class="w-[99.9%] h-[90vh] relative sticky-code sticky top-4 overflow-hidden">
            <div bind:this={stickyCodeContainer} class="grid md:grid-cols-2 gap-x-4 relative">
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
            <div class="w-full bottom-0 overflow-hidden absolute grid">
                <div class="relative w-full h-40">
                    {#each parsedSteps as step, index (index)}
                        {#if index === stepNum-1 }
                        <div class='absolute bottom-0 w-80 border bg-white rounded p-4 m-4'
                            in:fadeSlide={{ duration: 1000, x: innerWidth }}
                            out:fadeSlide={{ duration: 1000, x: -200 }}
                        >
                            <div class="text-sm text-gray-400">{step.step}</div>
                            <div class="text-xs text-gray-400">{step.description}</div>
                        </div>
                        {/if}
                    {/each}
                </div>
            </div>
        </div>
    </div>
</div>