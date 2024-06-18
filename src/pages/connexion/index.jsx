import React, { useState } from 'react';
import "../../assets/css/connexion.css";
import image from "../../assets/images/withoutBg/gestion1 (1).png";
import google_icon from "../../assets/images/withoutBg/google.png";
import microsoft_icon from "../../assets/images/withoutBg/microsoft.png";
import logo from "../../assets/images/withoutBg/gestion1.png";
import Bouton from "../../components/bouton";
import BoutonApi from "../../components/bouton_api";
import Loader from "../../components/loader"; 
import Input from '../../components/input';

export default function Connexion() {
    const [loading, setLoading] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        // Simulate an API call
        setTimeout(() => {
            setLoading(false);
            alert('Form submitted');
        }, 2000);
    };

    return (
        <div className="container-custom">
            {loading && <Loader />}
            <div className="card img-fluid" style={{ width: '350px', height: '520px' }}>
                <img className="card-img-top" src={image} alt="Card image" style={{ width: '100%' }} />
                <div className="card-img-overlay">
                    <div className="logo">
                        <img className="img" src={logo} alt='Card image' style={{ width: '30%' }} />
                    </div>
                    <span>Connectez-vous</span>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <Input
                                type="email"
                                label="Adresse email"
                            />
                        </div>
                        <div className="mb-3">
                            <Input
                                type="password"
                                label="Mot de passe"
                            />
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox" name="remember" />
                            <label className="form-check-label" htmlFor="remember">
                                Se souvenir de moi
                            </label>
                        </div>
                        <Bouton type="submit" title="Connexion" />
                    </form>
                    <div className="autre w-100">
                        <p>--Ou connectez-vous avec--</p>
                        <div className="button_api">
                            <BoutonApi
                                image_api={google_icon}
                                title="Google"
                            />
                        </div>
                        <div className="button_api">
                            <BoutonApi
                                image_api={microsoft_icon}
                                title="Microsoft"
                            />
                        </div>
                        <div className="lien_inscription">
                            <a href="/inscription" className="lien">Créer un compte</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}