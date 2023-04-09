import {requestFactory} from './requester';


const baseUrl = 'http://localhost:3030/data/mangas';

export const mangaServiceFactory = (token) => {
    const request = requestFactory(token);

    const create = async(data) => {
        const result = await request.post(baseUrl, data);
        return result
    }

    const getAll = async () => {
        const result = await request.get(baseUrl);
        const mangas = Object.values(result);        
        if(mangas[0] === 404){            
            return []
        }else{
            return mangas;
        }

    }

    const getOne = async (gameId) => {
        const result = await request.get(`${baseUrl}/${gameId}`);
        return result;
    }

    const edit = async(mangaId, data) => {
        const result = await request.put(`${baseUrl}/${mangaId}`, data);
        return result;
    }

    const deleteManga = async(mangaId) => {
        const result = request.delete(`${baseUrl}/${mangaId}`);
        return result;
    }

    const getUserMangas = async(userId) => {
        const result = await request.get(baseUrl);
        const mangas = Object.values(result);
        const userMangas = mangas.filter(x => x._ownerId === userId );
        return userMangas; 
    }

    return {
        create,
        getAll,
        getOne,
        edit,
        deleteManga,
        getUserMangas,
    }
}