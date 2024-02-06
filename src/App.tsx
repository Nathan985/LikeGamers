import React from "react";
import { RouterProvider } from "router";
import { AuthContextProvider } from "shared/context/AuthContext";

export const App: React.FC = () => {
    return (
        <AuthContextProvider>
            <RouterProvider />
        </AuthContextProvider>
    );
};
