import "../Scss/Footer.scss";
import logoFooter from "../Assets/Logo-footer.png";
import kasaRights from "../Assets/kasa-rights.png";
import kasaSmallRights from "../Assets/kasa-small-rights.png";

function Footer() {
    return(
<div className="footers">
<div className="footer footer-big">
    <img src={logoFooter} alt="logo kasa" className="logo-kasa-footer"/>
    <img src={kasaRights} alt="droits de kasa" className="kasa-rights"/>
</div>
<div className="footer footer-small">
    <img src={logoFooter} alt="logo kasa" className="logo-kasa-footer"/>
    <img src={kasaSmallRights} alt="droits de kasa" className="kasa-small-rights"/>
</div>
</div>
    )
}

export default Footer