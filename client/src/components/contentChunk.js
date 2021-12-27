import React from 'react';
import Numeric from './numeric'
import SingleLine from "./singleLine";
import Images from './images';


const ContentChunk = ({name, id, config: { components }}) => {
    return (
        <div className="chunk" key={id}>
            <div className='name'>{name}</div>
            <>
                { components.map(chunk => {
                    if (chunk.type === 'numeric'){
                        return <Numeric {...chunk}/>
                    } else if (chunk.type === 'singleLine'){
                        return <SingleLine {...chunk}/>
                    } else if (chunk.type === 'images'){
                      return <Images {...chunk}/>
                    } else {
                      return <p>{chunk.type}</p>
                    }
                })}
            </>
        </div>

    )
}

export default ContentChunk;