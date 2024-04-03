import React, {Component} from 'react';
import ReactDOM from 'react';
import {Row, Col, Container, Image, Nav, NavItem, NavLink, Navbar} from 'react-bootstrap';
import '../CSS/mainpage.css';
import '../CSS/NavBar.css'
import { Logo_url } from '../utils/constants';
import NavBar from '../Landing/NavBar';
import { getParsedCommandLineOfConfigFile } from 'typescript';

interface Props {

}

interface State {

}

class MainPage extends React.Component<Props, State> {

    state: State;
constructor(props: any) {
    super(props);
    this.state = {

    }
}
// renderNavBar = () => {

    
    
//     return (
//         <Container>
//             <div style={{padding:0, top:0, margin:0, minHeight:54}}>
//             <NavBar/>
//             </div>
//         </Container>
//     )
// }


    render () {
        return(
        <div className="MainPage">
        <Image
        style={{}}
        height={300}
        width={300}
        src={Logo_url}

        roundedCircle
        />
        {/* {this.renderNavBar()} */}
        <NavBar/>
        </div>
        )
    }
}

export default MainPage;