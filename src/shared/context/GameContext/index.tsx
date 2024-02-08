import { createContext, useReducer } from "react";
import { ICreateContext, ICreateContextProvider } from "./interface";
import { QueryFunction, useInfiniteQuery } from "@tanstack/react-query";
import { QKGameProvider } from "shared/config";
import { gameProvider } from "shared/providers";
import { IGameProviderRequest } from "shared/providers/GameProvider/interface";
import { IActions, initialState, reducer } from "./reducer";

export const GameContext = createContext({} as ICreateContext);

export const GameContextProvider: React.FC<ICreateContextProvider> = ({
    children,
}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const onFetchGames: QueryFunction<
        IGameProviderRequest.FindAllGames.Result,
        QKGameProvider[],
        any
    > = async ({ pageParam: page }) => {
        const response = await gameProvider.findAllGames({
            page,
            page_size: 10,
        });

        return response;
    };

    const setQuery = (type: IActions["type"], payload: IActions["payload"]) => {
        dispatch({ payload, type });
    };

    const findAllGames = useInfiniteQuery({
        queryKey: [QKGameProvider.FIND_ALL],
        initialPageParam: 1,
        getNextPageParam: (lastPage, _, page) => {
            if (!lastPage.next) {
                return 1;
            }

            const nextPage = page + 1;
            return nextPage;
        },
        queryFn: onFetchGames,
    });

    return (
        <GameContext.Provider
            value={{
                findAllGames,
                setQuery,
                state,
            }}
        >
            {children}
        </GameContext.Provider>
    );
};
