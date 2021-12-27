import React from 'react';
import Image from 'next/image';

const Videos = ({name, id}) => {
  return (
    <div className='single-line data-box' key={id}>
      <div className="icon">
        <Image
          src="/icons/video.svg"
          width={30}
          height={30}
          alt="rich text icon"
        />
      </div>
      <div className="content">
        <div className="name">{name}</div>
        <div className="type">Type: video</div>
      </div>
    </div>
  )
}

export default Videos