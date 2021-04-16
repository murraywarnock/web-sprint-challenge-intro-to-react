// import React, {useState} from 'react'
import React from 'react'
import styled from 'styled-components'

const StyledTable = styled.table`
    margin: auto;
    font-family: courier;
    margin-top: 4%;
    border: none;
    border-radius: .5rem;
    background-color: black;
    background-image: radial-gradient(
      rgba(0, 150, 0, 0.75), black 120%
    );
    opacity: 1;
    color: white;
    font: Inconsolata, monospace;

  tbody {
  }
  td {
    width: 50%;
  }
  .colLeft {
      text-align: right;
      margin-right 1%;
  }
  .colRight {
    text-align: left;
    font-weight: bold;
    margin-left 1%;
}
`

export default function Details({ details }) {
    // const [showDetails, setShowDetails] = useState(false);
    // console.log("Outside JSX showDetails: ",showDetails);
    return (
        <div>
    <StyledTable>
        <tbody>
        <tr>
            <td className = "colLeft">Birth Year:</td> <td className = "colRight">{details.birth_year}</td>
        </tr>
        <tr> 
            <td className = "colLeft">Eye Color:</td> <td className = "colRight">{details.eye_color}</td>
        </tr>
        {/* <tr>
            <td className = "colLeft" >films (array) :</td> <td className = "colRight">{details.films}</td>
        </tr>  */}
        <tr>
            <td className = "colLeft">Gender:</td> <td className = "colRight">{details.gender}</td>
        </tr>
        <tr>
            <td className = "colLeft">Hair Color:</td> <td className = "colRight">{details.hair_color}</td>
        </tr>
        <tr>
            <td className = "colLeft">Height:</td> <td className = "colRight">{details.height}</td>
        </tr>
        {/* <tr>
            <td className = "colLeft">Home World:</td> <td className = "colRight">{details.homeworld}</td>
        </tr>  */}
        <tr>
            <td className = "colLeft">Mass:</td> <td className = "colRight">{details.mass}</td>
        </tr>
        <tr>
            <td className = "colLeft">Skin Color:</td> <td className = "colRight">{details.skin_color}</td>
        </tr>
        {/* <tr>
            <td className = "colLeft">Species (array):</td> <td className = "colRight">{details.species}</td>
        </tr>  
        <tr>
            <td className = "colLeft">Star Ships:</td> <td className = "colRight">{details.starships}</td>
        </tr> 
        <tr>
            <td className = "colLeft">Vehicles:</td> <td className = "colRight">{details.vehicles}</td>
        </tr> */}
        </tbody>
   </StyledTable>
    </div>
     
    )};