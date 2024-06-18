import React from 'react';
import Input from "../../input";

export default function Page2() {
    return (
        <div>
            <Input
                type="email"
                label="Entrer email"
            />
            <select className="form-select">
                <option selected>Entreprise</option>
                <option value="1">Entité</option>
                <option value="2">Utilisation Personnelle</option>
            </select>
            <div className="d-flex justify-content-between mt-3">
                <button className="btn btn-secondary" data-bs-target="#demo" data-bs-slide="prev">
                    Retour
                </button>
                <button className="btn btn-primary" data-bs-target="#demo" data-bs-slide="next">
                    Suivant
                </button>
            </div>
        </div>
    );
}
