import { Navigate, Outlet } from "react-router-dom";
import { IAuthGuardType } from "./interface";
import { useAuthContext } from "shared/context/AuthContext/useAuthContext";

export function AuthGuard({ isPrivate = false }: IAuthGuardType) {
    const { isAuthenticate } = useAuthContext();

    if (!isAuthenticate && isPrivate) {
        return <Navigate to="/auth" replace />;
    }

    if (isAuthenticate && !isPrivate) {
        return <Navigate to="/dashboard" replace />;
    }

    return <Outlet />;
}
