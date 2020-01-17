import React from "react";
import styled from 'styled-components';

const PlayerCardBody = styled.div`
background-color: white;
min-width: 30%;
border: solid 1px grey;
margin: 1%;
`

const PlayerCardHeader = styled.h3`
color: blue;
`

const PlayerCardText = styled.div`
color: red
`

const PlayerCard = (props) => {

    return (
        <PlayerCardBody className="UserCardBody">
            <PlayerCardHeader>
                Player Name: {props.name}
            </PlayerCardHeader>
        <PlayerCardText className="other-info">
            <p>Country: {props.country} </p>
            <p>Number of Google Searches: {props.searches} </p>
        </PlayerCardText>
        </PlayerCardBody>
    )
};

export default PlayerCard;