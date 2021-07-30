import React from 'react'
import HeroItem from './HeroItem';
import useApiHeroes from '../utils/useApiHeroes'

const HeroList = (searchFound) => {

    const {data, empty,response} =useApiHeroes(searchFound)

    return (
   
            <div className="card">
                {empty && response==="error" && <h4> NO hay heroes</h4>}
             
                <div id="card-hero">
                {  
                    data.map( heroe => <HeroItem key ={heroe.id} {...heroe}/>)  
                }
                 </div>
            </div>    
    )
}

export default HeroList 
 