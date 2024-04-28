export function requestJoinTable(
  socket: any,
  playerName: string,
  tableCode: string,
) {
  if (socket) {
    const msgBody = {
      action: "joinTable",
      payload: {
        playerName,
        tableCode,
      },
    };
    socket.send(JSON.stringify(msgBody));
  }
}

export function requestGenerateTableDeck(socket: any, tableId: string) {
  if (socket) {
    const msgBody = {
      action: "generateTableDeck",
      payload: {
        tableId,
      },
    };
    socket.send(JSON.stringify(msgBody));
  }
}

export function requestGetTableState(socket: any, tableId: string) {
  if (socket) {
    const msgBody = {
      action: "getTableState",
      payload: {
        tableId,
      },
    };
    socket.send(JSON.stringify(msgBody));
  }
}

export function requestShuffleDeck(socket: any, tableId: string) {
  if (socket) {
    const msgBody = {
      action: "shuffleTableDeck",
      payload: {
        tableId,
      },
    };
    socket.send(JSON.stringify(msgBody));
  }
}

export function requestDivideDeck(socket: any, tableId: string) {
  if (socket) {
    const msgBody = {
      action: "divideTableDeck",
      payload: {
        tableId,
      },
    };
    socket.send(JSON.stringify(msgBody));
  }
}

export function requestPopTableDeckToPlayer(
  socket: any,
  tableId: string,
  playerId: string,
  popCount: number,
) {
  console.log("popping from Table to Player");
  if (socket) {
    const msgBody = {
      action: "popTableToPlayer",
      payload: {
        tableId,
        playerId,
        cardCount: popCount,
      },
    };
    socket.send(JSON.stringify(msgBody));
  }
}

export function requestPopTableDeckToPile(
  socket: any,
  tableId: string,
  popCount: number,
) {
  if (socket) {
    const msgBody = {
      action: "popTableToPile",
      payload: {
        tableId,
        cardCount: popCount,
      },
    };
    socket.send(JSON.stringify(msgBody));
  }
}

export function requestPopPlayerToPile(
  socket: any,
  tableId: string,
  playerId: string,
  popCount: number,
) {
  if (socket) {
    const msgBody = {
      action: "popPlayerToPile",
      payload: {
        tableId,
        playerId,
        cardCount: popCount,
      },
    };
    socket.send(JSON.stringify(msgBody));
  }
}
