import adapter from "@sveltejs/adapter-static";

console.log(Object.keys(adapter));

/** @type {import("@sveltejs/kit").Config} */
const config = {
    // options passed to svelte.compile (https://svelte.dev/docs#svelte_compile)
	compilerOptions: null,

	// an array of file extensions that should be treated as Svelte components
	extensions: ['.svelte'],
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
        adapter: adapter({out: "build"}),
		target: "#svelte"
	}
};

export default config;
