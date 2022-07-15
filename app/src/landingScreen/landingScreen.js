import React from "react";
import Header from "../components/header/header";
import LandingTabs from "../components/tabs/tabs";
import "./landingScreen.scss";
import Dress from "../assests/dress.jpg";
import DressThree from "../assests/dress3.jpg";
import DressFour from "../assests/dress4.jpg";
import DressFive from "../assests/dress5.jpg";
import SimpleImageSlider from "react-simple-image-slider";
import Favourite from "../components/favourite/favourite";
import useMediaQuery from '@mui/material/useMediaQuery';

const LandingScreen = () => {
    const matches = useMediaQuery('(max-width:480px)');

    const images = [
        { url: Dress },
        { url: DressThree },
        { url: DressFour },
        { url: DressFive },
    ];
    return (
        <div className="landing-container">
            <Header />
            <div className="screen">
                <div className="landing-screen-content">
                    <div className="col-sm-4">
                        <LandingTabs />
                    </div>
                    <div className="col-sm-4">
                         
                         <div style={{display : matches ? "none": "" }}> 
                         <div className="dress-one">
                            <img src={Dress} alt="dress" />
                        </div>
                         <div className="dress-two">
                            <img src={DressThree} alt="dress" />
                            <img src={DressFour} alt="dress" />
                        </div>
                        {/* <div className="dress-three">
                            <img src={DressFour} alt="dress" />
                        </div> */}
                        <div className="dress-four">
                            <img src={DressFive} alt="dress" />
                        </div> 
                        </div>
                       
                        <div className="dress-one" style={{display : matches ? "block": "none" }}>
                            <SimpleImageSlider
                                width={"100%"}
                                height={504}
                                images={images}
                                showBullets={true}
                                showNavs={true}
                            />
                        </div>
                        <div className="bottom-a-tags" style={{display : matches ? "none": "flex" }}>
                            <div><a href="#" >jonathan</a></div>
                            <div><a href="#" >blazers</a></div>
                            <div><a href="#" >viscode</a></div>
                        </div>
                        <div className="note" style={{display : matches ? "none": "block" }}>
                            <strong>A note from the editor</strong>
                            <div className="note-para">
                                <p>the forte lurex linen viscose jacket in mother of peral fetaure lunar lavishness by night and by day</p>
                            </div>
                            <strong>By <u>MINAHA SHIM</u> Fashion Editor</strong>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <Favourite />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingScreen;