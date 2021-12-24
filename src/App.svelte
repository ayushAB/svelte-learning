<script>
	export let name = "Ayush";
	import Child from "./Child.svelte";
	let data = {
		userId:11,
		name:"Ayush",
		email:"ab@gmail.com"
	}
	let data2 = {
		userId:16,
		name:"Ayush Bante",
		email:"ab124@gmail.com"
	}
	
</script>

<main>
	<h1>Hello {name}!</h1>
	<!-- passing one prop ata a time  -->
	<Child userId={data.userId} email={data.email} name={data.name} />
	<!-- using spread operator -->
	<Child {...data2} />
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