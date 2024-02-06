import React from "react";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "router";
import { AuthContextProvider } from "shared/context/AuthContext";

export const App: React.FC = () => {
    return (
        <AuthContextProvider>
            <Toaster position="top-center" />
            <RouterProvider />
        </AuthContextProvider>
    );
};
