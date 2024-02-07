import { AxiosInstance } from 'axios';
import { _httpProvider } from './_httpProvider';
import { IGameProviderRequest, IGameProviderType } from './interface';
import { Game } from './@types/Game';

export class GameProvider implements IGameProviderType {
  private readonly _httpProvider: AxiosInstance;

  constructor() {
    this._httpProvider = _httpProvider;
  }

  async findAllGames(data: IGameProviderRequest.FindAllGames.Params) {
    const response = await this._httpProvider.get<Game[]>('games', {
      params: data
    });

    return response.data;
  }
}