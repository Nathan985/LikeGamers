import { Game, IRequest } from "./@types"

export type IGameProviderType = {
  findAllGames: (data: IGameProviderRequest.FindAllGames.Params) => Promise<IGameProviderRequest.FindAllGames.Result>
}

export namespace IGameProviderRequest {
  export namespace FindAllGames {
    export type Params = {
      page?: number
      page_size?: number
      search?: string
    }

    export type Result = IRequest<Game>
  }
}