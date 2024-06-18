import Input from "../../input";
import Bouton from "../../bouton";

export default function Page3() {
    return (
        <div>
            <Input
                type="password"
                label="Entrer votre mot de passe"
            />
            <Input
                type="password"
                label="confirmer votre mot de passe"
            />
            <div className="d-flex justify-content-between mt-3">
                <button className="btn btn-secondary" data-bs-target="#demo" data-bs-slide="prev">
                    Retour
                </button>
                <Bouton title="Valider" />
            </div>
        </div>
    );
}
