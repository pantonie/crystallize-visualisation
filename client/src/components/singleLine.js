import React from 'react';
import Image from 'next/image';

const SingleLine = ({name, id}) => {
    return (
        <div className='single-line data-box' key={id}>
            <div className="icon">
              <Image
                src="/icons/singleLine.svg"
                width={30}
                height={30}
                alt="rich text icon"
              />
            </div>
            <div className="content">
                <div className="name">{name}</div>
                <div className="type">Type: single line</div>
            </div>
        </div>
    )
}

export default SingleLine