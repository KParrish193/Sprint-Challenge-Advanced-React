import React from 'react';
import styled from 'styled-components';

import PlayerCard from './PlayerCard';
import useWindowWidth from '../hooks/useWindowWidth'
import desktopImage from '../Images/desktop.jpg'
import mobileImage from '../Images/mobile.jpg'

const CardList = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
flex-wrap: wrap;
background-color: #282c34;
`

const PlayerCardList = (props) => {
    console.log(props);
    const imageUrl = useWindowWidth() >= 650 ? desktopImage : mobileImage;

    return (
    <CardList className="card-list" style={{backgroundImage: `url(${imageUrl})` }}>
        {props.players.map(data => (
            <PlayerCard 
            key={data.id} 
            name={data.name}
            country={data.country}
            searches={data.searches} 
            />
        ))}
    </CardList>
    );
}

export default PlayerCardList;