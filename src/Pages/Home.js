import "../Scss/Home.scss";
import Card from "../Components/Card";
import Banner from "../Components/Banner";
import dataHebergements from "../data.json";

function Home() {
    return (
        <div className="home container">
            <Banner />
            <div className="cards-wrapper">
            {dataHebergements.map((hebergement)=>(
               <Card 
                    key={hebergement.id}
                    id={hebergement.id}
                    cover= {hebergement.cover}
                    title={hebergement.title}
                />
            ))}
        </div>
        </div>
    )
}
export default Home