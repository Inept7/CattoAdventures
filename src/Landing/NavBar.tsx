import React, {Component} from 'react';
import { ReactDOM } from 'react';
import { PropsFromToggle } from 'react-bootstrap/esm/DropdownToggle';
import {Row, Col, Nav, NavItem, Navbar, Container} from 'react-bootstrap';
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
        <div className="NavBarDiv" id="NavBarDiv">
            <Row className="d-inline-block align-items-center mx-auto col-12">
            <Navbar variant="tabs" className='NavBar' style={{alignItems:'center'}}>
                <Col className="align-items-center mx-auto col-12">
                <NavItem id="NavItem1">
                    Nav Option 1
                </NavItem>
                </Col>
                <Col className="align-items-center mx-auto col-12">
                    <NavItem id="NavItem2">
                        Nav Option 2
                    </NavItem>
                    <FontAwesomeIcon className="icon-button" icon={faDog}/>
                </Col>
            </Navbar>
            </Row>
        </div>
    )
}
    }


    export default NavBar;