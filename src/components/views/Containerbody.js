import SearchForm from "./SearchForm";
import HeroList from "./HeroList";
import React, { useState } from 'react'


const Containerbody = () => {

    const [hero, setHero] = useState("");
    
    return (
        <div className="main">
        <div class="container-fluid">
            <div class="row">
                    <SearchForm setHero={setHero}/>
            </div>     
            <div class="row row-cols">
                    <HeroList results={hero["hero"]}/>
            </div>
        </div>
        </div>
    )
}

export default Containerbody
