import React from "react";
import { INavbarItemType } from "./interface";
import { cn } from "shared/helpers";

// import { Container } from './styles';

const NavbarItem: React.FC<INavbarItemType> = ({
    currentRoute,
    onClick,
    Icon,
    title,
    className,
}) => {
    return (
        <li className={cn(className)} onClick={onClick}>
            <p
                className={cn(
                    currentRoute
                        ? "bg-gray-50 dark:bg-gray-700 dark:text-white  text-indigo-600"
                        : "text-gray-700 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                    "group flex gap-x-3 rounded-md cursor-pointer p-2 text-sm leading-6 font-semibold"
                )}
            >
                <Icon
                    className={cn(
                        currentRoute
                            ? "text-indigo-600 dark:text-white"
                            : "text-gray-400 dark:group-hover:text-white group-hover:text-indigo-600",
                        "h-6 w-6 shrink-0"
                    )}
                    aria-hidden="true"
                />
                {title}
            </p>
        </li>
    );
};

export default NavbarItem;
