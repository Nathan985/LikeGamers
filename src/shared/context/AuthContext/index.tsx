import { createContext, useMemo, useState } from "react";
import {
    IAuthContext,
    IAuthContextProvider,
    IAuthContextTypes,
} from "./interface";
import { UserEntity } from "shared/entities";
import LocalStorageAdapter from "shared/helpers/LocalStorageAdapter";

export const AuthContext = createContext({} as IAuthContext);

export const AuthContextProvider: React.FC<IAuthContextProvider> = ({
    children,
}) => {
    const [user, setUser] = useState<UserEntity>();

    const onCacheAuthenticate = () => {
        const userAuth = LocalStorageAdapter.get<UserEntity>("@user_auth");
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

        LocalStorageAdapter.set("@user_auth", response);

        return response;
    };

    const logout = () => {
        LocalStorageAdapter.remove("@user_auth");
        setUser(undefined);
    };

    const isAuthenticate = useMemo(() => {
        return !!user;
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
