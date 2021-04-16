// Write your Character component here
import React from 'react'
// import styled, { keyframes } from 'styled-components'
import styled from 'styled-components'

// const { key, char } = props;

const StyledLine = styled.div`
  display: flex;
  border: solid black 1px;
//   margin: 10%
//   padding: 10%
  `

export default function Character({ key, char }) {
    // const 
    return (
        <div>
        <StyledLine>
            <p>
            {char.name} 
            </p>       
            {/* <button {onClick(() => {})}>Detail</button> */}
            <p>
            <button>DETAIL</button>
            </p>
        </StyledLine>
        </div>
    )
};

// export default Character;