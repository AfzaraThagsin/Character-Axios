// import React, { useState } from 'react'
//  import './CharacterComponent.css'

// const CharacterComponent = () => {
//     const [char,setChars]=useState([])

//     const getDataHandler=async()=>
//     {
//         const user = await axios.get('https://rickandmortyapi.com/api/character');        setChars(user.data)
        
//     }
//   return (
//     <React.Fragment>
//     <button onClick={getDataHandler}>Get Data</button>
//     <div className='users'>
//         {char && char.map((iterator,index)=>
//             (
//                 <div className='user' key={index}> to keep on iterate this we isolate this in separate component as user component using props is same as the parameter in function
//                 <p>{iterator.name}</p>
//                 <p>{iterator.email}</p>
//                 <p>{iterator.website}</p>
//                 </div>
//             )
//         )}
//     </div>
//     </React.Fragment>
//   )
// }

// export default CharacterComponent
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CharacterComponent.css';

const CharacterComponent = () => {
  const [chars, setChars] = useState([])

  useEffect(() => {
    const getDataHandler = async () => {
      try {
        const user = await axios.get('https://rickandmortyapi.com/api/character');
        setChars(user.data.results);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    getDataHandler();
  }, []);

  return (
    <React.Fragment>
        <h1>List Of Characters</h1>
      <div className='users'>
        
        
        {chars && chars.map((iterator) => (
            <div className='app' >
                <img  className='show'src={iterator.image} alt={iterator.name}>
                </img>
          <div className='user' key={iterator.id}>
            <p>{iterator.name}</p>
            <p>{iterator.status}</p>
            <p>{iterator.species}</p>
          </div>
             </div>
         
       
         

        ))}
      </div>
    </React.Fragment>
  );
}

export default CharacterComponent;
