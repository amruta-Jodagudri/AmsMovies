import React from 'react';
import { useParams } from 'react-router-dom';

const MovieItem = () => {
    const {id} = useParams();
    return (
        <div>
            our single movie {id}
        </div>
    );
}

export default MovieItem;
