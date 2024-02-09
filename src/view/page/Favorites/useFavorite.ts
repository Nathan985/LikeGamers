import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { QKGameProvider } from "shared/config";
import { useGameContext } from "shared/context/GameContext/useGameContext"

export const useFavorites = () => {
  const { state } = useGameContext();
  const [searchParams] = useSearchParams();

  const favoriteGames = useCallback(() => {
    const data = state[QKGameProvider.FAVORITE_GAMES];
    const queryParam = searchParams.get('query');

    if(typeof queryParam === 'string') {
      console.log()
      return data.filter((props) => props.name.includes(queryParam))
    }

    return data;

  }, [searchParams, state[QKGameProvider.FAVORITE_GAMES]])

  // console.log(favoriteGames())

  return {
    favoriteGames
  }
}