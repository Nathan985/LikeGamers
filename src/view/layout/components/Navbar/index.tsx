import { Menu, Transition } from "@headlessui/react";
import {
    Bars3Icon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    MoonIcon,
    SunIcon,
} from "@heroicons/react/20/solid";
import React, { Fragment } from "react";
import { cn } from "shared/helpers";
import Toggle from "view/components/Toggle";
import { useLayout } from "view/layout/useLayout";

const Navbar: React.FC = () => {
    const {
        onHandleChangeSearch,
        setSidebarOpen,
        user,
        onHandleLogout,
        toggleMode,
        darkMode,
    } = useLayout();

    return (
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b dark:bg-gray-900 dark:border-gray-800 border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button
                type="button"
                className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
                onClick={() => setSidebarOpen(true)}
            >
                <span className="sr-only">Open sidebar</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div
                className="h-6 w-px bg-gray-200 dark:bg-gray-800 lg:hidden"
                aria-hidden="true"
            />

            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                <form className="relative flex flex-1" action="#" method="GET">
                    <MagnifyingGlassIcon
                        className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
                        aria-hidden="true"
                    />
                    <input
                        id="search-field"
                        className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 dark:bg-gray-900 dark:text-gray-300 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                        placeholder="Busque pelo nome do jogo..."
                        type="text"
                        name="search"
                        onChange={onHandleChangeSearch}
                    />
                </form>
                <div className="flex items-center gap-x-4 lg:gap-x-6">
                    <Toggle onChange={toggleMode} value={darkMode}>
                        {({ enabled }) => (
                            <Fragment>
                                <span
                                    className={cn(
                                        enabled
                                            ? "translate-x-5"
                                            : "translate-x-0",
                                        "pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                                    )}
                                >
                                    <span
                                        className={cn(
                                            enabled
                                                ? "opacity-0 duration-100 ease-out"
                                                : "opacity-100 duration-200 ease-in",
                                            "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
                                        )}
                                        aria-hidden="true"
                                    >
                                        <SunIcon className="w-3 h-3" />
                                    </span>
                                    <span
                                        className={cn(
                                            enabled
                                                ? "opacity-100 duration-200 ease-in"
                                                : "opacity-0 duration-100 ease-out",
                                            "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
                                        )}
                                        aria-hidden="true"
                                    >
                                        <MoonIcon className="w-3 h-3" />
                                    </span>
                                </span>
                            </Fragment>
                        )}
                    </Toggle>
                    <div
                        className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200 dark:lg:bg-gray-400"
                        aria-hidden="true"
                    />
                    <Menu as="div" className="relative">
                        <Menu.Button className="-m-1.5 flex items-center p-1.5">
                            <span className="hidden lg:flex lg:items-center">
                                <span
                                    className="text-sm font-semibold leading-6 dark:text-gray-200 text-gray-900"
                                    aria-hidden="true"
                                >
                                    {user?.username}
                                </span>
                                <ChevronDownIcon
                                    className="ml-2 h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                />
                            </span>
                        </Menu.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white dark:bg-gray-800 py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                                <Menu.Item>
                                    {({ active }) => (
                                        <p
                                            onClick={onHandleLogout}
                                            className={cn(
                                                "block px-3 py-1 text-sm cursor-pointer leading-6 dark:text-gray-300 text-gray-900",
                                                active
                                                    ? "bg-gray-50 dark:bg-gray-700 "
                                                    : ""
                                            )}
                                        >
                                            Logout
                                        </p>
                                    )}
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
