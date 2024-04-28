export interface PlayingCard {
  pips: number;
  suit: string;
}

export interface ClientState {
  connectedToServer: boolean;
  _tableId: string | null;
  _tableCode: string | null;
  _playerId: string | null;
  _playerName: string | null;
  _playerCount: number;
  _players: [];
  tableDeck: PlayingCard[];
  activePile: PlayingCard[];
  playerDeck: PlayingCard[];
}

export interface ServerResponse {
  type: string;
  data?:
    | {
        responseType: string;
        payload: string;
      }
    | string;
}

export const enum BroadcastTypes {
  confirmation = "confirmation",
  tableData = "tableData",
  registerData = "registerData",
  playerData = "playerData",
}
