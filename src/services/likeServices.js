import { requestFactory } from "./requester";

const baseUrl = 'http://localhost:3030/data/likes';

export const likeServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAll = async() => {
        const result = await request.get(baseUrl);
        const likes = Object.values(result);

        return likes
    }

    const getOne = async( likeId) => {
        const result = await request.get(`${baseUrl}/${likeId}`);

        return result
    }

    const create = async(data) => {
        const result = await request.post(baseUrl, data);

        return result;
    }

    const deleteLike = (likeId) => request.delete(`${baseUrl}/${likeId}`);

    return {
        deleteLike,
        create,
        getOne,
        getAll,
    }
}