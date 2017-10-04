import React, { Component } from 'react';
 
class Card extends Component {
    render() {
        return (
        <div className="col-6">
                <div className="border">
            <div className="col-6 filler">
                Image goes here
            </div>
            
            
            <div className="col-6">
                <p>Title</p>
                <p>Adventure By:</p>
                <p>Description:</p>
                <p>Goal:</p>
                <br />
                <p>Status:</p>
                
                        <div className="col-4 filler">
                        dddd
                        </div>

                        <div className="col-4 filler">
                        dddd
                        </div>

                        <div className="col-4 filler">
                        dddd
                        </div>

                        <div className="col-4 filler">
                        ddd
                        </div>

                        <div className="col-4 filler">
                        ddd
                        </div>

                        <div className="col-4 filler">
                        dddd
                        </div>

                    </div>
                </div>
            </div>
        );
    }
};
 
export default Card;
 
// Don't forget to include the css in your page
 
// Using webpack
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
 
// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
 






