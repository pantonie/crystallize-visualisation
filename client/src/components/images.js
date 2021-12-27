import React from 'react';
import Image from 'next/image';

const Images = ({name, id}) => {
  return (
    <div className='single-line data-box' key={id}>
      <div className="icon">
        <Image
          src="/icons/image.svg"
          width={30}
          height={30}
          alt="rich text icon"
        />
      </div>
      <div className="content">
        <div className="name">{name}</div>
        <div className="type">Type: image</div>
      </div>
    </div>
  )
}

export default Images