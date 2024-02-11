"use sctrict";

import React from "react";
import { useFavorites } from "./useFavorite";
import Card from "../Dashboard/components/Card";
import EmptyState from "./components/EmptyState";

const Favorites: React.FC = () => {
    const { favoriteGames } = useFavorites();

    const data = favoriteGames();

    return (
        <div className="flex flex-col w-full h-full p-4 justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  min-[1920px]:grid-cols-5  gap-y-6 gap-x-1 max-w-[1940px] scroll-slim overflow-y-auto max-h-[92%] border-4 border-transparent p-4 w-full h-full">
                {data.length <= 0 && <EmptyState />}
                {data.map((data, key) => (
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
