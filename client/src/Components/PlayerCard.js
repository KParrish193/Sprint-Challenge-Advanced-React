import React from "react";
import styled from 'styled-components';

const PlayerCardBody = styled.div`
background-color: white;
`

// const PlayerCardHeader = styled.h3`
// color: blue;
// `

// const PlayerCardText = styled.div`
// color: red
// `

const PlayerCard = () => {
    
    
    return (
        <PlayerCardBody className="UserCardBody">
            <p>Dummy Text</p>
            {/* <PlayerCardHeader>
                Player Name: {players.name}
            </PlayerCardHeader>
        <PlayerCardText className="other-info">
            <p>Country: {players.country} </p>
            <p>Number of Google Searches: {players.searches} </p>
        </PlayerCardText> */}
        </PlayerCardBody>
    )
};

export default PlayerCard;