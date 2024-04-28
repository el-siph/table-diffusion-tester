<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import type { ClientState } from "./src/interfaces";
    export let state: ClientState;
    export let isVerboseMode: boolean;

    let popCount = 1;

    const dispatch = createEventDispatcher();
    function handlePopToPile() {
        dispatch("popToPile", { popCount });
    }

    function handlePopToDeck() {
        dispatch("popToDeck", { popCount });
    }
</script>

<div class="flex flex-1 flex-col gap-4 border py-5 px-8">
    <h3>Player Details</h3>
    <p>ID: {state._playerId}</p>
    <p>Name: {state._playerName}</p>
    <p>Deck: {state.playerDeck?.length ?? 0} cards</p>

    <div class="flex flex-col">
        <span class="flex flex-row flex-1">
            <label for="table-pop-count">Pop Count </label>
            <input id="table-pop-count" type="number" bind:value={popCount} />
        </span>
        <div class="flex flex-1 flex-col justify-center gap-10">
            <button on:click={handlePopToPile}>Pop to Pile</button>
        </div>
    </div>
</div>
