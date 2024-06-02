import React, {Component} from 'react';
import {Container} from 'react-bootstrap';



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
                <div id="AboutUsLink">
                <h1>
                About Us
                </h1>
                <p>
                    at Catto Adventures we care about every animal, yours is no less special than any other. 
                    With that, we dedicate a lot of time into making sure we do things right for your loved ones.
                    catering specific routes and locations depending on your loved ones needs as well making sure we are prepared for all situations.
                    always working with you to make sure peace of mind is at hand when your pups are out to play.

                    don't hesitate to ask us any questions regarding our methods to make sure we keep everyone safe and having a good time.
                </p>
                </div>
                </Container>
            )
        }
    }

    export default AboutAdventures;