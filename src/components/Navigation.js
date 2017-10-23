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
        let links = [];

        links.push(<li><Link to={'/home'}>Home</Link></li>);
        links.push(<li><Link to={'/about'}>About Us</Link></li>);
        links.push(<li><Link to={'/create'}>Create</Link></li>);
        links.push(<li><Link to={'/view'}>View Projects</Link></li>);
        links.push(<li><Link to={'/login'}>Log In</Link></li>);
        links.push(<li><Link to={'/logout'}>Logout</Link></li>);
        links.push(<li><Link to={'/signup'}>Sign Up</Link></li>);

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
                    {links}
                  </ul>  
                </div>
              </div>  
          </div>
        );
      }
}

export default Navigation;




     

      