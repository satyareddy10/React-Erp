import {api } from "./api.js"

export const login = (data) => {
    return api.post("/auth/login", data);
}