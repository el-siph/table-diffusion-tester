<script lang="ts">
    import { onMount } from "svelte";
    import type { PlayingCard } from "./interfaces";

    /* Card Image Assets */
    import c1 from "../src/img/french-trad/c1.png";
    import c2 from "../src/img/french-trad/c2.png";
    import c3 from "../src/img/french-trad/c3.png";
    import c4 from "../src/img/french-trad/c4.png";
    import c5 from "../src/img/french-trad/c5.png";
    import c6 from "../src/img/french-trad/c6.png";
    import c7 from "../src/img/french-trad/c7.png";
    import c8 from "../src/img/french-trad/c8.png";
    import c9 from "../src/img/french-trad/c9.png";
    import c10 from "../src/img/french-trad/c10.png";
    import c11 from "../src/img/french-trad/c11.png";
    import c12 from "../src/img/french-trad/c12.png";
    import c13 from "../src/img/french-trad/c13.png";

    import d1 from "../src/img/french-trad/d1.png";
    import d2 from "../src/img/french-trad/d2.png";
    import d3 from "../src/img/french-trad/d3.png";
    import d4 from "../src/img/french-trad/d4.png";
    import d5 from "../src/img/french-trad/d5.png";
    import d6 from "../src/img/french-trad/d6.png";
    import d7 from "../src/img/french-trad/d7.png";
    import d8 from "../src/img/french-trad/d8.png";
    import d9 from "../src/img/french-trad/d9.png";
    import d10 from "../src/img/french-trad/d10.png";
    import d11 from "../src/img/french-trad/d11.png";
    import d12 from "../src/img/french-trad/d12.png";
    import d13 from "../src/img/french-trad/d13.png";

    import h1 from "../src/img/french-trad/h1.png";
    import h2 from "../src/img/french-trad/h2.png";
    import h3 from "../src/img/french-trad/h3.png";
    import h4 from "../src/img/french-trad/h4.png";
    import h5 from "../src/img/french-trad/h5.png";
    import h6 from "../src/img/french-trad/h6.png";
    import h7 from "../src/img/french-trad/h7.png";
    import h8 from "../src/img/french-trad/h8.png";
    import h9 from "../src/img/french-trad/h9.png";
    import h10 from "../src/img/french-trad/h10.png";
    import h11 from "../src/img/french-trad/h11.png";
    import h12 from "../src/img/french-trad/h12.png";
    import h13 from "../src/img/french-trad/h13.png";

    import s1 from "../src/img/french-trad/s1.png";
    import s2 from "../src/img/french-trad/s2.png";
    import s3 from "../src/img/french-trad/s3.png";
    import s4 from "../src/img/french-trad/s4.png";
    import s5 from "../src/img/french-trad/s5.png";
    import s6 from "../src/img/french-trad/s6.png";
    import s7 from "../src/img/french-trad/s7.png";
    import s8 from "../src/img/french-trad/s8.png";
    import s9 from "../src/img/french-trad/s9.png";
    import s10 from "../src/img/french-trad/s10.png";
    import s11 from "../src/img/french-trad/s11.png";
    import s12 from "../src/img/french-trad/s12.png";
    import s13 from "../src/img/french-trad/s13.png";

    enum Suits {
        clover = "clover",
        diamonds = "diamonds",
        hearts = "hearts",
        spades = "spades",
    }

    export let card: PlayingCard;
    export let lastUpdated: string;

    let src: string;

    onMount(() => {
        if (card._suit === Suits.clover) {
            switch (card._pips) {
                case 1:
                    src = c1;
                    break;
                case 2:
                    src = c2;
                    break;
                case 3:
                    src = c3;
                    break;
                case 4:
                    src = c4;
                    break;
                case 5:
                    src = c5;
                    break;
                case 6:
                    src = c6;
                    break;
                case 7:
                    src = c7;
                    break;
                case 8:
                    src = c8;
                    break;
                case 9:
                    src = c9;
                    break;
                case 10:
                    src = c10;
                    break;
                case 11:
                    src = c11;
                    break;
                case 12:
                    src = c12;
                    break;
                case 13:
                    src = c13;
                    break;
            }
        }

        if (card._suit === Suits.diamonds) {
            switch (card._pips) {
                case 1:
                    src = d1;
                    break;
                case 2:
                    src = d2;
                    break;
                case 3:
                    src = d3;
                    break;
                case 4:
                    src = d4;
                    break;
                case 5:
                    src = d5;
                    break;
                case 6:
                    src = d6;
                    break;
                case 7:
                    src = d7;
                    break;
                case 8:
                    src = d8;
                    break;
                case 9:
                    src = d9;
                    break;
                case 10:
                    src = d10;
                    break;
                case 11:
                    src = d11;
                    break;
                case 12:
                    src = d12;
                    break;
                case 13:
                    src = d13;
                    break;
            }
        }

        if (card._suit === Suits.hearts) {
            switch (card._pips) {
                case 1:
                    src = h1;
                    break;
                case 2:
                    src = h2;
                    break;
                case 3:
                    src = h3;
                    break;
                case 4:
                    src = h4;
                    break;
                case 5:
                    src = h5;
                    break;
                case 6:
                    src = h6;
                    break;
                case 7:
                    src = h7;
                    break;
                case 8:
                    src = h8;
                    break;
                case 9:
                    src = h9;
                    break;
                case 10:
                    src = h10;
                    break;
                case 11:
                    src = h11;
                    break;
                case 12:
                    src = h12;
                    break;
                case 13:
                    src = h13;
                    break;
            }
        }

        if (card._suit === Suits.spades) {
            switch (card._pips) {
                case 1:
                    src = s1;
                    break;
                case 2:
                    src = s2;
                    break;
                case 3:
                    src = s3;
                    break;
                case 4:
                    src = s4;
                    break;
                case 5:
                    src = s5;
                    break;
                case 6:
                    src = s6;
                    break;
                case 7:
                    src = s7;
                    break;
                case 8:
                    src = s8;
                    break;
                case 9:
                    src = s9;
                    break;
                case 10:
                    src = s10;
                    break;
                case 11:
                    src = s11;
                    break;
                case 12:
                    src = s12;
                    break;
                case 13:
                    src = s13;
                    break;
            }
        }
    });
</script>

<img {src} alt={`${card._pips} of ${card._suit}`} />
