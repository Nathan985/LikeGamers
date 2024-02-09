import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { QKGameProvider } from "shared/config";
import { useGameContext } from "shared/context/GameContext/useGameContext";

export const useDashboard = () => {

  const { findAllGames, setQuery } = useGameContext();
  const [searchParams] = useSearchParams();

    const pages = findAllGames.data?.pages;

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
            findAllGames.fetchNextPage();
        }
    });
    intersectionObserver.observe(
        document.querySelector("#sentinela") as Element
    );
    return () => intersectionObserver.disconnect();
}, []);

useEffect(() => {
  const queryParam = searchParams.get('query');
  setQuery(QKGameProvider.FIND_ALL, { search: queryParam || "" })
}, [searchParams])

return {
  pages,
  findAllGames
}
}