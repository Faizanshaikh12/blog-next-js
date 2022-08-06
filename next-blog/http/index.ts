import axios from "axios";

const api = axios.create({
    baseURL: process.env.API_BASE_URL,
    headers: {
        Authorization: `Bearer ${process.env.BACKEND_API_KEY}`
    }
});

// categories
export const getCategories = async () => api.get('/api/categories');

//articles
export const getArticles = async (query: string) => api.get(`/api/articles?${query}`);
export const getArticle = async (query: string) => api.get(`/api/articles?${query}`);