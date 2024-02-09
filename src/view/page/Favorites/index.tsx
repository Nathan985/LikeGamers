"use sctrict";

import React from "react";
import { useFavorites } from "./useFavorite";
import Card from "../Dashboard/components/Card";

const Favorites: React.FC = () => {
    const { favoriteGames } = useFavorites();

    return (
        <div className="flex flex-col w-full h-full p-4 justify-center items-center">
            <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 min-[1720px]:grid-cols-4 min-[1920px]:grid-cols-5 gap-6 max-w-[1940px] scroll-slim overflow-y-auto max-h-[92%] border-4 border-transparent p-4 w-full h-full">
                {favoriteGames().map((data, key) => (
                    <div
                        key={key}
                        className="flex w-full justify-center items-center col-span-1"
                    >
                        <Card {...data} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Favorites;
