<script lang="ts">
    import type { PlayingCard } from "./interfaces";
    // import * as imgAsset from "./CardImageAssets";

    enum Suits {
        clover = "clover",
        diamonds = "diamonds",
        hearts = "hearts",
        spades = "spades",
    }

    export let card: PlayingCard;

    // let src;

    // if (card._suit === Suits.clover) {
    //     switch (card._pips) {
    //         case 1:
    //             src = imgAsset.c1;
    //             break;
    //         case 2:
    //             src = imgAsset.c2;
    //             break;
    //         case 3:
    //             src = imgAsset.c3;
    //             break;
    //         case 4:
    //             src = imgAsset.c4;
    //             break;
    //         case 5:
    //             src = imgAsset.c5;
    //             break;
    //         case 6:
    //             src = imgAsset.c6;
    //             break;
    //         case 7:
    //             src = imgAsset.c7;
    //             break;
    //         case 8:
    //             src = imgAsset.c8;
    //             break;
    //         case 9:
    //             src = imgAsset.c9;
    //             break;
    //         case 10:
    //             src = imgAsset.c10;
    //             break;
    //         case 11:
    //             src = imgAsset.c11;
    //             break;
    //         case 12:
    //             src = imgAsset.c12;
    //             break;
    //         case 13:
    //             src = imgAsset.c13;
    //             break;
    //     }
    // }

    // if (card._suit === Suits.diamonds) {
    //     switch (card._pips) {
    //         case 1:
    //             src = imgAsset.d1;
    //             break;
    //         case 2:
    //             src = imgAsset.d2;
    //             break;
    //         case 3:
    //             src = imgAsset.d3;
    //             break;
    //         case 4:
    //             src = imgAsset.d4;
    //             break;
    //         case 5:
    //             src = imgAsset.d5;
    //             break;
    //         case 6:
    //             src = imgAsset.d6;
    //             break;
    //         case 7:
    //             src = imgAsset.d7;
    //             break;
    //         case 8:
    //             src = imgAsset.d8;
    //             break;
    //         case 9:
    //             src = imgAsset.d9;
    //             break;
    //         case 10:
    //             src = imgAsset.d10;
    //             break;
    //         case 11:
    //             src = imgAsset.d11;
    //             break;
    //         case 12:
    //             src = imgAsset.d12;
    //             break;
    //         case 13:
    //             src = imgAsset.d13;
    //             break;
    //     }
    // }

    // if (card._suit === Suits.hearts) {
    //     switch (card._pips) {
    //         case 1:
    //             src = imgAsset.h1;
    //             break;
    //         case 2:
    //             src = imgAsset.h2;
    //             break;
    //         case 3:
    //             src = imgAsset.h3;
    //             break;
    //         case 4:
    //             src = imgAsset.h4;
    //             break;
    //         case 5:
    //             src = imgAsset.h5;
    //             break;
    //         case 6:
    //             src = imgAsset.h6;
    //             break;
    //         case 7:
    //             src = imgAsset.h7;
    //             break;
    //         case 8:
    //             src = imgAsset.h8;
    //             break;
    //         case 9:
    //             src = imgAsset.h9;
    //             break;
    //         case 10:
    //             src = imgAsset.h10;
    //             break;
    //         case 11:
    //             src = imgAsset.h11;
    //             break;
    //         case 12:
    //             src = imgAsset.h12;
    //             break;
    //         case 13:
    //             src = imgAsset.h13;
    //             break;
    //     }
    // }

    // if (card._suit === Suits.spades) {
    //     switch (card._pips) {
    //         case 1:
    //             src = imgAsset.s1;
    //             break;
    //         case 2:
    //             src = imgAsset.s2;
    //             break;
    //         case 3:
    //             src = imgAsset.s3;
    //             break;
    //         case 4:
    //             src = imgAsset.s4;
    //             break;
    //         case 5:
    //             src = imgAsset.s5;
    //             break;
    //         case 6:
    //             src = imgAsset.s6;
    //             break;
    //         case 7:
    //             src = imgAsset.s7;
    //             break;
    //         case 8:
    //             src = imgAsset.s8;
    //             break;
    //         case 9:
    //             src = imgAsset.s9;
    //             break;
    //         case 10:
    //             src = imgAsset.s10;
    //             break;
    //         case 11:
    //             src = imgAsset.s11;
    //             break;
    //         case 12:
    //             src = imgAsset.s12;
    //             break;
    //         case 13:
    //             src = imgAsset.s13;
    //             break;
    //     }
    // }

    /** API method */
    const host = import.meta.env.VITE_API_URL;
    $: srcAddr = card._suit.substring(0, 1) + card._pips;
</script>

<img
    src={`${host}/img/french-trad/${srcAddr}.png`}
    alt={`${card._pips} of ${card._suit}`}
/>
