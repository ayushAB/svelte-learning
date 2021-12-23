<script>
	export let name;

	function delay(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}
	let rando = delay(2000).then(() =>Math.random());
</script>

<main>
	<h1>Hello {name}!</h1>
	{#await rando}
	<p>I waited for 2 seconds.</p>
	{:then number}
	<p>I waited for 2 seconds and got {number}.</p>
	{/await}
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