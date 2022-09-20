import { API_KEY,BASE_URL } from "../component/config"

export const GET = async (url) =>{
    const API_URl =`${BASE_URL}${url}?api_key=${API_KEY}`;

    let response = await fetch(API_URl,{method:'GET'});
    response = response.json();
    return response;
}