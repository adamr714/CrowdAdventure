import React from 'react';
import Navigation from './Navigation';

// import {Router, Route, hashHistory} from 'react-router';


export default function Master(props) {
    return (
        <div>
           <div>
                <Navigation />
           </div> 
            <div>
                {props.children}
            </div>    
        </div>  
    );
}


// export class Master extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
  
//         };
//         // this.onClick = this.onClick.bind(this);
//     }
  
  
//         render() {
//           return(
//               <div>
//                     <div>
//                         <Navigation />
//                     </div>    
//                     <div>
//                         {this.props.children}
//                     </div>
//               </div>    
//           );
//         }
//   }

//   export default Master;