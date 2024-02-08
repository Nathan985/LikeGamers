import React from "react";
import { Game } from "shared/providers/GameProvider/@types";
import { BookmarkIcon } from "@heroicons/react/20/solid";
import { cn } from "shared/helpers";
import Ratting from "../Ratting";

export type ICardType = Game & {
    isBookMark?: boolean;
};

const Card: React.FC<ICardType> = ({ isBookMark = true, ...data }) => {
    return (
        <div className="flex relative flex-col group rounded-2xl hover:scale-105 transition-all cursor-pointer w-[382px] h-[542px] overflow-hidden bg-white shadow-xl">
            <div className="absolute transition-all opacity-0 group-hover:opacity-100 flex justify-center items-center w-full h-full z-20 bg-black/80">
                <BookmarkIcon className="w-8 h-8 fill-white" />
            </div>
            <BookmarkIcon
                className={cn(
                    "absolute hidden top-3 right-3 w-5 h-5 fill-yellow-300",
                    isBookMark && "block"
                )}
            />
            <div className="relative flex-1 py-8 px-2">
                <div className="inline-block  w-full h-[83%] transform rounded-xl bg-white px-1 p-2">
                    <div
                        className="flex w-full transition-all h-full p-1 bg-cover bg-center bg-no-repeat rounded-lg"
                        style={{
                            backgroundImage: `url("${data.background_image}")`,
                        }}
                    ></div>
                </div>

                <div className="">
                    <h3 className="text-2xl pl-1 font-semibold text-black">
                        {data.name}
                    </h3>
                    <Ratting ratting={data.rating} />
                </div>
            </div>
        </div>
    );
};

export default Card;
