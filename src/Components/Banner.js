import landscape from "../Assets/paysage.png"

function Banner(){
    return (
        <div className="landscape">
                <img src={landscape} alt="morceau de paysage" className="landscape"/>
                <p className="text-over-landscape">Chez vous, partout et ailleurs</p>
        </div>
    )
}

export default Banner 