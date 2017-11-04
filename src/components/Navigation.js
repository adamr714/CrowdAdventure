import React from 'react'
import {Link} from 'react-router';
import store from '../store';

import {connect} from 'react-redux';

import * as actions from '../actions/index';


export class Navigation extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      };
      this.onLogoutClick = this.onLogoutClick.bind(this);
  }

      onLogoutClick() {
        store.dispatch(actions.logoutSuccess());
      }
      
      render() {
        let links = [];

        links.push(<li><Link to={'/home'}>Home</Link></li>);
        links.push(<li><Link to={'/about'}>About Us</Link></li>);

        if(this.props.loggedIn) {
          links.push(<li><Link to={'/create'}>Create</Link></li>);
        }

        links.push(<li><Link to={'/view'}>View Projects</Link></li>);


        if(!this.props.loggedIn) {
          links.push(<li><Link to={'/login'}>Log In</Link></li>);
          links.push(<li><Link to={'/signup'}>Sign Up</Link></li>);
        } else {
          links.push(<li><Link onClick={this.onLogoutClick} to={'/'}>Logout</Link></li>);
          links.push(<li><Link to={'/profile'}>Profile</Link></li>);
        }
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

const mapStateToProps =(state, props) => ({
  loggedIn: state.user.loggedIn,
});

export default connect(mapStateToProps)(Navigation);



     

      