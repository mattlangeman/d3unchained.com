import { sveltekit } from '@sveltejs/kit/vite';
import dsv from '@rollup/plugin-dsv';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), dsv()],
	define: {
		'import.meta.env.VERCEL_ANALYTICS_ID': JSON.stringify(process.env.VERCEL_ANALYTICS_ID)
	}
};

export default config;
