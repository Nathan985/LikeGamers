import { InfiniteData, UseInfiniteQueryResult } from "@tanstack/react-query"
import { ReactNode } from "react"
import { IGameProviderRequest } from "shared/providers/GameProvider/interface"
import { IActions, State } from "./reducer"
import { Game } from "shared/providers/GameProvider/@types"

export type ICreateContextProvider = {
  children: ReactNode
}

export type ICreateContext = {
  findAllGames: UseInfiniteQueryResult<InfiniteData<IGameProviderRequest.FindAllGames.Result, unknown>, Error>
  state: State,
  setQuery: (type: IActions['type'], payload: IActions['payload']) => void
  onFavoriteGame: (props: Game) => void
  onRemoveFavorites: (id: number) => void
}

export type IFindAllGamesParams = Pick<IGameProviderRequest.FindAllGames.Params, 'search'>;