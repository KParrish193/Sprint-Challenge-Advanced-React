import React from "react";
import styled from 'styled-components';

const PlayerCardBody = styled.div`
background-color: #FBFBF8;
min-width: 20%;
max-width: 20%;
min-height: 20vh;
border: solid 1px grey;
margin: 1% 5%;
padding: 1%;
`

const PlayerCardHeader = styled.h3`
color: #A6D608;
text-decoration: underline;
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