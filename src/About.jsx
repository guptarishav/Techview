import React from "react";
import Common from './Common';
import web1 from '../src/img/img2.jpg';


const About = () =>{
    return(
    <>
    <Common name="Welcome to About page" 
    imgsrc={web1}
    visit="/contact"
    btname="Contact Now"
    />

    </>
    )
};
export default About;