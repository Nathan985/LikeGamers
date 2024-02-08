import React, { useCallback } from "react";
import { cn } from "shared/helpers";
import { StarIcon } from "@heroicons/react/20/solid";
import RatingComponent from "react-rating";

type IRattingType = {
    ratting: number;
};

const Ratting: React.FC<IRattingType> = ({ ratting }) => {
    const stars = useCallback(() => {
        if (ratting >= 5) {
            return 5;
        }

        if (ratting <= 0) {
            return 0;
        }

        return Math.round(ratting);
    }, [ratting]);

    return (
        <div className="mt-1 p-1">
            <RatingComponent
                start={0}
                stop={5}
                initialRating={stars()}
                readonly
                emptySymbol={<StarIcon className="w-5 h-5 text-gray-300" />}
                fullSymbol={<StarIcon className="w-5 h-5 text-yellow-300" />}
            />
        </div>
    );
};

export default Ratting;
