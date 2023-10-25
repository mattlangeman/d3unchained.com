<script>
    import { onMount } from 'svelte';

    import CodeDisplay from "./CodeDisplay.svelte";
    import Snippet from "./snippets/snippet.svelte";
    import Snippet2 from "./snippets/snippet2.svelte";
    import SnippetString from "./snippets/snippet.svelte?raw";
    import Snippet2String from "./snippets/snippet2.svelte?raw";

    import Scrolly from "$lib/utils/Scrolly.svelte";

    let value;
    $: stepNum = value

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
    let stepContainer;

    let stickyCodeHeight;

    let stickyCodeContainerTop = 0;
    let stickyCodeContainerBottom = 0;
    let stepContainerTop = 0;
    let stepContainerBottom = 0;
    let scrollContainerY = 0;

    onMount(() => {
        const updateStepContainerPostion = () => {

            stepContainerTop = stepContainer.getBoundingClientRect().top;
            stepContainerBottom = stepContainer.getBoundingClientRect().bottom
            scrollContainerY = scrollContainer.getBoundingClientRect().top + scrollY;
            stickyCodeContainerTop = stickyCodeContainer.getBoundingClientRect().top;
            stickyCodeContainerBottom = stickyCodeContainer.getBoundingClientRect().bottom;
            if (stepContainerBottom > innerHeight - 10 && (stepContainerBottom - stickyCodeContainerBottom) < 2 ) {
                stepContainerPosition = 'fixed';
            } else {
                stepContainerPosition = 'absolute';
            }
        };

        window.addEventListener('scroll', updateStepContainerPostion);
        updateStepContainerPostion()

        return () => {
            window.removeEventListener('scroll', updateStepContainerPostion);
        };
    });

    $: stickyContainerHeight = innerHeight * 0.8;
    $: scrollContainerHeight = numSteps * innerHeight * 0.8;

    $: scrollInContainer = scrollContainer ?  (scrollY - scrollContainerY) / stickyContainerHeight: 0;

    let stepContainerPosition = 'absolute';



    $: visibleStep1 = Math.max(Math.floor(scrollInContainer), 0) + 1;
    $: activeStep = Math.max(Math.floor(scrollInContainer + .15), 0) + 1;
    $: percentageStep = (scrollY - scrollContainerY > 0) ? (scrollInContainer - Math.floor(scrollInContainer)) * 100 : 0;
</script>

<svelte:head>
  <link href="https://cdn.jsdelivr.net/npm/prism-themes@1.4.0/themes/prism-material-dark.css" rel="stylesheet" />
</svelte:head>

<svelte:window bind:innerHeight={innerHeight} bind:innerWidth={innerWidth} bind:scrollY={scrollY}/>

<div class="mt-4">
    <h2 class="text-3xl font-bold">Using divs vs using svg</h2>
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
                <div class="step h-[80vh]">
                </div>
            {/each}
            </Scrolly>
        </div>
        <div bind:this={stickyContainer} class="w-[99.9%] h-[80vh] sticky-code sticky top-4">
            <div bind:this={stickyCodeContainer} class="grid md:grid-cols-2 gap-x-4 relative" bind:clientHeight={stickyCodeHeight}>
                <div class="hidden md:block bg-[#2f2f2f] overflow-hidden">
                    <CodeDisplay codeString={SnippetString} stepNum={activeStep} />
                </div>
                <div class="bg-[#2f2f2f] overflow-hidden">
                    <CodeDisplay codeString={Snippet2String} stepNum={activeStep}/>
                </div>
                <div class="w-full bottom-0 overflow-hidden" style="position: {stepContainerPosition}">
                    <div bind:this={stepContainer} class="relative w-full h-40">
                        {#each parsedSteps as step, index}
                        <div class={`absolute bottom-0 w-80 border bg-white rounded p-4 m-4 transition-opacity ease-in duration-700 ${index === visibleStep1-1 || (index == visibleStep1 && percentageStep > 80) ? 'block opacity-1' : 'hidden opacity-0'}`}
                            style={`right: ${index === visibleStep1-1 ? percentageStep : percentageStep-100}%;`}>
                                <div class="text-sm text-gray-400">{step.step}</div>
                                <div class="text-xs text-gray-400">{step.description}</div>
                            </div>
                        {/each}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>