import React, {Component} from 'react';
import ReactDOM from 'react';
import { Link } from 'react-router-dom';
import {Row, Col, Container, Image, Nav, NavItem, NavLink, Navbar} from 'react-bootstrap';
import '../CSS/mainpage.css';
import '../CSS/NavBar.css';
import { Logo_url } from '../utils/constants';
import NavBar from '../Landing/NavBar';
import Body from '../Landing/Body';
import Services from '../Nav Components/Services';

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


    render () {
        return(
        <div className="" style={{width:'100vw', padding:0}}>
        <div style={{}}>
        </div>
        <div className="mainpageBody">
            <Body/>
        </div>
        </div>
        )
    }
}

export default MainPage;