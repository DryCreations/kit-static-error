import adapter from "@sveltejs/adapter-static";

const dev = process.env.NODE_ENV === 'development';

/** @type {import("@sveltejs/kit").Config} */
const config = {
    // options passed to svelte.compile (https://svelte.dev/docs#svelte_compile)
	compilerOptions: null,

	// an array of file extensions that should be treated as Svelte components
	extensions: ['.svelte'],
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
    adapter: adapter({out: "build"}),
		target: "#svelte",
		// for hosting on gh-pages
		paths: {
			base: dev ? '' : '/kit-static-error',
			assets: dev ? '' : '/kit-static-error'
		},
		// you can also add something like this to explicitly define additional pages, that don't rely on crawling
		// prerender: {
		// 	pages: ['*', 'example/stuff2']
		// },

	}
};

export default config;
