import React from 'react';
import Card from '../card/card-component';
import './card-list.styles.css';

 export const CardList = (props) => (
    <div className='card-list'>
        {props.writers.map(writer => (
            <Card key={writer.id} writer={writer}/>
        ))}
    </div>
);
// export default CardList;
