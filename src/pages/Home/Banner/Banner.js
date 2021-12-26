import React from 'react';
import './Banner.css';
import image1 from '../../../images/image-r-1.jpg'
import image2 from '../../../images/image-r-2.jpg'
import image3 from '../../../images/image-r-3.jpg'

const Banner = () => {
    return (
        <div className="banner">
            <div className="container">
                <div className="contant">
                    <div className="center-contant">
                        <div className="contant-left">
                            <h1>Bhojon Bilash</h1>
                            <h5>--Your Satisfaction is our success.</h5>
                        </div>
                        <div className="contant-right">
                            <div className="contact-right-two-images">
                                <img src={image1} alt="" />
                                <img src={image2} alt="" />
                            </div>
                            <div className="contact-right-one-image">
                                <img src={image3} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;