import { useEffect, useState } from "react";
import  apiHeroes from "./Api";

const useApiHeroes = (response) => {

    const [state, setState] = useState({data: [], empty: true, response:"" });
    
    useEffect(() => {
        let {results} = response;
        apiHeroes(results)
            .then(res =>{
                if (res.response ===undefined) {
                    setState({data: [], empty: true});
                }else if(res.response ==="error"){  
                    setState({data:[], empty: true, response:"error"});
                }else if(res.response ==="success"){  
                    setState({data:res.data, empty: false});
                }
            })    
    },[response]);

    return state;
}


export default  useApiHeroes;