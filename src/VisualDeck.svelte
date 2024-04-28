<script lang="ts">
    import type { PlayingCard } from "./interfaces";

    export let cards: PlayingCard[];
    export let deckTitle: string;

    import CardImage from "./CardImage.svelte";
</script>

<h3>{deckTitle}</h3>
<main class="grid grid-cols-12">
    {#each cards as card}
        <CardImage {card} lastUpdated={"EENT"} />
    {/each}
</main>
