import React from 'react';

import PlayerCard from './PlayerCard';

const PlayerCardList = (props) => {
    console.log(props);
    
    return (
    <div className="card-list">
        {props.players.map(data => (
            <PlayerCard 
            key={data.id} 
            name={data.name}
            country={data.country}
            searches={data.searches} 
            />
        ))}
    </div>
    );
}

export default PlayerCardList;