<script>
    let items = [
        {
            'title': 'Bar Chart Race',
            'url': 'bar-chart-race',
            'description': `This example uses Svelte motion/tweening to create a bar chart race animation.`,
            'svg': `<svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>`
        },
        {
            'title': 'Srolly Bar Example',
            'url': 'scrolly-bar-chart-v1',
            'description': `This example uses scrollytelling to compare a bar chart using standard D3 code with one using Svelte + D3 code.`,
            'svg': `<svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>`
        },
        {
            'title': 'Srolly Bar Example 2',
            'url': 'scrolly-bar-chart-v2',
            'description': `This example uses scrollytelling to compare a bar chart using divs with code with one using svg.`,
            'svg': `<svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>`
        },
    ]
</script>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div>
        <p class="bg-yellow-100 p-4 rounded-lg">These examples are all works in progress. I am currently experimenting with a few options such as the Scrolly examples to make them more mobile friendly.</p>
    </div>
    <div class="grid lg:grid-cols-3 gap-16 mt-4">
    {#each items as item}
        <a href="/examples/{item.url}"
            class="p-8 hover:bg-gray-100">
            <div class="flex items-center justify-center mx-auto h-20 w-20 rounded-full bg-yellow-400 text-black">
                {@html item.svg}
            </div>
            <div class="mt-5 text-center">
                <h5 class="text-lg leading-6 font-bold font-header text-gray-800">{item.title}</h5>
                <p class="mt-2 text-md leading-6 text-gray-600">
                    {item.description}
                </p>
            </div>
        </a>
    {/each}
    </div>
</div>