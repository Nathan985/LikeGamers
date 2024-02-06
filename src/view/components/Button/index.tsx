import { ComponentProps } from "react";
import { Spinner } from "../Spinner";

import { cn } from "shared/helpers";

type ButtonProps = ComponentProps<"button"> & {
    isLoading?: boolean;
};

export function Button({
    className,
    isLoading,
    disabled,
    children,
    ...props
}: ButtonProps) {
    return (
        <button
            {...props}
            disabled={disabled ?? isLoading}
            className={cn(
                "flex w-full justify-center items-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all ease-in-out duration-300",
                disabled && "bg-gray-500 hover:bg-gray-500 cursor-not-allowed",
                className
            )}
        >
            {isLoading && <Spinner className="w-6 h-6 fill-gray-400" />}
            {!isLoading && children}
        </button>
    );
}
