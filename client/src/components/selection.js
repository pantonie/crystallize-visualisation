import React from 'react';
import Image from 'next/image';

const Selection = ({name, id, config}) => {
  console.log(config?.options);
  return (
    <div className='single-line data-box' key={id}>
      <div className="icon">
        <Image
          src="/icons/selection.svg"
          width={30}
          height={30}
          alt="selection icon"
        />
      </div>
      <div className="content">
        <div className="name">{name}</div>
        <div className="type">Type: selection</div>
        {config?.options && (
          <div>{config.options.map( option =>
            <p key={option.key}>{`${option.key} | ${option.value}`}</p>
          )}</div>
        )}

      </div>
    </div>
  )
}

export default Selection