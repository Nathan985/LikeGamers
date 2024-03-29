import React from "react";
import Card from "./components/Card";
import { Spinner } from "view/components/Spinner";
import { useDashboard } from "./useDashboard";

export const Dashboard: React.FC = () => {
    const { findAllGames, pages } = useDashboard();

    return (
        <div className="flex flex-col w-full h-full p-4 justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  min-[1920px]:grid-cols-5  gap-y-6 gap-x-1 max-w-[1940px] scroll-slim overflow-y-auto max-h-[92%] border-4 border-transparent p-4 w-full h-full">
                {pages?.map((props, index) => (
                    <React.Fragment key={index}>
                        {props.results.map((data, key) => (
                            <div
                                key={key}
                                className="flex w-full justify-center items-center col-span-1"
                            >
                                <Card {...data} />
                            </div>
                        ))}
                    </React.Fragment>
                ))}
                {findAllGames.isFetching && (
                    <div className="col-span-1 sm:col-span-2 md:col-span-3 xl:col-span-4  min-[1920px]:col-span-5 flex w-full justify-center py-2">
                        <Spinner className="w-8 h-8 text-gray-300" />
                    </div>
                )}
                <div className="grid-cols-5" id="scroll-next"></div>
            </div>
        </div>
    );
};
