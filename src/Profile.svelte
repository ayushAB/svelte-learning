<script>
    export let displayName;
    export let photoURL;
    export let uid;
</script>

<h3 class="capitalize px-2 py-4 shadow-md rounded text-center bg-yellow-400 text-white my-4">Hi {displayName}!!</h3>

<img src={photoURL} class="w-36 shadow-md rounded" alt="profile" />
<p class="shadow-md rounded text-center bg-red-400 py-4 text-white my-4">Your userID is {uid}</p>