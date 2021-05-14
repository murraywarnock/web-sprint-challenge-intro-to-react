// Write your Character component here
import React, {useState} from 'react'
// import styled, { keyframes } from 'styled-components'
import styled from 'styled-components'
import Details from './Details'


const StyledLine = styled.div`
  margin-top: 5%;
  margin-left: 10%;
  display: flex;
  justify-content: space-between;
  
  .charName {
    transition: all 0.2s ease-in-out;
    &:hover {
      transition: all 0.2s ease-in-out;
      border-bottom:  solid brown 2px; 
    }
  
  }
  button {
      border-radius: 5px;
  }
  .closedButton {
      color: white;
      background-color: blue;
  }
  .openButton {
    color: white;
    background-color: red;
}
`
export default function Character({ key, char }) {
    const [showDetails, setShowDetails] = useState(false);
    // const [showDetails, setShowDetails] = useState(true); // for dev
    // console.log("Outside JSX showDetails: ",showDetails);
    return (
        <div>
        <StyledLine>
            <button className = {showDetails ? "openButton" : "closedButton"} onClick={(() => {
                setShowDetails(!showDetails);
            })}>{showDetails ? "-" : "+"}</button>
            <span className = "charName">{char.name} </span>
        </StyledLine>
        {/* {console.log("Inside JSX showDetails: ",showDetails)} */}
        
        { showDetails && 
            <Details details={char}>
            </Details>
        }
        </div>
    )
};

// export default Character;