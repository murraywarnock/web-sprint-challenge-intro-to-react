// Write your Character component here
import React, {useState} from 'react'
// import styled, { keyframes } from 'styled-components'
import styled from 'styled-components'
import Details from './Details'


const StyledLine = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-between;
  border: solid black 1px;
 //   padding: 10%
`
export default function Character({ key, char }) {
    const [showDetails, setShowDetails] = useState(false);
    // console.log("Outside JSX showDetails: ",showDetails);
    return (
        <div>
        <StyledLine>
            {char.name} 
            <button onClick={(() => {
                setShowDetails(!showDetails);
                // console.log(showDetails); //click event is working
            })}>{showDetails ? "-" : "+"}</button>
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