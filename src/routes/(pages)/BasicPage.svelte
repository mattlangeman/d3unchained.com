<script>
    import Nav from "../Nav.svelte";
    import Footer from "../Footer.svelte";
    let title = "Title Slot"
    let content = "Content Slot"
</script>

<div class="flex flex-col h-screen">
    <Nav />
    <div class="flex-grow">
        <div class="w-100 h-28 bg-gray-800 text-center">
            <h1 class="text-3xl tracking-tight inline-block pt-6
                mini-underline
                font-extrabold font-header uppercase
                text-white font-header sm:text-4xl md:text-5xl">
                <slot name="title">{title}</slot>
            </h1>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <slot name="content">{content}</slot>
        </div>
    </div>
    <Footer />
</div>