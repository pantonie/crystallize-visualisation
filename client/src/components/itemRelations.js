import React from 'react';
import {Link} from '@mui/material';
import Image from 'next/image';

const ItemRelations = ({name, config, id}) => {
  return (
    <div className='single-line data-box' key={id}>
      <div className="icon">
        <Image
          src="/icons/relation.svg"
          width={30}
          height={30}
          alt="relation icon"
        />
      </div>
      <div className="content">
        <div className="name">{name}</div>
        <div className="type">Type: relation</div>
        <div>{
          config.acceptedShapeIdentifiers.map(i => <Link key={i} href={`#${i}`}>{i}</Link>)
        }</div>
      </div>
    </div>
  )
}

export default ItemRelations