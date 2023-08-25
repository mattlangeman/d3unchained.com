<script>
    let features = [

    ]
</script>

<div class="bg-gray-900">
    <div class="relative bg-gray-900 overflow-hidden max-w-7xl mx-auto">
      <div class="relative z-10 pb-8 bg-gray-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
        <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-gray-900 transform translate-x-1/2"
          fill="currentColor" viewBox="0 0 100 100"
          preserveAspectRatio="none" aria-hidden="true">
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
        <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8">
          <div class="sm:text-center lg:text-left">
            <h1 class="text-3xl tracking-tight font-extrabold font-header sm:text-4xl md:text-5xl">
              <span class="block text-white">Unleash the power of D3</span>
            </h1>
            <p class="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Learn to write declarative D3 that is easy to read, maintain, and extend.
            </p>
            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div class="rounded-md shadow">
                <a href="/examples" class="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-black bg-yellow-400 hover:bg-yellow-500 md:py-4 md:text-lg md:px-8">
                  Examples
                </a>
              </div>
              <div class="mt-3 sm:mt-0 ml-4">
                <a href="/about" class="w-full flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:text-yellow-400 hover:border-yellow-400 md:py-4 md:text-lg md:px-10">
                  About
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 xl:mr-9">
        <img class="h-56 w-full mx-auto object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="/images/dashboard-pic-1.jpg" alt="" />
      </div>
    </div>
</div>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
    <div class="mt-16">
        <h2 class="text-2xl font-bold font-header tracking-tight">Why D3 Unchained?</h2>
        <p class="mt-4 text-lg">D3 is a powerful tool, but can have a high learning curve. D3 is often written in an imperative style that involves chaining commands together. For many this is difficult to understand.</p>
        <p class="mt-4 text-lg">D3 Unchanged shows an alternative way of building visualizations with D3 that is becoming increasingly popular.</p>
      </div>
</div>


<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div class="grid lg:grid-cols-3 gap-16">
        {#each features as feature}
        <div class="">
            <div class="flex items-center justify-center mx-auto h-20 w-20 rounded-full bg-yellow-400 text-black">
                {@html feature.svg}
            </div>
            <div class="mt-5 text-center">
                <h5 class="leading-6 text-lg font-bold font-header text-gray-800">{feature.title}</h5>
                <p class="mt-2 text-md leading-6 text-gray-600">
                    {feature.description}
                </p>
            </div>
          </div>
        {/each}
    </div>
</div>
