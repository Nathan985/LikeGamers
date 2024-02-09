import { createContext, useEffect, useReducer } from "react";
import { ICreateContext, ICreateContextProvider } from "./interface";
import { QueryFunction, useInfiniteQuery } from "@tanstack/react-query";
import { QKGameProvider } from "shared/config";
import { gameProvider } from "shared/providers";
import { IGameProviderRequest } from "shared/providers/GameProvider/interface";
import { IActions, initialState, reducer } from "./reducer";
import { localStorageAdapter } from "shared/helpers";
import { Game } from "shared/providers/GameProvider/@types";

export const GameContext = createContext({} as ICreateContext);

export const GameContextProvider: React.FC<ICreateContextProvider> = ({
    children,
}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const onFetchGames: QueryFunction<
        IGameProviderRequest.FindAllGames.Result,
        any,
        any
    > = async ({ pageParam: page }) => {
        const response = await gameProvider.findAllGames({
            page,
            page_size: 10,
            ...state[QKGameProvider.FIND_ALL],
        });

        return response;
    };

    const onSyncFavoriteGames = (data: Array<Game>) => {
        localStorageAdapter.set("@favorite_games", data);
    };

    const onLoadingFavorites = () => {
        const favoriteGames =
            localStorageAdapter.get<Array<Game>>("@favorite_games") || [];
        setQuery(QKGameProvider.FAVORITE_GAMES, favoriteGames);
    };

    const onFavoriteGame = (props: Game) => {
        const data = [...state[QKGameProvider.FAVORITE_GAMES], props];
        setQuery(QKGameProvider.FAVORITE_GAMES, data);
        onSyncFavoriteGames(data);
    };

    const onRemoveFavorites = (id: number) => {
        const data = state[QKGameProvider.FAVORITE_GAMES].filter(
            (props) => props.id !== id
        );
        setQuery(QKGameProvider.FAVORITE_GAMES, data);
        onSyncFavoriteGames(data);
    };

    useEffect(() => {
        onLoadingFavorites();
    }, []);

    const setQuery = (type: IActions["type"], payload: IActions["payload"]) => {
        dispatch({ payload, type } as IActions);
    };

    const findAllGames = useInfiniteQuery({
        queryKey: [QKGameProvider.FIND_ALL, state[QKGameProvider.FIND_ALL]],
        initialPageParam: 1,
        getNextPageParam: (lastPage, _, page) => {
            if (!lastPage.next) {
                return 1;
            }

            const nextPage = page + 1;
            return nextPage;
        },
        queryFn: onFetchGames,
        staleTime: Infinity,
    });

    return (
        <GameContext.Provider
            value={{
                findAllGames,
                setQuery,
                state,
                onFavoriteGame,
                onRemoveFavorites,
            }}
        >
            {children}
        </GameContext.Provider>
    );
};
