import "../Scss/About.scss";
import mask from '../Assets/Mask-group.png';
import Collapse from "../Components/Collapse";
import "../Scss/Collapse.scss";

function About() {
    return(
        <div className="about-container">
                <img src={mask} alt="morceau de paysage" className="mask"/>
                <section className="collapse-list">
                <Collapse title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les
                photos sont conformes aux logements, et toutes les informations sont
                régulièrement vérifiées par nos équipes."/>

                <Collapse title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement
                discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>

                <Collapse title="Service" content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite.
                N'hésitez pas à nous contacter si vous avez la moindre question."/>

                <Collapse title="Sécurité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les
                voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. Enfin, notre plateforme vous permet de discuter avec votre 
                hôte avant votre arrivée afin de vous assurer que le logement correspond bien à vos attentes."/>
            </section>
        </div>
    )
}

export default About