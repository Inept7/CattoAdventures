import React, {Component, useState} from 'react';
import { ReactDOM } from 'react';
import { PropsFromToggle } from 'react-bootstrap/esm/DropdownToggle';
import {Row, Col, Nav, NavItem, Navbar, Container, NavLink, OverlayTrigger, Tooltip, Image, Modal, ModalHeader, ModalBody } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft, faChartBar, faInfoCircle, faDog, faGripLines } from '@fortawesome/free-solid-svg-icons';
import { Logo_url } from '../utils/constants';
import '../CSS/NavBar.css';
import NavBarMini from './NavBarMini';

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
        <div id="NavBarDiv" className='navbar-expand-lg' style={{}}>
            <Row style={{}}>
                <Col className="NavCol" style={{height:'10vh', width:'100vw', margin:'auto'}}>
                    <Row id="ImageRow" style={{overflow:'auto', paddingLeft:'10px', width:'45%'}}>
                <Image
                width={"100%"}
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
                <NavLink href="/" id="NavItem" style={{}}>
                    Home
                    
                </NavLink>
            </OverlayTrigger>
            </Row>
            </Col>
                <Col style={{marginTop:'auto'}}>
                <Row id="TriggerOne">
            <OverlayTrigger 
            key="bottom" 
            placement='bottom'
            overlay={<Tooltip id='tooltip-bottom'>Nav 1</Tooltip>}>
                <NavLink href="/About#AboutUsLink" id="NavItem" style={{}}>
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
                <NavLink href="/Services" id="NavItem" style={{}}>
                    Services
                    
                </NavLink>
                </OverlayTrigger>
                </Row>
                </Col>
                <Col style={{marginTop:'auto'}}>
                <Row id="TriggerThree">
                <OverlayTrigger
            key='bottom'
            placement='bottom'
            overlay={<Tooltip id='tooltip-bottom'>Nav 3</Tooltip>}>
                <NavLink href="/" id="NavItem" style={{}}>
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
                <NavLink href="/ContactUs" id="NavItem" style={{}}>
                    Contact Us
                    
                </NavLink>
                </OverlayTrigger>
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