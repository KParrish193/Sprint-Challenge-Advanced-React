import React from 'react';
import styled from 'styled-components';

import PlayerCard from './PlayerCard';

const CardList = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
flex-wrap: wrap;

`


const PlayerCardList = (props) => {
    console.log(props);
    
    return (
    <CardList className="card-list">
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