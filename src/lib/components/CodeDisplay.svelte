<script>
    import { tick } from "svelte";
    import { afterUpdate} from "svelte";
    import Prism from "prismjs";
    import "prism-svelte";
    import "prismjs/plugins/line-highlight/prism-line-highlight.js";
    import "prismjs/plugins/line-numbers/prism-line-numbers.css";
    import "$lib/prism-line-number-class.js"

    export let codeString;
    export let stepNum = 0;

    let stepCommentRegex = /<!--[\s\S]*?-->/g
    let commentStr = codeString.match(stepCommentRegex)[0]

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

    let pre;
    let lines = ""
    let description = ""

    const parseStep = async(stepNum) => {
        if (pre) {
            if (stepNum > 0 && stepNum <= parsedSteps.length) {
                lines = parsedSteps[stepNum - 1].lines
                description = parsedSteps[stepNum - 1].description
            }
            console.log('highlighting')
            console.log(lines)
            console.log(description)
            await tick()
            Prism.highlightAllUnder(pre);
        }
    }

    afterUpdate(() => {
        if (stepNum <= 0) stepNum = 1
        if (stepNum > parsedSteps.length) stepNum = parsedSteps.length
        parseStep(stepNum)
    })

    let codeStringDisplay = codeString.replace(stepCommentRegex, "")
</script>

<pre bind:this={pre} class="language-svelte line-numbers" data-line="{lines}">
<code>{codeStringDisplay}</code>
</pre>
<div>
    {#if stepNum > 0 && stepNum <= parsedSteps.length}
        <h2 class="text-2xl">Step {stepNum}</h2>
        <p>{description}</p>
    {/if}
</div>

<style>
    pre.language-svelte {
        border-radius: 1rem;
        padding-left: 1rem;
    }
</style>