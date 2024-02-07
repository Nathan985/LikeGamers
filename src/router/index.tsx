import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthGuard } from "./AuthGuard";
import { Authenticate, Dashboard } from "view/page";
import { Layout } from "view/layout";

export const RouterProvider: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AuthGuard />}>
                    <Route path="/auth" element={<Authenticate />} />
                </Route>
                <Route element={<AuthGuard isPrivate />}>
                    <Route element={<Layout />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Route>
                </Route>

                <Route path="*" element={<Navigate to={"/dashboard"} />} />
            </Routes>
        </BrowserRouter>
    );
};
