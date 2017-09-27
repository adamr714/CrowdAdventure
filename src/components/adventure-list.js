import React from 'react';
import Adventure from './adventure';

export default function AdventureList(props) {
    const adventures = Object.keys(props.adventures).map((contactId, index) => {
        const adventure = props.adventures[contactId];
        return (
            <li key={index}>
               <Contact id={adventure.id} name={adventure.name}
                        phoneNumber={adventure.phoneNumber} />
            </li>
        );
    });

   return (
       <ul>
           {adventures}
       </ul>
   );
};