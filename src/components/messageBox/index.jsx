
export default function MessageBox(){
    return(
         
    <div className="col-md-6 col-lg-7 col-xl-8">
        <ul className="list-unstyled">
            {[
                { name: 'Brad Pitt', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', time: '12 mins ago', img: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp', align: 'start' },
                { name: 'Lara Croft', message: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.', time: '13 mins ago', img: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp', align: 'end' },
                { name: 'Brad Pitt', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', time: '10 mins ago', img: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp', align: 'start' }
            ].map((chat, index) => (
                <li key={index} className="d-flex justify-content-between mb-4">
                    {chat.align === 'start' && <img src={chat.img} alt="avatar"
                        className="rounded-circle d-flex align-self-start me-3 shadow-1-strong" width="60" />}
                    <div className="card w-100">
                        <div className="card-header d-flex justify-content-between p-3">
                            <p className="fw-bold mb-0">{chat.name}</p>
                            <p className="text-muted small mb-0"><i className="far fa-clock"></i> {chat.time}</p>
                        </div>
                        <div className="card-body">
                            <p className="mb-0">
                                {chat.message}
                            </p>
                        </div>
                    </div>
                    {chat.align === 'end' && <img src={chat.img} alt="avatar"
                        className="rounded-circle d-flex align-self-start ms-3 shadow-1-strong" width="60" />}
                </li>
            ))}
            <li className="bg-white mb-3">
                <div className="form-outline">
                    <textarea className="form-control bg-body-tertiary" id="textAreaExample2" rows="4"></textarea>
                    <label className="form-label" htmlFor="textAreaExample2">Message</label>
                </div>
            </li>
            <button type="button" className="btn btn-info btn-rounded float-end">Send</button>
        </ul>
    </div>
    )
}