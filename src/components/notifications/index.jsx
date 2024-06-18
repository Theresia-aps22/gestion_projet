import React from 'react';
import { Navbar, Nav, NavDropdown, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Notifications() {
    return (

                <NavDropdown
                    title={
                        <>
                            <i className="far fa-bell"></i>
                            <Badge variant="warning">15</Badge>
                        </>
                    }
                    id="notification-dropdown"
                    alignRight
                >
                    <NavDropdown.Header>15 Notifications</NavDropdown.Header>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#">
                        <i className="fas fa-envelope mr-2"></i> 4 new messages
                        <span className="float-right text-muted text-sm">3 mins</span>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#">
                        <i className="fas fa-users mr-2"></i> 8 friend requests
                        <span className="float-right text-muted text-sm">12 hours</span>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#">
                        <i className="fas fa-file mr-2"></i> 3 new reports
                        <span className="float-right text-muted text-sm">2 days</span>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#" className="dropdown-footer">
                        See All Notifications
                    </NavDropdown.Item>
                </NavDropdown>
        
    );
}
