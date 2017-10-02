import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
 
class HomeCarousel extends Component {
    render() {
        return (
            <Carousel infiniteLoop autoPlay interval={5000} showIndicators={false} showThumbs={false} showStatus={false}>
                <div>
                    <img src="./images/SpacePunks.png" alt="Space Punks"/>
                    {/* <p className="legend">Coming Soon - Space Punks!</p> */}
                </div>
                <div>
                    <img src="./images/Parallax.png" alt="Parallax"/>
                    {/* <p className="legend">Coming Soon - Parallax</p> */}
                </div>
                {/* <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div> */}
            </Carousel>
        );
    }
};
 
export default HomeCarousel;
 
// Don't forget to include the css in your page
 
// Using webpack
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
 
// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
 