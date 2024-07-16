import React, {Component, useState} from 'react';
import { ReactDOM } from 'react';
import { PropsFromToggle } from 'react-bootstrap/esm/DropdownToggle';
import {Row, Col, Nav, NavItem, Navbar, Container, NavLink, OverlayTrigger, Tooltip, Image, Modal, ModalHeader, ModalBody } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft, faChartBar, faInfoCircle, faDog, faGripLines } from '@fortawesome/free-solid-svg-icons';
import { Logo_url } from '../utils/constants';
import '../CSS/NavBar.css';
import Services from '../Nav Components/Services';
import { isDisabled } from '@testing-library/user-event/dist/utils';

interface Props {

}

interface State {
openNav : boolean;
}

class NavBar extends Component<Props, State> {
    state: State;
    constructor(props: Props) {
        super(props);
        this.state = {
            openNav: false
        }

    }





render() {
    return window.innerWidth > 770 ? (
        <div id="NavBarDiv" className='navbar-expand-lg' style={{margin:'auto'}}>
            <Row style={{}}>
                <Col className="NavCol" style={{ margin:'auto'}}>
                    <Row id="ImageRow" style={{overflow:'auto', paddingLeft:'10px', width:'45%'}}>
                <Image
                width={"100%"}
                src={Logo_url}

                fluid
                />
                </Row>
                </Col>
                <Col style={{margin:'auto'}}>
                <Row id="TriggerOne">
            <OverlayTrigger 
            key="bottom" 
            placement='bottom'
            overlay={<Tooltip id='tooltip-bottom'>Take me home</Tooltip>}>
                <NavLink href="/" id="NavItem" style={{}}>
                    Home
                    
                </NavLink>
            </OverlayTrigger>
            </Row>
            </Col>
                <Col style={{margin:'auto'}}>
                <Row id="TriggerOne">
            <OverlayTrigger 
            key="bottom" 
            placement='bottom'
            overlay={<Tooltip id='tooltip-bottom'>What we're all about!</Tooltip>}>
                <NavLink href="/AboutUs" id="NavItem" style={{}}>
                    About Us
                    
                </NavLink>
            </OverlayTrigger>
            </Row>
            </Col>
            <Col style={{margin:'auto', display:'flex'}}>
            <Row id="TriggerTwo">
            <OverlayTrigger
            key='bottom'
            placement='bottom'
            overlay={<Tooltip id='tooltip-bottom'>What can we do for you?</Tooltip>}>
                <NavLink href="/Services" id="NavItem" style={{}}>
                    Services
                    
                </NavLink>
                </OverlayTrigger>
                </Row>
                </Col>
                <Col style={{margin:'auto', display:'inline-block'}}>
                <Row id="TriggerThree">
                <OverlayTrigger
            key='bottom'
            placement='bottom'
            overlay={<Tooltip id='tooltip-bottom'>Coming Soon</Tooltip>}>
                <NavLink eventKey="disabled" href="/" id="NavItem" style={{}}>
                    Social Media <span style={{fontSize:'50%'}}>(coming soon)</span>
                    
                </NavLink>
                </OverlayTrigger>
                </Row>
                </Col>
                {/* <Col style={{marginTop:'auto'}}>
                <div className='' style={{float: 'right', marginTop:'auto'}}>
                <OverlayTrigger
            key='bottom'
            placement='bottom'
            overlay={<Tooltip id='tooltip-bottom'>Contact Us</Tooltip>}>
                <NavLink href="/ContactUs" id="NavItem" style={{}}>
                    Contact Us
                    
                </NavLink>
                </OverlayTrigger>
                </div>
            </Col> */}
            <Col>
            <div style={{marginTop:'10%', marginRight:'auto', color:'white', fontSize:'50%'}}>
                <div style={{height:'60%'}}><h5>Contact us!</h5></div>
                <p>call or text 604-832-5723</p>
            </div>
            </Col>
            </Row>
        </div>
    ) 
    :
    (<div className="modalDiv">
    <FontAwesomeIcon size={'2x'} icon={faGripLines} onClick={()=> {this.setState({openNav: true})}}/>
    <Modal className="modal" id="sidebar-left" 
        centered
        show={this.state.openNav!}
        onHide={() => {
        this.setState({openNav: false});
        window.location.reload();}}
        > 
        <ModalHeader>
        Take an Adventure
        </ModalHeader>
        <ModalBody className="modalBody">
            <a href={'/'} style={{color:'black'}}>Home</a>
            <br/>
            <a href={'/AboutUs'} style={{color:'black'}}>About Us</a>
            <br/>
            <a href={'/Services'} style={{color:'black'}}>Services</a>
            <br/>
            <a href={'/Contact'} style={{color:'black'}}>Contact Us</a>
        </ModalBody>
        </Modal>
        </div>
    )
}
    }


    export default NavBar;