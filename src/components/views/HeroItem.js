import  React from "react";


const HeroItem = (hero) => {


    return (
    
    <div className="row no-gutters">
    <div className="col-md-4">
      <img src={hero.image.url} className="card-img" alt={hero.name}/>
    </div>
    <div className="col-md-8">
    <div className="card-body">
        <h5 className="card-title">{hero.name}</h5>
        <div className="container">
            <div className="row align-items">
                <div className="col">
                    <p className="card-text"> intelligence: {hero.powerstats.intelligence}</p>
                </div>
                <div className="col">
                    <p className="card-text">  strength: {hero.powerstats.strength}</p>
                </div>
            </div>
            <div className="row align-items">
                <div className="col">
                    <p className="card-text">  durability: {hero.powerstats.durability}</p>
                </div>
                <div className="col">
                    <p className="card-text">  speed: {hero.powerstats.speed}</p>
                </div>
            </div>
            <div className="row align-items">
                <div className="col">
                    <p className="card-text">  power: {hero.powerstats.power}</p>
                </div>
                <div className="col">
                    <p className="card-text">  combat: {hero.powerstats.combat}</p>
                </div>
            </div>
        </div>
        <div className="card-body">
            <button type="button" className="btn btn-primary btn-sm" >Agregar al Equipo</button>
            <button type="button" className="btn btn-secondary btn-sm">Ver detalle</button>
        </div>
    </div>
    </div>  
    </div>
    ) 
}

export default HeroItem
