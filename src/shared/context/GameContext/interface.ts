import { InfiniteData, UseInfiniteQueryResult } from "@tanstack/react-query"
import { ReactNode } from "react"
import { IGameProviderRequest } from "shared/providers/GameProvider/interface"
import { IActions, State } from "./reducer"

export type ICreateContextProvider = {
  children: ReactNode
}

export type ICreateContext = {
  findAllGames: UseInfiniteQueryResult<InfiniteData<IGameProviderRequest.FindAllGames.Result, unknown>, Error>
  state: State,
  setQuery: (type: IActions['type'], payload: IActions['payload']) => void
}

export type IFindAllGamesParams = Pick<IGameProviderRequest.FindAllGames.Params, 'search'>;