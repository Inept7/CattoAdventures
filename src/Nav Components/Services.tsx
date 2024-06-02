import React, {Component} from 'react';
import {Container, NavLink} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Linkify from 'react-linkify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';


interface Props {

}

interface State {

}

class SocialMedia extends Component<Props, State> {
    constructor(props:any){
        super(props);
        this.state={

        }
    }





    render() {
        return(
            <Container>
                <div id="SocialMediaLink">
                Social Media
                <br/>
                <div style={{fontSize:'50px'}}>
                <FontAwesomeIcon icon={faInstagram}/>
                </div>
                <div style={{padding:'50px', float:'inherit'}}>
                don't forget to visit our instagram page, all just for fun and beauty.
                    <br/>
                        <Linkify>
                            https://www.instagram.com/c.adventuresbc/
                        </Linkify>
                </div>
                </div>
            </Container>
        )
    }
}

export default SocialMedia;