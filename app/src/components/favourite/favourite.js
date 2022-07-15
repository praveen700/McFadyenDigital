import React from "react";
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import Dress from "../../assests/dress.jpg";
import DressTwo from "../../assests/dress2.jpg";
import LandingTabs from "../tabs/tabs";
import "./favourite.scss";

const Favourite = () => {
    const matches = useMediaQuery('(max-width:480px)');
    console.log(matches, "matches")
    return (
        <>
            <div className="card card-content">
                <h1>JONATHAN SIMKHAI</h1>
                <p className="lurex">Lurex Linen Viscose Jacket in Conchinjal</p>
                <p class="price">$19.99</p>
                <p ><strong>COLOR</strong> CONCHINJAL</p>
                <div className="color-images">
                    <img className="dress" src={Dress} />
                    <img className="dressTwo" src={DressTwo} />
                </div>
                <div className="sizes">
                    <div>
                        <strong>SIZE: L</strong>
                    </div>
                    <div>
                        <strong>SIZE GUIDE</strong>
                    </div>
                </div>
                <div className="btn-grp">
                    <div>
                        <Button>XS</Button>
                    </div>
                    <div>
                        <Button>S</Button>
                    </div>
                    <div className="m-size">
                        <Button disabled={true}>M</Button>
                    </div>
                    <div>
                        <Button>L</Button>
                    </div>
                    <div>
                        <Button>XXL</Button>
                    </div>
                </div>
                <p className="add-to-bag"><button>Add to Bag <span>&#8594;</span>
                </button></p>
                <div className="interset">
                    <p className="text">Get 4 interest free payments of $196 with klarama</p>
                    <p className="learn">LEARN MORE</p>
                </div>
                <p className="chat">Speak to personal stylist CHAT NOW</p>
            </div>
            <div style={{ display: matches ? "block" : "none" }}>
                <LandingTabs />
            </div>
            <div className="bottom-a-tags" style={{ display: matches ? "flex" : "none" }}>
                <div><a href="#" >jonathan</a></div>
                <div><a href="#" >blazers</a></div>
                <div><a href="#" >viscode</a></div>
            </div>
            <div className="note" style={{ display: matches ? "block" : "none" }}>
                <strong>A note from the editor</strong>
                <div className="note-para">
                    <p>the forte lurex linen viscose jacket in mother of peral fetaure lunar lavishness by night and by day</p>
                </div>
                <strong>By <u>MINAHA SHIM</u> Fashion Editor</strong>
            </div>
        </>
    );
};

export default Favourite;
