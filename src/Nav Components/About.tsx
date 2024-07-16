import React, {Component} from 'react';
import {Container, Image} from 'react-bootstrap';
import {untitled_logo} from '../utils/constants';
import '../CSS/About.css';


interface Props {

}

interface State {

}


class AboutAdventures extends Component<Props,State> {
    constructor(props:any){
        super(props);
            this.state={
                
            }
        }


        render() {
            return(
                <Container>
                <div className="BodyContainer" style={{}}>
                <div className='col-12' style={{backgroundColor:"#FEFEFE", borderStyle:'solid', borderColor:'black', display:'inline-block'}}>
                <div className="" style={{height:'100%', width:'100%', paddingTop:'10px' }}>
                {/* {this.renderCarousel()} */}
                <div className='openerImageDiv' style={{marginTop:'70px', width:'100%', height:'50%', display:'inline-block'}}>
                <Image
                height={'100%'}
                width={'100%'}
                src={untitled_logo}
                />
                </div>
                </div>
                <br/>
                <div style={{fontSize:'2rem', fontWeight:'bold', textAlign:'center', color:'black', margin:'5%' }}>
                About Us
                </div>
                <div>
                <p>
                    Catto Adventures is operated by a seasoned Veterinary Technician, and a K9 Behaviorist. 
                    Together they have the ability to create a safe and loving environment for any and all dogs no matter the size or temperament.
                    
                    All staff and operators are first aid certified for pets, with operators specializing in emergency care.
                </p>
                </div>
                <div>
                <p>
                    when going through dog behaviors and temperaments, we like to make sure dogs are matched up 
                    with the right groups to best suit their needs and abilities to keep things relaxed and safe for all furry friends
                </p>
                </div>
                <p>
                    at Catto Adventures we care about every animal, yours is no less special than any other. 
                    With that, we dedicate a lot of time into making sure we do things right for your loved ones.
                    catering specific routes and locations depending on your loved ones needs as well making sure we are prepared for all situations.
                    always working with you to make sure peace of mind is at hand when your pups are out to play.

                    don't hesitate to ask us any questions regarding our methods to make sure we keep everyone safe and having a good time.
                </p>
                </div>
                </div>
                </Container>
            )
        }
    }

    export default AboutAdventures;