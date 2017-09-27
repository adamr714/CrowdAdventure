import React from 'react'
import {Link} from 'react-router';

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
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/about/'}>About Us</Link></li>
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




     

      