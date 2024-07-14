import React, { Component } from 'react';
import { Container, Image } from 'react-bootstrap';
import { Logo_url, untitled_logo, carousel_three, checkins, Walks, medicineadmin, healthy_living, wutang } from '../utils/constants';
import '../CSS/Services.css';


interface Props {

}

interface State {

}
class Services extends Component <Props, State> {
constructor(props:any) {
    super(props)

this.state = {

}





}

render() {

    return(
        <Container className="ServicesContainer" style={{ }}>
            <div  style={{ padding:'10%' }}>
                <Image
                width={'100%'}
                height={300}
                src={untitled_logo}
                />
            </div>
            <div>
                <div className='ServiceDiv1'>
                Services You Need With The People You Can Trust
                </div>
                <div className='SubDiv1'>
                    we offer a range of walk types from 30 min shuffles with Gladys's elderly Beagle to 
                    4 hour trail hikes with Sally's Aussie Cattle Dog who just needs to get that extra 
                    bit of energy out at the end of the week.
                </div>
                <div className='ImageDiv' style={{ height:'100%', paddingBottom:'10%'}}>
                    <div className="ImageDiv1" style={{ float:'right', width:'30%'}}>
                    <Image
                    width={'100%'}
                    src={healthy_living}
                    />
                    </div>
                </div>
                    <br/>
                    <div className='BoldDiv' style={{paddingTop:'20%'}}>
                        <b>
                        Need a Hand with Administering Medication?
                        </b>
                        <br/>
                        <div className="WrappedImageDiv" style={{ width:'40%'}}>
                            <Image
                            height={'100%'}
                            width={'100%'}
                            src={medicineadmin}/>
                        </div>
                    </div>
                        <div className='ParagraphDiv' style={{ padding:'3%'}}>
                        Our on staff Veterinarian Technician can assist with any administering of 
                        drugs or injections that may be difficult to give to your little ones
                        </div>
                    <div className='BoldDiv' style={{ paddingTop:'10%'}}>
                        <div className="WrapperDiv" style={{float:'right', width:'50%'}}>
                            <div style={{}}>
                                <b>
                                Having a long day away from the house?
                                </b>
                                <br/>
                            </div>
                        
                        <div className='CheckinDiv' style={{ padding:'2%'}}>
                            <div className="Checkin2Div" style={{ float:'right', width:'100%'}}>
                            <Image
                            width={'100%'}
                            src={checkins}/>
                            </div>
                        </div>
                        <div className='ParagraphDiv' style={{ display:'inline-block', paddingRight:'3%', margin:'10%'}}>
                        Let us take care of your little one's needs, we will come by and make sure they have been fed 
                        and topped up with water as well as being let out for a big bathroom break!
                        </div>
                        </div>
                        <div style={{ }}>
                        <div style={{ paddingTop:'40%'}}>
                        <div className='BoldDiv' style={{ margin:'auto' }}>
                        <b>
                        Walking
                        </b>
                        <br/>
                        <div>
                        <div className='WrappedImageDiv' style={{ width:'50%' }}>
                            <Image
                            width={'100%'}
                            src={Walks}/>
                        </div>
                        </div>
                        <div className='ParagraphDiv' style={{ padding:'3%', margin:'1%' }}>
                            all of our walks are scheduled for your needs and planned specifically for your best friend.
                            We offer local area trail walks for those with simple time needs.
                        </div>
                        </div>
                        </div>
                        </div>
                        <div className='BoldDiv' style={{ display:'inline-block', paddingTop:'10%' }}>
                            <div style={{ float:'right'}}>
                            <b>
                            Trail Hikes
                            </b>
                            <br/>
                            <div className="WrappedImageDiv" style={{ width:'40%', float:'right'}}>
                                <Image
                                height={'100%'}
                                width={'100%'}
                                src={wutang}/>
                            </div>
                            <div className='ParagraphDiv' style={{ paddingTop:'10%', paddingRight:'45%' }}>
                                Long hikes are not everyones favorite, but some of your best friends crave that level of exercise!
                                Let us take care of that! We provide long trail hikes up to 4 hours in length and work with on or off leash companions.
                                These hikes are perfect for getting that great amount of exercise at the end of the week before a long road trip to the lake,
                                or even mid week zoomies!
                            </div>
                            </div>
                        </div>
                    </div>
            </div>
        </Container>
    )
}
}


export default Services;