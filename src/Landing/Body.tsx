import { faRightToBracket, faClipboardCheck, faHandshake, faFaceLaughBeam } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {Component, useState} from 'react';
import {Container, Row, Col, Image, Carousel, CarouselItem, CarouselCaption } from 'react-bootstrap';
import SocialMedia from '../Nav Components/Services';
import {trail_hikes_url, walking_service_url, Background_url, Logo_url, solo_walks_url, healthy_living, opener_image, untitled_logo, rainNshine} from '../utils/constants';
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
            {/* <Carousel className='carousel' wrap={true} slide={true} interval={10000} style={{width:'100%', height:'100%', borderColor:'#8C4F32', borderStyle:'groove', borderWidth:'10px', fontSize:'23px', fontWeight:'bold'}}>
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
                </Carousel> */}
                </div>
            )
}


    render() {
        
        return(
            <Container className="BodyContainer" style={{ display:'block'}}>
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
                <div className='logoNameImage' style={{width:'100%', height:'50%', display:'inline-block'}}>
                <Image
                height={'100%'}
                width={'100%'}
                src={opener_image}
                    />
                </div>
                
                    <div style={{fontSize:'2rem', fontWeight:'bold', textAlign:'center', color:'black', margin:'5%' }}>
                        Big Or Small, We Take Them All!
                    </div>
                    <div className="wrapperDiv" style={{width:"100%"}}>
                    <div style={{width:"100%"}}>
                    <div id="DivOne" style={{width:'30%', display:'inline-block', textAlign:'center', marginRight:'5%'}}>
                        <h3><b>We Are Insured!</b></h3>
                        <br/>
                        <div style={{}}>
                        <FontAwesomeIcon className="styleIcon fa-2xl" icon={faClipboardCheck}/>
                        </div>
                        <div style={{display:'block', paddingTop:'10%'}}>
                        <p><b>rest easy knowing that you and your best friend are taken care of</b></p>
                        </div>
                    </div>
                    <div id="DivTwo" style={{width:'30%', display:'inline-block', textAlign:'center'}}>
                    <h3><b>Fun Times!</b></h3>
                    <div style={{}}>
                    <FontAwesomeIcon className="styleIcon fa-2xl" icon={faFaceLaughBeam}/>
                    </div>
                    <div style={{display:'inline-block', paddingTop:'10%'}}>
                        <p><b>All our walks are fun for everyone! being out in nature is our guilty pleasure, so let us keep you guilt free. </b></p>
                    </div>
                    </div>
                    <div id="DivTwo" style={{width:'30%', display:'inline-block', textAlign:'center', float:'right'}}>
                    <h3><b>Plan a Meet & Greet</b></h3>
                    <div style={{}}>
                    <FontAwesomeIcon className="styleIcon fa-2xl" icon={faHandshake}/>
                    </div>
                    <div style={{display:'inline-block', paddingTop:'10%'}}>
                        <p><b>Plan a Meetup to discuss what would be the best for you and for your Best Friend</b></p>
                    </div>
                    </div>
                    </div>
                    </div>
                    <div id="ServicesLink" style={{textWrap:'pretty', fontSize:'20px', display:'inline-block', marginTop:'150px', marginBottom:0}}>
                    <div className="soloWalkImage" style={{float:'right', width:'50%'}}>
                            <Image 
                            height={'100%'}
                            width={'100%'}
                            src={healthy_living}/>
                            </div>
                        <div style={{display:'inline-block'}}>
                            <div style={{paddingTop:'50px'}}>
                            <b>
                        Keeping your Best Friend Healthy!
                            </b>
                            </div>
                            
                        
                        <div style={{float:'right', paddingRight:'100px', paddingTop:'2%'}}>
                            Everyone knows sometimes its difficult to make sure our Best Friends get enough exercise during the week.
                            Thats where we can help! from once a week to once a day, we can work with you to make sure our friends get the exercise they need
                            and make sure they live a longer happy and healthy life!
                        </div>
                    </div>
                    </div>
                
                        <div className="" style={{padding:'100px', height:'100%', width:'100%'}}>
                        <div className="soloWalkImage" style={{display:'block', float:'right', width:'70%'}}>
                        <Image
                        height={'100%'}
                        width={'100%'}
                        src={rainNshine}
                        />
                        </div>
                        <div style={{float:'right', display:'inline-block', padding:'10px', fontSize:'20px'}}>
                            <div style={{float:'right', margin:'auto', padding:'20px'}}>
                            <b>
                                We Are There Rain or Shine!
                            </b>
                        </div>
                        <div  className="" style={{float:'right'}}>
                            No matter the weather we keep ourselves prepared to keep your Best Friend healthy. Rain or Shine we enjoy the time we spend making sure
                            these walks are given to ensure happy days! even when it looks a bit dreadful.. 
                            <br/>
                            <br/>
                            
                        </div>
                            <div style={{display:'inline-block', marginTop:'20%'}}>
                                <b>
                                Is your Buddy stressed out in crowds or around others? 
                                </b>
                                <div style={{paddingTop:'20px'}}>
                                    We have created walk plans custom to your Best Friends' special requirements, don't forget to mention their special requirements to us
                                    for the best possible plan.
                                </div>
                                <div className="soloWalkImage" style={{width:'50%', marginTop:'5%', marginBottom:'5%'}}>
                                <Image
                                style={{}}
                                width={'100%'}
                                height={'80%'}
                                src={solo_walks_url}
                                />
                                </div>
                            </div>
                        </div>
                </div>
                <div className="d-block" style={{height:'100%', padding:'50px'}}>
                        </div>
                        <div style={{display:'inline-block'}}>
                    <h2>
                        Contact us!
                    </h2>
                    <p>call or text 604-832-5723</p>
                    <p>If we cannot answer the call right away, please leave a message for us to get back to you!</p>
                </div>
            </div>
            </Container>
        )
    }
}

export default Body;