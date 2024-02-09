import { useMemo } from "react";
import { useAuthContext } from "shared/context/AuthContext/useAuthContext";
import { useDebounce } from "shared/hooks";
import { useNavigate, useSearchParams, useLocation } from "react-router-dom";
import { useLayoutContext } from "./context/useLayoutContext";

export const useLayout = () => {

  
  const { user, logout } = useAuthContext();
  const { setSidebarOpen, sidebarOpen } = useLayoutContext();
  const [, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  
  const onHandleChangeSearch = useDebounce((event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setSearchParams({
      query: inputValue
    })
  }, 300)

  const onHandleLogout = () => {
    logout();
  }

  const currentRoute = useMemo(() => {
    return location.pathname;
  }, [location])

  const isCurrentRoute = (route: string) => {
    return currentRoute === route;
  }

  const onHandleNavigation = navigate

  return {
    onHandleChangeSearch,
    sidebarOpen,
    setSidebarOpen,
    user,
    onHandleLogout,
    onHandleNavigation,
    isCurrentRoute
  }
}