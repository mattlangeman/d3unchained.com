<script>
    import { webVitals } from '$lib/vitals';
    import { browser } from '$app/environment';
    import { page } from '$app/stores';
    import { inject } from '@vercel/analytics';

    import "../app.css";

    let analyticsId = import.meta.env.VERCEL_ANALYTICS_ID;
    $: if (browser && analyticsId) {
        webVitals({
            path: $page.url.pathname,
            params: $page.params,
            analyticsId
        })
        inject()
    }
</script>

<slot />