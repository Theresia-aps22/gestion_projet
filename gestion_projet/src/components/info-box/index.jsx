
export default function InfoBox({ text , valeur}){
    return(
        <div className="info-box bg-light">
            <div className="info-box-content">
                <span className="info-box-text text-center text-muted">{text}</span>
                <span className="info-box-number text-center text-muted mb-0">${valeur}</span>
            </div>
        </div>
    )
}