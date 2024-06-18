import "../../assets/css/bouton.css"

export default function Bouton(props){
    const title = props.title
    return(
        <div className="bouton_div">
            <button className="btn btn-primary button w-30" >{title}</button>
        </div>
    )
}