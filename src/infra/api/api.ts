import axios from "axios";

const KEY: string = import.meta.env.VITE_API_KEY

export const api = axios.create({
    baseURL: "https://api.spotify.com/",
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
    }
})


