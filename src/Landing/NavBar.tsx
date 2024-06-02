import React, {Component} from 'react';
import { ReactDOM } from 'react';
import { PropsFromToggle } from 'react-bootstrap/esm/DropdownToggle';
import {Row, Col, Nav, NavItem, Navbar, Container, NavLink, OverlayTrigger, Tooltip, Image} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft, faChartBar, faInfoCircle, faDog } from '@fortawesome/free-solid-svg-icons';
import { Logo_url } from '../utils/constants';
import '../CSS/NavBar.css';

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

render() {
    return(
        <div id="NavBarDiv" className='navbar-expand-lg' style={{}}>
            <Row style={{}}>
                <Col className="NavCol" style={{height:'10vh', width:'100vw', margin:'auto'}}>
                    <Row id="ImageRow" style={{overflow:'auto', paddingLeft:'10px'}}>
                <Image
                height={'20%'}
                width={"40%"}
                src={Logo_url}

                fluid
                />
                </Row>
                </Col>
                <Col style={{marginTop:'auto'}}>
                <Row id="TriggerOne">
            <OverlayTrigger 
            key="bottom" 
            placement='bottom'
            overlay={<Tooltip id='tooltip-bottom'>Nav 1</Tooltip>}>
                <NavLink href="/About#AboutUsLink" id="NavItem1" style={{textDecoration:'none', fontFamily:'comic-sans'}}>
                    About Us
                    
                </NavLink>
            </OverlayTrigger>
            </Row>
            </Col>
            <Col style={{marginTop:'auto'}}>
            <Row id="TriggerTwo">
            <OverlayTrigger
            key='bottom'
            placement='bottom'
            overlay={<Tooltip id='tooltip-bottom'>Nav 2</Tooltip>}>
                <NavLink href="/Services" id="NavItem2" style={{textDecoration:'none', fontFamily:'comic-sans'}}>
                    Services
                    
                </NavLink>
                </OverlayTrigger>
                </Row>
                </Col>
                {/* <OverlayTrigger
            key='bottom'
            placement='bottom'
            overlay={<Tooltip id='tooltip-bottom'>Nav 2</Tooltip>}>
                <NavLink id="NavItem3" style={{textDecoration:'none', fontFamily:'comic-sans'}}>
                    Future Services
                    
                </NavLink>
                </OverlayTrigger> */}
                <Col style={{marginTop:'auto'}}>
                <Row id="TriggerThree">
                <OverlayTrigger
            key='bottom'
            placement='bottom'
            overlay={<Tooltip id='tooltip-bottom'>Nav 3</Tooltip>}>
                <NavLink href="/" id="NavItem4" style={{textDecoration:'none', fontFamily:'comic-sans'}}>
                    Social Media
                    
                </NavLink>
                </OverlayTrigger>
                </Row>
                </Col>
                <Col style={{marginTop:'auto'}}>
                <div className='' style={{float: 'right', marginTop:'auto'}}>
                <OverlayTrigger
            key='bottom'
            placement='bottom'
            overlay={<Tooltip id='tooltip-bottom'>Contact Us</Tooltip>}>
                <NavLink href="/ContactUs" id="NavItem5" style={{textDecoration:'none', fontFamily:'comic-sans'}}>
                    Contact Us
                    
                </NavLink>
                </OverlayTrigger>
                </div>
            </Col>
            </Row>
        </div>
    )
}
    }


    export default NavBar;