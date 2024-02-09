import React from "react";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "router";
import { AuthContextProvider } from "shared/context/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GameContextProvider } from "shared/context/GameContext";
import { LayoutContextProvider } from "view/layout/context";

export const App: React.FC = () => {
    const queryClient = new QueryClient();

    return (
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
    );
};
