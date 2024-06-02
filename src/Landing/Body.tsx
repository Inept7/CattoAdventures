import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import React, {Component, useState} from 'react';
import {Container, Row, Col, Image, Carousel, CarouselItem, CarouselCaption } from 'react-bootstrap';
import Services from '../Nav Components/Services';
import About from '../Nav Components/About';
import {trail_hikes_url, walking_service_url, Background_url, carousel_five, carousel_four, carousel_three, carousel_two, carousel_one, Logo_url, solo_walks_url} from '../utils/constants';
import SocialMedia from '../Nav Components/Services';
import '../CSS/Body.css';

interface Props {

}

interface State {
}




class Body extends Component<Props, State> {



    state:State;
    constructor(props:any) {
    super(props)
    this.state={

    }
}



    renderCarousel = () => {


        return(
            <div className="d-inline" style={{margin:'auto', overflow:'auto', padding:'50px'}}>
            <Carousel className='carousel' wrap={true} slide={true} interval={10000} style={{width:'100%', height:'100%', borderColor:'#8C4F32', borderStyle:'groove', borderWidth:'10px', fontSize:'23px', fontWeight:'bold'}}>
                    <CarouselItem >
                    <Image
                    height={'500px'}
                    width={'600px'}
                    className='d-block w-100'
                    src={carousel_one}
                    alt='first slide'
                    />
                    <CarouselCaption>
                        Group Friend Walks
                    </CarouselCaption>
                    </CarouselItem>
                    <CarouselItem>
                    <Image
                    height={'500px'}
                    width={'600px'}
                    className='d-block w-100'
                    src={carousel_two}
                    alt='second slide'/>
                    <CarouselCaption>
                        Off Leash Trail Hikes
                    </CarouselCaption>
                    </CarouselItem>
                    <CarouselItem>
                    <Image 
                    height={'500px'}
                    width={'600px'}
                    className='d-block w-100'
                    src={carousel_three}
                    alt='third slide'/>
                    <CarouselCaption>
                        lorem Ipsom
                    </CarouselCaption>
                    </CarouselItem>
                    <CarouselItem>
                    <Image 
                    height={'500px'}
                    width={'600px'}
                    className='d-block w-100'
                    src={carousel_four}
                    alt='fourth slide'/>
                    <CarouselCaption>
                        Scenic Trails
                    </CarouselCaption>
                    </CarouselItem>
                    <CarouselItem>
                    <Image 
                    height={'500px'}
                    width={'600px'}
                    className='d-block w-100'
                    src={carousel_five}
                    alt='fifth slide'/>
                    <CarouselCaption>
                        Natural Play Areas
                    </CarouselCaption>
                    </CarouselItem>
                </Carousel>
                </div>
            )
}


    render() {
        
        return(
            <Container className="BodyContainer">
            <div className='col-12' style={{margin:'auto', backgroundColor:"#FEFEFE", borderStyle:'solid', borderColor:'black', width:'100vw'}}>
                <div style={{margin:'auto', height:'500px', paddingTop:'80px' }}>
                {/* {this.renderCarousel()} */}
                <Image
                height={'100%'}
                width={'100%'}
                src={carousel_two}
                />
                </div>
                <div className='' style={{padding:'100px', height:'100%', width:'100%'}}>
                    <div style={{fontSize:'3rem', fontFamily:'New Century Schoolbook, TeX Gyre Schola, serif', fontStyle:'oblique', margin:'auto', color:'black', marginBottom:'150px', display:'inline-block'   }}>Big Or Small, We Take Them All!</div>
                    <div id="DivOne" style={{padding:'20px'}}>
                        <h3><b>We Are Insured!</b></h3>
                        <Image
                        height={50}
                        width={50}
                        src={''}/>
                    <div style={{height:'300px', width:'300px'}}></div>
                    
                    </div>
                    <div style={{float:'right', paddingRight:'5%', margin:'50px'}}>
                    <h3><b>Plan a Meet & Greet</b></h3>
                    <Image
                    height={50}
                    width={50}
                    src={''}/>
                        </div>
                    <div id="ServicesLink" style={{textWrap:'pretty', fontSize:'20px', display:'inline-block', marginTop:'150px'}}>
                        <div style={{margin:'auto', paddingTop:'100px', display:'inline-block'}}>
                            <b>
                        Dog Walking Services
                            </b>
                        </div>
                        <div style={{float:'right', paddingRight:'100px'}}>
                            We accept all non-aggressive dogs for our regular walking services.
                            Our effort to keep your mind at ease is second to none as we help keep up your loved ones' exercise levels up.
                            The goal is to help make sure your loving family member is happy and healthy for longer years to come.
                        </div>
                    </div>
                </div>
                        <div className="" style={{padding:'100px', height:'100%', overflow:'auto'}}>
                        <div style={{float:'right'}}>
                        <Image
                        height={350}
                        width={450}
                        src={trail_hikes_url}
                        />
                        </div>
                        <div style={{float:'right'}}>
                            <div style={{float:'right'}}>
                            <b>
                                Trail Hikes
                            </b>
                        </div>
                        <div  className="" style={{padding:'50px', float:'right'}}>The trails we use are back mountain trails outside of the city to give your loved one a greater experience and longer exposure to nature.
                            These trails are all dog friendly, vetted and tested by Catto Adventures to ensure safety for your loved ones.
                            <br/>
                            <br/>
                            depending on tested recall ability we will recommend on/off leash trail hiking abilites and can discuss further on trial basis for better safety of each loved one.
                        </div>
                            <div style={{padding:'50px'}}>
                                <b>
                                    Solo Walks
                                </b>
                                <div>
                                    these solo walks are built to be centered around dogs with special needs such as; High Anxiety, Social Fear, and Puppy Isolation for the very young. We always encourage to keep dogs social and friendly to others.
                                </div>
                                <div style={{padding:'50px'}}>
                                <Image
                                style={{}}
                                width={'350px'}
                                height={'450px'}
                                src={solo_walks_url}
                                />
                                </div>
                            </div>
                        </div>
                </div>
                <div className="d-block" style={{height:'100%', padding:'50px'}}>
                        </div>
            </div>
            </Container>
        )
    }
}

export default Body;