import "../css/Footer.css";
import logoFooter from "../Assets/Logo-footer.png";
import kasaRights from "../Assets/kasa-rights.png";

function Footer() {
    return(
<div className="footer">
    <img src={logoFooter} alt="logo kasa" className="logo-kasa-footer"/>
    <img src={kasaRights} alt="droits de kasa" className="kasa-rights"/>
</div>
    )
}

export default Footer