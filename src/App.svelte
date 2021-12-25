<script>
	export let name;
</script>

<main class="h-full flex flex-col justify-center w-full items-center">
	<h1 class="text-7xl text-red-500 capitalize">Hello {name}!</h1>
	<p>Visit the <a class="underline text-blue-400" href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style global>
 @tailwind base;
  @tailwind components;
  @tailwind utilities; 
</style>