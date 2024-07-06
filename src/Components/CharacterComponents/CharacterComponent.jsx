
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CharacterComponent.css';

const CharacterComponent = () => {
  const [chars, setChars] = useState([])
 const [pageNumber,setPageNumber]=useState(1)

  useEffect(() => {
    const getDataHandler = async () => {
      try {
        const user = await axios.get(`https://rickandmortyapi.com/api/character?page=${pageNumber}`);
        setChars(user.data.results);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    getDataHandler();
  }, [pageNumber]);
  
  const prevHandler = () => {
    setPageNumber(pageNumber-1)
  }

  const nextHandler = () => {
    setPageNumber(pageNumber+1)
  }

  return (
    <React.Fragment>
        <h1>List Of Characters</h1>
      <div className='users'>
        
        
        {chars && chars.map((iterator) => (
          <div className="user-ele">
              <div className='app' >
                  <img  className='show'src={iterator.image} alt={iterator.name}></img>
              </div>
              <div className='user' key={iterator.id}>
                <p>{iterator.name}</p>
                <p>{iterator.status}</p>
                <p>{iterator.species}</p>
              </div>
              
          </div>
         
       
         

        ))}
      </div>
      <button onClick={prevHandler}>Prev</button>
      <p>{pageNumber}</p>
      <button onClick={nextHandler}>Next</button> 
    </React.Fragment>
  );
}

export default CharacterComponent;
