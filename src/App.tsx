import React from "react";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "router";
import { AuthContextProvider } from "shared/context/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GameContextProvider } from "shared/context/GameContext";
import { LayoutContextProvider } from "view/layout/context";
import { ApplicationContextProvider } from "shared/context/ApplicationContext";

export const App: React.FC = () => {
    const queryClient = new QueryClient();

    return (
        <ApplicationContextProvider>
            <AuthContextProvider>
                <QueryClientProvider client={queryClient}>
                    <Toaster position="top-center" />
                    <GameContextProvider>
                        <LayoutContextProvider>
                            <RouterProvider />
                        </LayoutContextProvider>
                    </GameContextProvider>
                </QueryClientProvider>
            </AuthContextProvider>
        </ApplicationContextProvider>
    );
};
