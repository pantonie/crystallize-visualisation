import React from 'react';
import Image from 'next/image';

const Location = ({name, id}) => {
  return (
    <div className='single-line data-box' key={id}>
      <div className="icon">
        <Image
          src="/icons/location.svg"
          width={30}
          height={30}
          alt="location icon"
        />
      </div>
      <div className="content">
        <div className="name">{name}</div>
        <div className="type">Type: location</div>
      </div>
    </div>
  )
}

export default Location