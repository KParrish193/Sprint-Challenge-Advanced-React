import React from "react";
import styled from 'styled-components';

const PlayerCardBody = styled.div`

`

const PlayerCardHeader = styled.h2`
color: blue;
`
const PlayerCardText = styled.div`

`

const PlayerCard = (props) => {

    return (
    <>

        <div>
        <PlayerCardBody className="UserCardBody">
            <PlayerCardHeader>
                Player Name:
            </PlayerCardHeader>
        <PlayerCardText className="other-info">
            <p>Country: </p>
            <p>Number of Google Searches: </p>
        </PlayerCardText>
        </PlayerCardBody>
        </div>

    </>
    )
};
    export default PlayerCard;