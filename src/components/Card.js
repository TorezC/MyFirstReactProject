import React from 'react';

const Card = ({id, name, email}) => {
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5' >
            <h1>R</h1>
            <div>
                <h1>{name}</h1>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;