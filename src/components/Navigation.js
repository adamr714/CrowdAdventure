import React, { Component } from 'react';
// import './public/css/Navigation.css';

// const Navigation = React.createClass({
//   render: function() {
//     return (
//       <nav>
//         <div className="navWide">
//           <div className="wideDiv">
//             <a href="#">Link 1</a>
//             <a href="#">Link 2</a>
//             <a href="#">Link 3</a>
//           </div>
//         </div>
//         <div className="navNarrow">
//           <i className="fa fa-bars fa-2x" onClick={this.burgerToggle}></i>
//           <div className="narrowLinks">
//             <a href="#" onClick={this.burgerToggle}>Link 1</a>
//             <a href="#" onClick={this.burgerToggle}>Link 2</a>
//             <a href="#" onClick={this.burgerToggle}>Link 3</a>
//           </div>
//         </div>
//       </nav>
//     );
//   },
//   burgerToggle: function() {
//     let linksEl = document.querySelector('.narrowLinks');
//     if (linksEl.style.display === 'block') {
//       linksEl.style.display = 'none';
//     } else {
//       linksEl.style.display = 'block';
//     }
//   }
// });

export class Navigation extends React.Component {
  constructor(props) {
      super(props);
      this.state = {

      };
      // this.onClick = this.onClick.bind(this);
  }


      render() {
        return(
          <div className="header">
              <div className="row">
                <div className="col-12 logo">
                  <img src="images/CrowdAdventure.png" alt="CrowdAdventure Logo" />
                </div>  
              </div>

              <div className="row">
                <div className="col-12 navigation">
                  <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Create</li>
                    <li>View Projects</li>
                    <li>Log In</li>
                    <li>Sign Up</li>
                  </ul>  
                </div>  

              </div>  
          </div>
        );
      }
  
}

export default Navigation;




     

      