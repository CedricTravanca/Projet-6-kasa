import "../css/Error.css";

import logo404 from "../Assets/404.png"

function Error() {
    return(
        <div className="error-page">
            <img src={logo404} alt="Logo 404 d'erreur" className="error-404" />
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <div className="back-to-homepage"><a href="./"> Retournez sur la page d'accueil</a></div>

        </div>

    )
}
export default Error