<script lang="ts">
    import PlayerDetails from "../PlayerDetails.svelte";
    import TableDetails from "./TableDetails.svelte";
    import {
        BroadcastTypes,
        type ClientState,
        type ServerResponse,
    } from "./interfaces";
    import VisualDeck from "./VisualDeck.svelte";

    let socket: WebSocket;

    let state: ClientState = {
        connectedToServer: false,
        _tableId: null,
        _tableCode: null,
        _playerId: null,
        _playerName: null,
        _playerCount: 0,
        _players: [],
        tableDeck: [],
        activePile: [],
        playerDeck: [],
    };

    let hostValue = "localhost";
    let portValue = "8080";
    let tableCodeValue = "";
    let playerNameValue = "";
    let lastReceivedResponse: string;
    let autoUpdateTableState = true;
    let isVerboseMode = false;

    let messages: string[] = [];
    $: playerList = Object.keys(state._players).map((playerId) => ({
        playerId,
        playerName: state._players[playerId]._playerName,
    }));

    function connectToServer() {
        socket = new WebSocket(`ws://${hostValue}:${portValue}/dealer`);
        socket.addEventListener("open", () => {
            state.connectedToServer = true;
        });
        socket.addEventListener("message", (response) => {
            handleMessage(response);
        });
    }

    function handleMessage(response: ServerResponse) {
        console.log("receiving message...");
        const { data } = response;

        if (data) {
            const { responseType, payload } =
                typeof data === "string" ? JSON.parse(data) : data;

            console.log(
                `type: ${responseType}, payload: ${JSON.stringify(payload)}`,
            );

            lastReceivedResponse = JSON.stringify(data);
            console.log("payload", payload);

            switch (responseType) {
                // if: data contains message, then: add message to the log
                case BroadcastTypes.confirmation:
                    messages = [
                        ...messages,
                        `${new Date().toISOString()} - ${payload["message"]}`,
                    ];
                    if (autoUpdateTableState && state._tableId) {
                        handleGetTableState();
                    }
                    break;

                // if: data contains registerData (on join), then: bind it to this client instance
                case BroadcastTypes.registerData:
                    Object.keys(payload).map((key) => {
                        console.log("key", key);
                        state[key] = payload[key];
                    });
                    break;

                // if: data contains Table, then: map through the returned Table
                case BroadcastTypes.tableData:
                    console.log("Receiving tableData");
                    console.log("payload", payload);
                    const table = payload["table"];

                    Object.keys(table).map((key) => {
                        state[key] = table[key];
                        // handle Table._cardDeck
                        if (key === "_cardDeck") {
                            const tableDeck = table[key]._cards;
                            console.log("table card deck", tableDeck);
                            state.tableDeck = tableDeck;

                            // handle Table._activePile
                        } else if (key === "_activePile") {
                            const activePile = table[key]._cards;
                            console.log("table pile deck", activePile);
                            state.activePile = activePile;

                            // handle Player._cardDeck
                        } else if (key === "_players") {
                            const playersData = table[key];
                            console.log("players data", table[key]);
                            Object.keys(playersData).map((playerId) => {
                                if (playerId === state._playerId) {
                                    const playerData = playersData[playerId];
                                    state.playerDeck =
                                        playerData._cardDeck._cards;
                                }
                            });
                        } else if (key === "_playerCount") {
                            state["playerCount"] = table[key];
                        }
                    });
                    break;

                case BroadcastTypes.playerData:
                    break;
            }
        }
    }

    function handleJoinTable() {
        if (socket) {
            const msgBody = {
                action: "joinTable",
                payload: {
                    playerName: playerNameValue,
                    tableCode: tableCodeValue,
                },
            };
            socket.send(JSON.stringify(msgBody));
        }
    }

    function handleGenerateTableDeck() {
        if (socket) {
            const { _tableId } = state;

            const msgBody = {
                action: "generateTableDeck",
                payload: {
                    tableId: _tableId,
                },
            };
            socket.send(JSON.stringify(msgBody));
        }
    }

    function handleGetTableState() {
        console.log("handleGetTableState");
        if (socket) {
            const { _tableId } = state;
            const msgBody = {
                action: "getTableState",
                payload: {
                    tableId: _tableId,
                },
            };
            socket.send(JSON.stringify(msgBody));
        }
    }

    function handleShuffleDeck() {
        if (socket) {
            const { _tableId } = state;

            const msgBody = {
                action: "shuffleTableDeck",
                payload: {
                    tableId: _tableId,
                },
            };
            socket.send(JSON.stringify(msgBody));
        }
    }

    function handleDivideDeck() {
        if (socket) {
            const { _tableId } = state;
            const msgBody = {
                action: "divideTableDeck",
                payload: {
                    tableId: _tableId,
                },
            };
            socket.send(JSON.stringify(msgBody));
        }
    }

    function handlePopTableDeckToPlayer(popCount: number) {
        console.log("popping from Table to Player");
        if (socket) {
            const { _tableId, _playerId } = state;
            const msgBody = {
                action: "popTableToPlayer",
                payload: {
                    tableId: _tableId,
                    playerId: _playerId,
                    cardCount: popCount,
                },
            };
            socket.send(JSON.stringify(msgBody));
        }
    }

    function handlePopTableDeckToPile(popCount: number) {
        console.log("popping from Table to Pile");
        if (socket) {
            const { _tableId } = state;
            const msgBody = {
                action: "popTableToPile",
                payload: {
                    tableId: _tableId,
                    cardCount: popCount,
                },
            };
            socket.send(JSON.stringify(msgBody));
        }
    }

    function handlePopPlayerToPile(popCount: number) {
        console.log("popping from Player to Pile");
        if (socket) {
            const { _tableId, _playerId } = state;
            const msgBody = {
                action: "popPlayerToPile",
                payload: {
                    tableId: _tableId,
                    playerId: _playerId,
                    cardCount: popCount,
                },
            };
            socket.send(JSON.stringify(msgBody));
        }
    }
