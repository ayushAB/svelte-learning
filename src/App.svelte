<script>
	import  {randomStore} from './store.js';
</script>

<main>

	<p>{$randomStore}</p>

	<button on:click={() => randomStore.set(Math.random())}>
		Set Random number name
		</button>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>