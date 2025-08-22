import axios from "axios";

const api = axios.create({
    baseURL: "https://text-translator2.p.rapidapi.com",

    headers: {
        'x-rapidapi-key': '8d296e7454msh118226256542180p152996jsnd9900a923340',
        'x-rapidapi-host': 'text-translator2.p.rapidapi.com',
        'Content-Type': 'application/x-www-form-urlencoded'
    },


})

export default api