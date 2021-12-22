<script>
	 let number = 0;
</script>

<main>
	<h1>Number {number}</h1>
	<input bind:value={number} type="number" />
	{#if number === 0 }
	<h1>Hello Ayush!!</h1>
	{:else if number === 1}
	<h1>Hello SpiderMan!! </h1>
	{:else}
	<h1>Hello World!!</h1>
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>