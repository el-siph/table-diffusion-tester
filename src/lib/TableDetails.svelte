<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import type { ClientState } from "./interfaces";
    export let state: ClientState;
    export let playerList: { playerId; playerName }[];
    export let isVerboseMode: boolean;

    let popCount = 1;
    let sendToPlayerId: string | null = null;

    const dispatch = createEventDispatcher();
    function handlePopDeckToPlayer() {
        dispatch("popDeckToPlayer", { popCount });
    }

    function handlePopDeckToPile() {
        dispatch("popDeckToPile", { popCount });
    }
</script>

<div class="flex flex-1 flex-col gap-4 border py-5 px-8">
    {#if isVerboseMode}
        <h3>Table Details</h3>
        <p>ID: {state._tableId}</p>
        <p>Code: {state._tableCode}</p>
        <p>Player Count: {state._playerCount}</p>
        <p>Deck: {state.tableDeck?.length ?? 0} cards</p>
        <p>Pile: {state.activePile?.length ?? 0} cards</p>

        <h6>Player List</h6>
        <ul>
            {#each playerList as player}
                <li class:font-bold={player.playerId === state._playerId}>
                    {player.playerName}{player.playerId === state._playerId
                        ? " (You)"
                        : ""} - {player.playerId}
                </li>
            {/each}
        </ul>
    {/if}

    <label for="sendToPlayer" />
    <select bind:value={sendToPlayerId}>
        {#each playerList as player}
            {#if player.playerId !== state._playerId}
                <option value={player.playerId}>{player.playerName}</option>
            {/if}
        {/each}
    </select>

    <div class="flex flex-col">
        <span class="flex flex-row flex-1">
            <label for="table-pop-count">Pop Count </label>
            <input id="table-pop-count" type="number" bind:value={popCount} />
        </span>
        <div class="flex flex-1 flex-col justify-center gap-10">
            <button on:click={handlePopDeckToPlayer}>Pop Deck to Player</button>
            <button on:click={handlePopDeckToPile}>Pop Deck to Pile</button>
        </div>
    </div>
</div>

<style>
    /* div {
        border: 1px solid #eee;
        flex: 1;
        padding: 1rem 2rem;
    } */
</style>
