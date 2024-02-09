import "../css/Home.css";
import landscape from "../Assets/paysage.png"

function Home() {
    return (
        <div className="home container">
            <div className="landscape">
                <img src={landscape} alt="morceau de paysage" className="landscape"/>
                <p className="text-over-landscape">Chez vous, partout et ailleurs</p>
            </div>
            <div className="loc-place">
                
            </div>
        </div>
    )
}
export default Home