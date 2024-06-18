import Page1 from "../../components/inscription/page1";
import Page2 from "../../components/inscription/page2";
import Page3 from "../../components/inscription/page3";
import image from "../../assets/images/withoutBg/gestion1 (1).png";
import logo from "../../assets/images/withoutBg/gestion1.png";
import "../../assets/css/inscription.css"

export default function Inscription() {
    return (
        <div className="container-custom">
            <div className="card img-fluid" style={{ width: '350px', height: '500px' }}>
                <img className="card-img-top" src={image} alt="Card image" style={{ width: '100%' }} />
                <div className="card-img-overlay">
                    <div className="logo">
                        <img className="img" src={logo} alt='Card image' style={{ width: '30%' }} />
                    </div>
                    <span>S'inscrire</span>
                    <div id="demo" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators mt-60">
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <Page1 />
                            </div>
                            <div className="carousel-item">
                                <Page2 />
                            </div>
                            <div className="carousel-item">
                                <Page3 />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
