import { QKGameProvider } from "shared/config"
import { IFindAllGamesParams } from "./interface"

export type State = {
  [QKGameProvider.FIND_ALL]: IFindAllGamesParams
}

export type IFinddAllAction = {
  type: QKGameProvider.FIND_ALL,
  payload: IFindAllGamesParams
}

export type IActions = IFinddAllAction;

export const reducer = (state: State, action: IActions) => {
  return { ...state, [action.type]: action.payload }
} 

export const initialState: State = {
  findAllGames: {
    search: undefined
  }
}