</script>

<main>
    <div class="action-buttons" class:faded={state.connectedToServer}>
        <button on:click={connectToServer} disabled={state.connectedToServer}
            >{state.connectedToServer
                ? "Connected"
                : "Connect to Server"}</button
        >

        <input type="text" bind:value={hostValue} placeholder="hostname" />
        <input type="text" bind:value={portValue} placeholder="port" />
    </div>
    <div
        class="action-buttons"
        class:faded={!state.connectedToServer || state._tableId}
    >
        <button
            on:click={handleJoinTable}
            disabled={!state.connectedToServer ||
                state._tableId !== null ||
                tableCodeValue.length < 1 ||
                playerNameValue.length < 1}
            >{state._tableId ? "Joined" : "Join Table"}</button
        >
        <input
            type="text"
            placeholder="tableCode"
            bind:value={tableCodeValue}
            disabled={state._tableCode !== null}
        />

        <input
            type="text"
            placeholder="playerName"
            bind:value={playerNameValue}
            disabled={state._playerName !== null}
        />
    </div>
    <div class="action-buttons" class:faded={!state._tableId}>
        <button
            on:click={handleGenerateTableDeck}
            disabled={state._playerId === null || state.tableDeck.length > 0}
            >Generate Table Deck</button
        >

        <button
            on:click={handleShuffleDeck}
            disabled={!state.connectedToServer || !state.tableDeck.length}
            >Shuffle Table Deck</button
        >

        <button
            on:click={handleDivideDeck}
            disabled={!state.connectedToServer || !state.tableDeck.length}
            >Divide Table Deck</button
        >

        <button
            on:click={handleGetTableState}
            disabled={!state.connectedToServer || !state._tableId}
            >Get Table State</button
        >
    </div>

    <label>
        <input type="checkbox" bind:checked={autoUpdateTableState} /> Auto-Update
    </label>

    <div class="flex flex-row justify-start gap-2">
        <input
            name="is-verbose-check"
            type="checkbox"
            bind:checked={isVerboseMode}
        />
        <label for="is-verbose-check">Verbose Mode</label>
    </div>

    <p class:bold={state.connectedToServer}>
        {state.connectedToServer ? `Connected to Server` : "Not Connected"}
    </p>

    {#if !isVerboseMode}
        <div class="visual-decks flex flex-col w-full">
            <VisualDeck deckTitle={"Table Deck"} cards={state.tableDeck} />
            <VisualDeck deckTitle={"Active Pile"} cards={state.activePile} />
            <VisualDeck deckTitle={"Player Deck"} cards={state.playerDeck} />
        </div>
    {/if}
    <div class="detail-blocks">
        <TableDetails
            {state}
            {playerList}
            {isVerboseMode}
            on:popDeckToPlayer={(e) =>
                handlePopTableDeckToPlayer(e.detail.popCount)}
            on:popDeckToPile={(e) =>
                handlePopTableDeckToPile(e.detail.popCount)}
        />
        <PlayerDetails
            {state}
            {isVerboseMode}
            on:popToPile={(e) => handlePopPlayerToPile(e.detail.popCount)}
        />
    </div>

    {#if isVerboseMode}
        <div class="response-area">
            <h3>Latest Response</h3>
            <code>{lastReceivedResponse}</code>
        </div>

        <h3>Messages</h3>
        <div>
            {#each messages.reverse() as message}
                <p>{message}</p>
            {/each}
        </div>
    {/if}
</main>

<style lang="scss">
    .detail-blocks {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }

    .bold {
        font-weight: bold;
    }

    .faded {
        opacity: 0.6;
        pointer-events: none;
    }

    main {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .action-buttons {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        gap: 1rem;

        input {
            padding: 0.4rem;
        }
    }

    .response-area {
        height: 450px;
        border: 1px solid #eee;
        border-radius: 16px;
        padding: 1rem 2rem;
        margin: 1rem 0;
    }
</style>
