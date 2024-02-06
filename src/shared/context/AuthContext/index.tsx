import { createContext, useCallback, useMemo, useState } from "react";
import {
    IAuthContext,
    IAuthContextProvider,
    IAuthContextTypes,
} from "./interface";
import { UserEntity } from "shared/entities";
import { localStorageAdapter } from "shared/helpers";

export const AuthContext = createContext({} as IAuthContext);

export const AuthContextProvider: React.FC<IAuthContextProvider> = ({
    children,
}) => {
    const [user, setUser] = useState<UserEntity>();

    const onCacheAuthenticate = () => {
        const userAuth = localStorageAdapter.get<UserEntity>("@user_auth");
        userAuth && setUser(userAuth);
    };

    useMemo(() => {
        onCacheAuthenticate();
    }, []);

    const signIn = (data: IAuthContextTypes.ISignIn.Params) => {
        const response: UserEntity = {
            crated_at: new Date(),
            username: data.username,
        };

        localStorageAdapter.set("@user_auth", response);

        return response;
    };

    const logout = () => {
        localStorageAdapter.remove("@user_auth");
        setUser(undefined);
    };

    const isAuthenticate = useCallback(() => {
        const userEntity = localStorageAdapter.get("@user_auth");
        return !!userEntity;
    }, [user]);

    return (
        <AuthContext.Provider
            value={{
                user,
                signIn,
                isAuthenticate,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
