import React from 'react';

const PropertiesTable = ({name, id, config}) => {
    return (
        <div className="chunk" key={id}>
            <p>properties Table</p>
             <div className='name'>{name}</div>
             {
                 config.sections.map(({keys, title}) => {
                     return (
                         <div key={title} className="table-properties">
                             <p><b>{title}:</b><br/>
                             {keys.map( key => {
                                 return (<span key={key}>* {key} <br/> </span>)
                             })}
                             </p>
                         </div>
                     )
                 }  )
             }

        </div>
    )
}

export default PropertiesTable;