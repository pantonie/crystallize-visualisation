import React from 'react';
import Image from 'next/image';

const NumericChunk = ({name, content, id}) => {
    return (
        <div className='numeric-chunk data-box' key={id}>
            <div className="icon">
              <Image
                src="/icons/numeric.svg"
                width={30}
                height={30}
                alt="rich text icon"
              />
            </div>
            <div className="content">
                <div className="name">{name}</div>
                <div className="type">Type: numeric</div>
                { content?.unit ? <div>Unit: {content.unit}</div> : null}
            </div>
        </div>
    )
}

export default NumericChunk