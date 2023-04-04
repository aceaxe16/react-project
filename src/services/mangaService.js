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

        return mangas;
    }

    const getOne = async (gameId) => {
        const result = await request.get(`${baseUrl}/${gameId}`);
        return result;
    }

    const edit = async(mangaId, data) => {
        const result = await request.put(`${baseUrl}/${mangaId}`, data);
        return result;
    }

    return {
        create,
        getAll,
        getOne,
        edit,
    }
}