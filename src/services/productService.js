import { privateApi } from "./api";



export const getAllProducts = () => {
    return privateApi.get("/products")
}

export const searchProducts = (query) => {
    return privateApi.get("products/search", { params: { q: query } })
}