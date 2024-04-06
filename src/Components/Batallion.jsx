import React from 'react'
import { useParams } from 'react-router-dom';


const Batallion = () => {
    
    const { batallionId } = useParams();
    return (
        <>
            <div>{batallionId}</div>
        </>
    )
}

export default Batallion