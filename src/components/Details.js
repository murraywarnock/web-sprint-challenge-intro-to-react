// import React, {useState} from 'react'
import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
color: red;
p {
  margin-left: 5%;
  text-align: left;
//   border: solid black 1px;
 //   padding: 10%
}
`

export default function Details({ details }) {
    // const [showDetails, setShowDetails] = useState(false);
    // console.log("Outside JSX showDetails: ",showDetails);
    return (
    <StyledDiv>
        <p>Birth Year: {details.birth_year}</p>
        <p>Eye Color: {details.eye_color}</p>
        <p>films (array) : {details.films}</p> 
        <p>Gender: {details.gender}</p>
        <p>Hair Color: {details.hair_color}</p>
        <p>Height: {details.height}</p>
        <p>Home World: {details.homeworld}</p> 
        <p>Mass: {details.mass}</p>
        <p>Skin Color: {details.skin_color}</p>
        <p>Species (array): {details.species}</p> 
        <p>Star Ships: {details.starships}</p> 
        <p>Vehicles: {details.vehicles}</p> 
        <p>Birth Year: {details.birth_year}</p>
    </StyledDiv>
     
    )};