import {requestFactory} from './requester';


const baseUrl = 'http://localhost:3030/data/mangas';

export const mangaServiceFactory = (token) => {
    const request = requestFactory(token);

    const create = async(data) => {
        const result = await request.post(baseUrl, data);
        return result
    }

    return {
        create,
    }
}