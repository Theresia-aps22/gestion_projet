import "../../assets/css/bouton_api.css"

export default function BoutonApi(props){
    const title = props.title
    const image_api = props.image_api
    return(
        <div className="bouton_api">
            <button className="btn btn-primary  button_api w-100 ">
                <img src={image_api} alt="image" />
                {title}
            </button>
        </div>
    )
}