

export default function MessageList(){
    return(
        <div className="col-md-6 col-lg-5 col-xl-4 mb-4">
            <h5 className="font-weight-bold mb-3 text-center text-lg-start">Member</h5>
            <div className="card">
                <div className="card-body">
                    <ul className="list-unstyled mb-0">
                        {[
                            { name: 'John Doe', message: 'Hello, Are you there?', time: 'Just now', img: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp', badge: '1' },
                            { name: 'Danny Smith', message: 'Lorem ipsum dolor sit.', time: '5 mins ago', img: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp' },
                            { name: 'Alex Steward', message: 'Lorem ipsum dolor sit.', time: 'Yesterday', img: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp' },
                            { name: 'Ashley Olsen', message: 'Lorem ipsum dolor sit.', time: 'Yesterday', img: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-3.webp' },
                            { name: 'Kate Moss', message: 'Lorem ipsum dolor sit.', time: 'Yesterday', img: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-4.webp' },
                            { name: 'Lara Croft', message: 'Lorem ipsum dolor sit.', time: 'Yesterday', img: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp' },
                            { name: 'Brad Pitt', message: 'Lorem ipsum dolor sit.', time: '5 mins ago', img: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp', check: true }
                        ].map((user, index) => (
                            <li key={index} className="p-2 border-bottom">
                                <a href="#!" className="d-flex justify-content-between">
                                    <div className="d-flex flex-row">
                                        <img src={user.img} alt="avatar"
                                            className="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60" />
                                        <div className="pt-1">
                                            <p className="fw-bold mb-0">{user.name}</p>
                                            <p className="small text-muted">{user.message}</p>
                                        </div>
                                    </div>
                                    <div className="pt-1 text-end">
                                        <p className="small text-muted mb-1">{user.time}</p>
                                        {user.badge && <span className="badge bg-danger float-end">{user.badge}</span>}
                                        {user.check && <span className="text-muted float-end"><i className="fas fa-check" aria-hidden="true"></i></span>}
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}