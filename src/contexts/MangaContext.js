import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { mangaServiceFactory } from "../services/mangaService";

import { useService } from "../hooks/useService";

export const MangaContext = createContext();

export const MangaProvide = ({
    children,
}) => {
    const [mangas, setMangas] = useState([]);
    const navigate = useNavigate();

    const mangaService = useService(mangaServiceFactory);
    useEffect(() => {
        mangaService.getAll()
            .then(result => {
                setMangas(result)
            })
    }, []);

    const onAddMangaSubmit = async(data) => {
        console.log(data);
        if(data.title === "" || data.genre === "" || data.imageUrl === "" || data.summary === "" || data.author === "" || data.status === ""){
            alert("All fields are required");
            return
        }
        const newManga = await mangaService.create(data);
    
        setMangas(state => [...state, newManga]);

        navigate('/catalog');
    };

    const onMangaEditSubmit = async(data) => {
        if(data.title === "" || data.genre === "" || data.imageUrl === "" || data.summary === "" || data.author === "" || data.status === ""){
            alert("All fields are required");
            return
        }
        const result = await mangaService.edit(data._id, data);

        setMangas(state => state.map(x => x._id === data._id ? result : x));

        navigate(`/catalog/${data._id}`);
    };

    const onMangaDelete = async(mangaId) => {
        await mangaService.deleteManga(mangaId);
        await  mangaService.getAll()
        .then(result => {
            setMangas(result)
        }) 
    }

    const context = {
        onAddMangaSubmit,
        onMangaEditSubmit,
        onMangaDelete,
        mangas,
    };

    return (
        <>
            <MangaContext.Provider value={context}>
                {children}
            </MangaContext.Provider>
        </>
    );
}

export const useMangaContext = () => {
    const context = useContext(MangaContext);

    return context;
};