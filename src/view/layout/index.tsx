import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
    ArrowLeftStartOnRectangleIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import { cn } from "shared/helpers";
import { Outlet } from "react-router-dom";
import { useLayout } from "./useLayout";
import Navbar from "./components/Navbar";
import { BookmarkIcon, PlayIcon } from "@heroicons/react/24/outline";

export const Layout = () => {
    const { setSidebarOpen, sidebarOpen, onHandleNavigation, onHandleLogout } =
        useLayout();

    return (
        <>
            <div className="w-full h-full overflow-hidden">
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog
                        as="div"
                        className="relative z-50 lg:hidden"
                        onClose={setSidebarOpen}
                    >
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-900/80" />
                        </Transition.Child>

                        <div className="fixed inset-0 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-300"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                                            <button
                                                type="button"
                                                className="-m-2.5 p-2.5"
                                                onClick={() =>
                                                    setSidebarOpen(false)
                                                }
                                            >
                                                <span className="sr-only">
                                                    Close sidebar
                                                </span>
                                                <XMarkIcon
                                                    className="h-6 w-6 text-white"
                                                    aria-hidden="true"
                                                />
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                                        <div className="flex h-16 shrink-0 items-center"></div>
                                        <nav className="flex flex-1 flex-col">
                                            <ul
                                                role="list"
                                                className="flex flex-1 flex-col gap-y-7"
                                            >
                                                <li>
                                                    <ul
                                                        role="list"
                                                        className="-mx-2 space-y-1"
                                                    >
                                                        <li
                                                            onClick={() =>
                                                                onHandleNavigation(
                                                                    "/dashboard"
                                                                )
                                                            }
                                                        >
                                                            <p
                                                                className={cn(
                                                                    // item.current
                                                                    //     ? "bg-gray-50 text-indigo-600"
                                                                    "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                                                                    "group flex gap-x-3 rounded-md cursor-pointer p-2 text-sm leading-6 font-semibold"
                                                                )}
                                                            >
                                                                <PlayIcon
                                                                    className={cn(
                                                                        // item.current
                                                                        //     ? "text-indigo-600"
                                                                        "text-gray-400 group-hover:text-indigo-600",
                                                                        "h-6 w-6 shrink-0"
                                                                    )}
                                                                    aria-hidden="true"
                                                                />
                                                                Jogos
                                                            </p>
                                                        </li>
                                                        <li
                                                            onClick={() =>
                                                                onHandleNavigation(
                                                                    "/favorites"
                                                                )
                                                            }
                                                        >
                                                            <p
                                                                className={cn(
                                                                    // item.current
                                                                    //     ? "bg-gray-50 text-indigo-600"
                                                                    "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                                                                    "group flex gap-x-3 rounded-md cursor-pointer p-2 text-sm leading-6 font-semibold"
                                                                )}
                                                            >
                                                                <BookmarkIcon
                                                                    className={cn(
                                                                        // item.current
                                                                        //     ? "text-indigo-600"
                                                                        "text-gray-400 group-hover:text-indigo-600",
                                                                        "h-6 w-6 shrink-0"
                                                                    )}
                                                                    aria-hidden="true"
                                                                />
                                                                Favoritos
                                                            </p>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="mt-auto">
                                                    <p className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600">
                                                        <ArrowLeftStartOnRectangleIcon
                                                            className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                                                            aria-hidden="true"
                                                        />
                                                        Logout
                                                    </p>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>
                <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
                        <div className="flex h-16 shrink-0 items-center"></div>
                        <nav className="flex flex-1 flex-col">
                            <ul
                                role="list"
                                className="flex flex-1 flex-col gap-y-7"
                            >
                                <li>
                                    <ul role="list" className="-mx-2 space-y-1">
                                        <li
                                            onClick={() =>
                                                onHandleNavigation("/dashboard")
                                            }
                                        >
                                            <p
                                                className={cn(
                                                    // item.current
                                                    //     ? "bg-gray-50 text-indigo-600"
                                                    "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                                                    "group flex gap-x-3 rounded-md cursor-pointer p-2 text-sm leading-6 font-semibold"
                                                )}
                                            >
                                                <PlayIcon
                                                    className={cn(
                                                        // item.current
                                                        //     ? "text-indigo-600"
                                                        "text-gray-400 group-hover:text-indigo-600",
                                                        "h-6 w-6 shrink-0"
                                                    )}
                                                    aria-hidden="true"
                                                />
                                                Jogos
                                            </p>
                                        </li>
                                        <li
                                            onClick={() =>
                                                onHandleNavigation("/favorites")
                                            }
                                        >
                                            <p
                                                className={cn(
                                                    // item.current
                                                    //     ? "bg-gray-50 text-indigo-600"
                                                    "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                                                    "group flex gap-x-3 rounded-md cursor-pointer p-2 text-sm leading-6 font-semibold"
                                                )}
                                            >
                                                <BookmarkIcon
                                                    className={cn(
                                                        // item.current
                                                        //     ? "text-indigo-600"
                                                        "text-gray-400 group-hover:text-indigo-600",
                                                        "h-6 w-6 shrink-0"
                                                    )}
                                                    aria-hidden="true"
                                                />
                                                Favoritos
                                            </p>
                                        </li>
                                    </ul>
                                </li>
                                <li
                                    className="mt-auto"
                                    onClick={onHandleLogout}
                                >
                                    <p className="group -mx-2 cursor-pointer flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600">
                                        <ArrowLeftStartOnRectangleIcon
                                            className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                                            aria-hidden="true"
                                        />
                                        Logout
                                    </p>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="lg:pl-72 h-full">
                    <Navbar />

                    <main className="py-10 h-full w-full bg-[#f8f8ff]">
                        <div className="px-4 h-full w-full sm:px-6 lg:px-8">
                            <Outlet />
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
};
