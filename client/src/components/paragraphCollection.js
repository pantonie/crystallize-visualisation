import React from 'react';
import Image from 'next/image';

const ParagraphCollection = ({name, id}) => {
  return (
    <div className='single-line data-box' key={id}>
      <div className="icon">
        <Image
          src="/icons/paragraphCollection.svg"
          width={30}
          height={30}
          alt="ParagraphCollection icon"
        />
      </div>
      <div className="content">
        <div className="name">{name}</div>
        <div className="type">Type: paragraphCollection</div>
      </div>
    </div>
  )
}

export default ParagraphCollection