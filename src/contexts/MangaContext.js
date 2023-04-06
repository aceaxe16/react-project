import { createContext, useContext, useEffect, useState } from "react";
import { mangaServiceFactory } from "../services/mangaService";
import { useNavigate } from "react-router-dom";
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
        const newManga = await mangaService.create(data);
    
        setMangas(state => [...state, newManga]);

        navigate('/catalog');
    };

    const onMangaEditSubmit = async(values) => {
        const result = await mangaService.edit(values._id, values);

        setMangas(state => state.map(x => x._id === values._id ? result : x));

        navigate(`/catalog/${values._id}`);
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