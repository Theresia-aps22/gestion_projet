import React from 'react';
import Input from "../../input";

export default function Page1() {
    return (
        <div>
            <Input
                type="text"
                label="Entrer votre Nom"
            />
            <Input
                type="text"
                label="Entrer votre Prénom"
            />
            <div className="d-flex justify-content-center mt-3">
                <button className="btn btn-primary" data-bs-target="#demo" data-bs-slide="next">
                    Suivant
                </button>
            </div>
        </div>
    );
}
