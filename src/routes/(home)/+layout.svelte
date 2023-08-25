<script>
    import Nav from '../Nav.svelte';
    import Footer from '../Footer.svelte';
    import "../../app.css";
</script>

<div class="flex flex-col h-screen">
    <Nav />
    <div class="flex-grow">
        <slot />
    </div>
    <Footer />
</div>