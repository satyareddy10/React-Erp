import { privateApi } from "./api";


export const getUser = () => {
    return privateApi.get("/auth/me");
}

export const getAllUsers = (signal) => {
    return privateApi.get("/users", { signal })
}

export const searchUsers = (query, signal) => {
    return privateApi.get("/users/search", { params: { q: query }, signal })
}