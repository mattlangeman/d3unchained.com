<script>
    import BasicPage from "../BasicPage.svelte"
    import MailToLink from "../../MailToLink.svelte";

</script>

<BasicPage>
    <svelte:fragment slot="title">Contact</svelte:fragment>
    <svelte:fragment slot="content">
    <div class="relative max-w-screen-2xl mx-auto pb-12 py-10 md:py-16">
        <div class="">
            <div class="mx-auto lg:mx-0">
                <h2 class="text-2xl font-bold font-header tracking-tight sm:text-3xl md:text-4xl">I'd love to hear from you!</h2>
                <p class="mt-4 text-md sm:text-lg text-gray-500 sm:mt-3">Feel free to send me an email or schedule a time to chat</p>
            </div>
        </div>

        <div class="my-8">
            <MailToLink />
        </div>
        <div class="relative bg-white">
            <div class="my-8 mx-auto">
                <div class="" id="booking-page">
                    <!-- this is where we will inject the interface -->
                </div>
            </div>
            <script>window.SavvyCal=window.SavvyCal||function(){(SavvyCal.q=SavvyCal.q||[]).push(arguments)};</script>
            <script async src="https://embed.savvycal.com/v1/embed.js"></script>
            <script>
                SavvyCal('init');
                SavvyCal('inline', { link: 'mattlangeman/7085e1b0', selector: '#booking-page' });
            </script>
        </div>

    </div>
    </svelte:fragment>
</BasicPage>
