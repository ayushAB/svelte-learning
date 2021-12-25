# Steps to configure tailwindcss 

1. Install Tailwind and its dependencies:

   `npm install -D tailwindcss@latest postcss@latest autoprefixer@latest`
2. Generate your tailwind.config.js and postcss.config.js configuration files:

   `npx tailwindcss init -p`
3. Use the above tailwind configuration file.
4. Add the following in your App.svelte file

    `<style global>
    @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>`

5. Delete the `public/global.css` file and remove `<link rel='stylesheet' href='/global.css'>` from public/index.html not to interfere with the Tailwind styles.

6. Configure PostCSS with Svelte preprocessor.Install the Svelte preprocessor dependencies:
    `npm install -D svelte-preprocess postcss-load-config`

7. Modify your `rollup.config.js` to include the postcss plugin in your Svelte preprocessors:

            `import sveltePreprocess from "svelte-preprocess";
        ...
        export default {
        ...
        plugins: [
            svelte({
            ...
            preprocess: sveltePreprocess({
                sourceMap: !production,
                postcss: true,
            }),
            }),
        ...
        `