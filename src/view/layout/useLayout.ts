import { useState } from "react";
import { useAuthContext } from "shared/context/AuthContext/useAuthContext";
import { useDebounce } from "shared/hooks";
import { useSearchParams } from "react-router-dom";

export const useLayout = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, logout } = useAuthContext();
  const [, setSearchParams] = useSearchParams();

  const onHandleChangeSearch = useDebounce((event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setSearchParams({
      query: inputValue
    })
  }, 300)

  const onHandleLogout = () => {
    logout();
  }



  return {
    onHandleChangeSearch,
    sidebarOpen,
    setSidebarOpen,
    user,
    onHandleLogout
  }
}