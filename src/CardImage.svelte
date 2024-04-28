<script lang="ts">
    import type { PlayingCard } from "./interfaces";
    export let card: PlayingCard;

    const host = import.meta.env.VITE_API_URL;
    $: srcAddr = card._suit.substring(0, 1) + card._pips;
</script>

<img
    src={`${host}/img/french-trad/${srcAddr}.png`}
    alt={`${card._pips} of ${card._suit}`}
/>
