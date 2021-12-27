<script>
    import Profile from './Profile.svelte';
    import Todos from './Todos.svelte';

    import {auth, googleProvider} from './firebase';
    import {authState} from 'rxfire/auth';

    let user = authState(auth);

   // const unsubscribe = authState(auth).subscribe(u => user = u);

    function logout() {
        auth.signOut();
    }
    function login() {
        auth.signInWithPopup(googleProvider);
    }

</script>

<section class="flex flex-col justify-center">
    <h1 class="text-6xl text-blue-400 px-2 py-10">Todo App With Firebase and Svelte</h1>
    {#if $user}
        <Profile {...$user}/>
        <button class="my-10 py-4 bg-blue-500 text-white text-bold rounded shadow-md" on:click={logout}>Logout</button>
        <hr>
        <Todos uid={$user.uid} />
    {:else}
    <button class="my-5 py-4 bg-blue-500 text-white text-bold rounded shadow-md" on:click={login}>Signin with Google</button>

    {/if}
</section>