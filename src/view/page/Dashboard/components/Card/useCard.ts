import { QKGameProvider } from "shared/config";
import { useGameContext } from "shared/context/GameContext/useGameContext"
import { Game } from "shared/providers/GameProvider/@types"

export const useCard = () => {

  const { onFavoriteGame, onRemoveFavorites, state } = useGameContext();

   const onHandleFavoriteGame = (data: Game) => onFavoriteGame(data);

   const onHandleRemoveFavorite = (id: number) => onRemoveFavorites(id);


   const favoriteGames = state[QKGameProvider.FAVORITE_GAMES];


   return {
    onHandleFavoriteGame,
    onHandleRemoveFavorite,
    favoriteGames
   }
}