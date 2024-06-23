import React, {Component} from "react";
import {Row, Col, Image} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGripLines } from '@fortawesome/free-solid-svg-icons';

interface Props {

}

interface State {

}

class NavBarMini extends Component<Props,State> {
    state: State;
    constructor(props: Props) {
        super(props);
        this.state = {

        }
    }



    render() {
        
        return(
            <Row>
            <FontAwesomeIcon size={'2x'} icon={faGripLines}/>
            <div id="navBarMini"></div>
        </Row>
        )
    }


}

export default NavBarMini;