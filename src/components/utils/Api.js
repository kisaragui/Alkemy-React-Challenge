import Api from "./ConfigApi";

const tokenKey = "4058531047595511";

const apiHeroes = async (hero) => {
    
    let results = {response: undefined, data: undefined}
    const url = `/https://superheroapi.com/api/${tokenKey}/search/${hero}`;
    if (hero){
        const apiHeroes = await Api.get(url)
        const data = await apiHeroes.data;
        if(data.response === "success"){
            results = {response: apiHeroes.data.response, data:apiHeroes.data.results}
            return results
        }else{
            results = {response: apiHeroes.data.response, data:apiHeroes.data.error}
            return results
        }
    }else{
        return results
    }
}


export default apiHeroes;