import React from 'react';
import './card.styles.css'

const Card = ({ writer}) => (
    <div className='card-container'>
        <img alt='writer' src={`https://robohash.org/${writer.id}??set=set2&size=180x180`} />
        <h2>{writer.name}</h2>
        <p>{writer.email}</p>
    </div>
)
export default Card;
