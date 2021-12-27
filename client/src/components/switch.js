import React from 'react';
import Image from 'next/image';

const Switch = ({name, id}) => {
  return (
    <div className='single-line data-box' key={id}>
      <div className="icon">
        <Image
          src="/icons/switch.svg"
          width={30}
          height={30}
          alt="switch icon"
        />
      </div>
      <div className="content">
        <div className="name">{name}</div>
        <div className="type">Type: switch</div>
      </div>
    </div>
  )
}

export default Switch