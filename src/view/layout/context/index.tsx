import React, { ReactNode, createContext, useReducer } from "react";
import { initialState, reducer } from "../reducer";
import { ILayoutContextType } from "./interface";

export const LayoutContext = createContext({} as ILayoutContextType);

export const LayoutContextProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const sidebarOpen = state["SIDEBAR_MODAL"];

    const setSidebarOpen = (value: boolean) => {
        dispatch({ type: "SIDEBAR_MODAL", payload: value });
    };
    return (
        <LayoutContext.Provider
            value={{
                sidebarOpen,
                setSidebarOpen,
            }}
        >
            {children}
        </LayoutContext.Provider>
    );
};
