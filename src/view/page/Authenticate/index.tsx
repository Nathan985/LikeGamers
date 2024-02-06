import { UserIcon } from "@heroicons/react/20/solid";
import React from "react";
import { Button } from "view/components/Button";
import { Input } from "view/components/Input";
import Banner from "assets/images/banner-login.png";
import { useAuthenticate } from "./useAuthenticate";

export const Authenticate: React.FC = () => {
    const { errors, onHandleSubmit, register } = useAuthenticate();

    return (
        <div className="flex flex-col dark:bg-slate-900 w-screen h-screen justify-center items-center">
            <div className="flex flex-row dark:bg-slate-800 bg-white w-full h-full lg:w-8/12 xl:h-3/4 xl:rounded-xl max-w-[1360px] overflow-hidden xl:shadow-lg">
                <div className="flex w-[50%] flex-1 p-4">
                    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-slate-300">
                                Entre na sua conta
                            </h2>
                        </div>

                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form
                                className="space-y-10"
                                onSubmit={onHandleSubmit}
                            >
                                <div className="flex flex-col gap-4">
                                    <div>
                                        <Input.Root>
                                            <Input.Label className="dark:text-gray-100">
                                                Username
                                            </Input.Label>
                                            <Input.Group>
                                                <Input.AddOn Icon={UserIcon} />
                                                <Input.Field
                                                    className=" dark:bg-gray-900 dark:text-gray-200 dark:focus:text-white dark:ring-slate-700 outline-none dark:focus:bg-slate-900 focus:bg-white transition-all"
                                                    {...register("username")}
                                                />
                                            </Input.Group>
                                            <Input.Error
                                                show={
                                                    errors.username?.message !==
                                                    undefined
                                                }
                                            >
                                                {errors.username?.message}
                                            </Input.Error>
                                        </Input.Root>
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    className="dark:bg-indigo-600 dark:text-white"
                                >
                                    Entrar
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="hidden w-[50%] h-full p-5 justify-center items-center dark:bg-indigo-900 bg-indigo-600 xl:flex">
                    <div
                        className="flex w-full h-[340px] rounded-lg bg-cover bg-no-repeat"
                        style={{
                            backgroundSize: "contain",
                            backgroundImage: `url(${Banner})`,
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
};
