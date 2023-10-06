<script>
    import BasicPage from "../../BasicPage.svelte";
    import BarChartRaceContainer from "$lib/components/BarChartRaceContainer.svelte";
</script>

<BasicPage>
    <span slot="title">Bar Chart Race</span>
    <span slot="content">
        <BarChartRaceContainer />
        <div class="my-8">
            <h2 class="text-3xl font-bold">Code Sandbox</h2>
            <iframe title="Code Sandbox for Bar Chart Race" style="border: 1px solid rgba(0, 0, 0, 0.1);border-radius:2px;" width="100%" height="800"
                src="https://codesandbox.io/p/sandbox/github/mattlangeman/d3unchained.com/tree/main?embed=1&file=%2Fsrc%2Flib%2Fcomponents%2FBarChartRace.svelte" allowfullscreen></iframe>
        </div>
    </span>
</BasicPage>