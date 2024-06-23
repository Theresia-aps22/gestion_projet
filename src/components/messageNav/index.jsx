import React from 'react';
import { NavDropdown, Badge, Image, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import photo from '../../assets/images/personne1.jpg';

export default function MessageDropDown() {
    return (
        <NavDropdown
            title={
                <>
                    <i className="far fa-comments"></i>
                    <Badge variant="danger" className="ml-1">3</Badge>
                </>
            }
            id="message-dropdown"
            alignRight
        >
            <NavDropdown.Item href="#" className="py-2 px-3">
                <Row className="align-items-center no-gutters">
                    <Col xs={3} className="pr-2">
                        <Image src={photo} roundedCircle className="img-fluid" />
                    </Col>
                    <Col xs={9}>
                        <div className="d-flex justify-content-between">
                            <h6 className="mb-0 text-truncate">Brad Diesel</h6>
                            <small className="text-danger"><i className="fas fa-star"></i></small>
                        </div>
                        <p className="text-sm text-truncate mb-0">Call me whenever you can...</p>
                        <small className="text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</small>
                    </Col>
                </Row>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">
                <Row className="align-items-center no-gutters">
                    <Col xs={3} className="pr-2">
                        <Image src={photo} roundedCircle className="img-fluid" />
                    </Col>
                    <Col xs={9}>
                        <div className="d-flex justify-content-between">
                            <h6 className="mb-0 text-truncate">John Pierce</h6>
                            <small className="text-muted"><i className="fas fa-star"></i></small>
                        </div>
                        <p className="text-sm text-truncate mb-0">I got your message bro</p>
                        <small className="text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</small>
                    </Col>
                </Row>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">
                <Row className="align-items-center no-gutters">
                    <Col xs={3} className="pr-2">
                        <Image src={photo} roundedCircle className="img-fluid" />
                    </Col>
                    <Col xs={9}>
                        <div className="d-flex justify-content-between">
                            <h6 className="mb-0 text-truncate">Nora Silvester</h6>
                            <small className="text-warning"><i className="fas fa-star"></i></small>
                        </div>
                        <p className="text-sm text-truncate mb-0">The subject goes here</p>
                        <small className="text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</small>
                    </Col>
                </Row>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#" className="text-center">
                See All Messages
            </NavDropdown.Item>
        </NavDropdown>
    );
}
