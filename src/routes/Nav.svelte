<script>
    import { page } from '$app/stores';

    const links = [
    { href: '/', label: 'Home' },
    { href: '/examples', label: 'Examples'},
    { href: '/about', label: 'About'},
    { href: '/contact', label: 'Contact'},
    ]
    let menuIsOpen = false;

    const toggleMenu = () => (menuIsOpen = !menuIsOpen);
</script>

<nav class="bg-gray-900">
    <div class="max-w-7xl m-auto flex justify-between items-center">
        <div class="py-4">
            <div class="w-64 ml-2 sm:ml-4 md:ml-8">
                <a class="" href="/">
                    <img class="w-40 text-yellow-400"
                        src="/images/D3Unchained_logo_white.svg"
                        alt="D3 Unchained" />
                </a>
            </div>
        </div>
        <ul class="hidden md:flex justify-between items-center space-x-10 text-sm mr-8">
        {#each links as link}
            <li>
                {#if $page.url.pathname === link.href }
                <a href={link.href} class="text-yellow-400 hover:text-yellow-400 uppercase font-header no-underline whitespace-no-wrap">
                    {link.label}
                </a>
                {:else}
                <a href={link.href} class="text-white hover:text-yellow-400 uppercase font-header no-underline whitespace-no-wrap">
                    {link.label}
                </a>
                {/if}
            </li>
        {/each}
        </ul>
        <div class="flex md:hidden mr-2 sm:mr-4">
            <!-- Mobile menu button -->
            <button on:click={toggleMenu} class="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-yellow-400 hover:bg-gray-700 focus:outline-none" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <!-- Icon when menu is closed. -->
              <!--
                Heroicon name: menu
                Menu open: "hidden", Menu closed: "block"
              -->
              <svg class={`${menuIsOpen ? "hidden" : "block"} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <!-- Icon when menu is open. -->
              <!--
                Heroicon name: x
                Menu open: "block", Menu closed: "hidden"
              -->
              <svg class={`${menuIsOpen ? "block" : "hidden"} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div class={`${menuIsOpen ? "block" : "hidden"} lg:hidden`}>
          <div class="pt-2 pb-3 space-y-1">
            {#each links as link}
                {#if $page.url.pathname === link.href }
                <a href={link.href} class="bg-gray-800 border-yellow-400 text-yellow-400 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                    {link.label}
                </a>
                {:else}
                <a href={link.href} class="border-transparent text-white hover:bg-gray-800 hover:border-yellow-400 hover:text-yellow-400 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                    {link.label}
                </a>
                {/if}
            {/each}
          </div>
    </div>
</nav>