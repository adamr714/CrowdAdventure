import React from 'react';

export class Profile extends React.Component {
  constructor(props) {
      super(props);
      this.state = {

      };
      // this.onClick = this.onClick.bind(this);
  }


      render() {
        return(
          <div className="profile">
              <div className="row">
             

             <h3 className="white">Adventures Backed</h3>
             <div ref="created">
                <p className="white">No created Adventures</p>
                </div>


                

             <h3 className="white">Adventures Created</h3>
             <div ref="backed">
             <p className="white"> No backed Adventures</p>
                </div>
             

             </div>
          </div>
        );
      }
  
}

export default Profile;




     

      