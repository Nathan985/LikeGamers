import { QKGameProvider } from "shared/config"
import { IFindAllGamesParams } from "./interface"
import { Game } from "shared/providers/GameProvider/@types"

export type State = {
  [QKGameProvider.FIND_ALL]: IFindAllGamesParams
  [QKGameProvider.FAVORITE_GAMES]: Array<Game>
}

export type IFindAllAction = {
  type: QKGameProvider.FIND_ALL,
  payload: IFindAllGamesParams
}

export type IFavoriteGamesAction = {
  type: QKGameProvider.FAVORITE_GAMES,
  payload: Array<Game>
}

export type IActions = IFindAllAction | IFavoriteGamesAction;

export const reducer = (state: State, action: IActions) => {
  return { ...state, [action.type]: action.payload }
} 

export const initialState: State = {
  findAllGames: {
    search: undefined
  },
  favoriteGames: []
}