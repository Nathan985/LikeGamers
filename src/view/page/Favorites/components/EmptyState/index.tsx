import { BookmarkIcon } from "@heroicons/react/20/solid";
import React from "react";
import { useNavigate } from "react-router-dom";

const EmptyState: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col gap-2 col-span-5 h-full md:1 w-full justify-center items-center">
            <BookmarkIcon className="w-8 h-8 text-yellow-300" />
            <p className="text-lg font-semibold">Nenhum Jogo Encontrado</p>
            <button
                type="button"
                className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => navigate("/dashboard")}
            >
                <BookmarkIcon
                    className="-ml-0.5 mr-1.5 h-5 w-5"
                    aria-hidden="true"
                />
                Lista de Jogos
            </button>
        </div>
    );
};

export default EmptyState;
