import React, {Component} from 'react';
import { ReactDOM } from 'react';
import { PropsFromToggle } from 'react-bootstrap/esm/DropdownToggle';
import {Row, Col, Nav, NavItem, Navbar, Container, NavLink, OverlayTrigger, Tooltip} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft, faChartBar, faInfoCircle, faDog } from '@fortawesome/free-solid-svg-icons';

interface Props {

}

interface State {

}

class NavBar extends Component<Props, State> {
    state: State;
    constructor(props: Props) {
        super(props);
        this.state = {

        }

    }


    // renderNavBar = () => {

    //         return (
                
    //         )
    // }

render() {
    return(
        <div className="NavBarDiv col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto" id="NavBarDiv">
            <Row className="align-items-center mx-auto col-md-12" style={{justifyContent:'center'}}>
                <Col xs="5" className="d-flex justify-content-end align-items-center px-4">
            
            <OverlayTrigger 
            key="bottom" 
            placement='bottom'
            overlay={<Tooltip id='tooltip-bottom'>Nav 1</Tooltip>}>
                <NavLink id="NavItem1">
                    About Us
                </NavLink>
            </OverlayTrigger>
            <OverlayTrigger
            key='bottom'
            placement='bottom'
            overlay={<Tooltip id='tooltip-bottom'>Nav 2</Tooltip>}>
                <NavLink id="NavItem2">
                    Services
                </NavLink>
                </OverlayTrigger>
                <FontAwesomeIcon className="icon-button" icon={faDog}/>
                <OverlayTrigger
            key='bottom'
            placement='bottom'
            overlay={<Tooltip id='tooltip-bottom'>Nav 2</Tooltip>}>
                <NavLink id="NavItem3">
                    Contact Us
                </NavLink>
                </OverlayTrigger>
            </Col>
            </Row>
        </div>
    )
}
    }


    export default NavBar;