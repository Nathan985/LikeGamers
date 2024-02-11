import { createContext, useEffect, useMemo, useState } from "react";
import {
    IApplicationContextType,
    IApplicationProviderContextType,
} from "./interface";
import { localStorageAdapter } from "shared/helpers";

export const ApplicationContext = createContext({} as IApplicationContextType);

export const ApplicationContextProvider: React.FC<
    IApplicationProviderContextType
> = ({ children }) => {
    const [darkMode, setDarkMode] = useState<boolean>(false);

    const onLoadingApplication = () => {
        const themeMode = localStorageAdapter.get("@theme_mode");

        setDarkMode(themeMode ? Boolean(themeMode) : false);
    };

    const onHandleDarkMode = () => {
        darkMode
            ? document.documentElement.classList.add("dark")
            : document.documentElement.classList.remove("dark");
    };

    const toggleMode = (data: boolean = false) => {
        const mode = data ?? !darkMode;
        setDarkMode(mode);
        localStorageAdapter.set("@theme_mode", mode);
    };

    useEffect(() => {
        onLoadingApplication();
    }, []);

    useMemo(() => {
        onHandleDarkMode();
    }, [darkMode]);

    return (
        <ApplicationContext.Provider
            value={{
                darkMode,
                toggleMode,
            }}
        >
            {children}
        </ApplicationContext.Provider>
    );
};
