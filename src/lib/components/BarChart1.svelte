<script>
    import { getMaxStepNumber } from "$lib/utils/parsing-utils.js";
    import CodeDisplay from "./CodeDisplay.svelte";
    import Snippet from "./snippets/d3-bar-chart.svelte";
    import Snippet2 from "./snippets/d3-bar-chart-v2.svelte";
    import SnippetString from "./snippets/d3-bar-chart.svelte?raw";
    import Snippet2String from "./snippets/d3-bar-chart-v2.svelte?raw";

    let stepNum = 1

    let maxStepNum1 = getMaxStepNumber(SnippetString)
    let maxStepNum2 = getMaxStepNumber(Snippet2String)

    let maxStepNum = Math.max(maxStepNum1, maxStepNum2)
    console.log('maxStepNum', maxStepNum)

    const nextStep = () => {
        if (stepNum < maxStepNum) {
            stepNum = stepNum + 1
        }
    }

    const previousStep = () => {
        if (stepNum > 1) {
            stepNum = stepNum - 1
        }
    }

    /*
    let scrollContainer;
    let windowWidth;
    let objectRef;
    $: dynamicHeight = scrollContainer ? handleDynamicHeight(scrollContainer) : null;
    $: windowWidth,
        (dynamicHeight = scrollContainer ? handleDynamicHeight(scrollContainer) : null);

    $: calcDynamicHeight = (objectWidth) => {
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        return objectWidth - vw + vh + 150;
    };

    $: handleDynamicHeight = () => {
        const objectWidth = objectRef.scrollWidth;
        const dynamicHeight = calcDynamicHeight(objectWidth);
        return dynamicHeight;
    };
    */
</script>

<svelte:head>
  <link href="https://cdn.jsdelivr.net/npm/prism-themes@1.4.0/themes/prism-material-dark.css" rel="stylesheet" />
</svelte:head>

<div class="mt-4">
    <h2 class="text-3xl font-bold">Standard D3 vs Svelte and D3</h2>

    <div class="grid grid-cols-2 gap-x-2 mt-4">
        <div>
            <Snippet/>
        </div>
        <div>
            <Snippet2/>
        </div>
    </div>
    <div class="">
        <div
            class="grid grid-cols-2 gap-x-2 mt-4 sticky top-20">
                <div class="">
                    <h2>Standard D3</h2>
                    <CodeDisplay codeString={SnippetString} {stepNum} />
                </div>
                <div>
                    <h2>Svelte and D3</h2>
                    <CodeDisplay codeString={Snippet2String} {stepNum}/>
                </div>
        </div>
    </div>

    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={previousStep}>Previous Step</button>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={nextStep}>Next Step</button>
    <br/><br/>
</div>

