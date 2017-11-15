import React, { Component } from 'react';
 
class AdventureSmall extends Component {
    render() {
        return (
        <div className="col-12">
            <div className="border">
                <div className="col-6 filler">
                    Image goes here
                </div>
                <div className="col-6">
                    <p>Title:</p> 
                    <p>Creator:</p>
                    <p>Short Description:</p>
                    <p>Goal:</p>
                    <br />
                    <p>Status:</p>
                </div>
            </div>
         </div>
        );
    }
};
 
export default AdventureSmall;
 
// Don't forget to include the css in your page
 
// Using webpack
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
 
// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
 






