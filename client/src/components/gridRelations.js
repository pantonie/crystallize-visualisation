import React from 'react';
import Image from 'next/image';

const GridRelations = ({name, id}) => {
  return (
    <div className='single-line data-box' key={id}>
      <div className="icon">
        <Image
          src="/icons/gridRelation.svg"
          width={30}
          height={30}
          alt="rich text icon"
        />
      </div>
      <div className="content">
        <div className="name">{name}</div>
        <div className="type">Type: gridRelations</div>
      </div>
    </div>
  )
}

export default GridRelations