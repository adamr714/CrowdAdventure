import React from 'react'
import {Link} from 'react-router';
import store from '../store';
import NavLink from './NavLink'

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

        links.push(<li><NavLink to={'/home'}>Home</NavLink></li>);
        links.push(<li><NavLink to={'/about'}>About Us</NavLink></li>);

        if(this.props.loggedIn) {
          links.push(<li><NavLink to={'/create'}>Create</NavLink></li>);
        }

        links.push(<li><NavLink to={'/view'}>View Projects</NavLink></li>);


        if(!this.props.loggedIn) {
          links.push(<li><NavLink to={'/login'}>Log In</NavLink></li>);
          links.push(<li><NavLink to={'/signup'}>Sign Up</NavLink></li>);
        } else {
          links.push(<li><NavLink onClick={this.onLogoutClick} to={'/'}>Logout</NavLink></li>);
          links.push(<li><NavLink to={'/profile'}>Profile</NavLink></li>);
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



     

      