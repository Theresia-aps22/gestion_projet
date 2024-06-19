import React from 'react';
import { Link } from 'react-router-dom';
import "../../assets/css/bouton.css"; 

export default function Bouton({ title, action }) {
    return (
        <div className='bouton_div'>
            <Link to={action} className="btn btn-primary custom-button">
                {title}
            </Link>
        </div>
    );
}
