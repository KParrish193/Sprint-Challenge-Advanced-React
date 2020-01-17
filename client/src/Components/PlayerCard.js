import React from "react";
import styled from 'styled-components';

const PlayerCardBody = styled.div`
background-color: #FBFBF8;
min-width: 30%;
max-width: 30%;
border: solid 1px grey;
margin: 1% 5%;
`

const PlayerCardHeader = styled.h3`
color: #A6D608;
`

const PlayerCardText = styled.div`
color: #464E51;
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