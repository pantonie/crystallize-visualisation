import React from 'react';
import SingleLine from '../components/singleLine';
import ContentChunk from './contentChunk';
import Numeric from './numeric';
import PropertiesTable from './propertiesTable';
import ItemRelations from './itemRelations';
import RichText from './richText';
import Images from './images';
import ParagraphCollection from './paragraphCollection';
import Videos from './videos';
import GridRelations from './gridRelations';
import Datetime from './datetime';
import Location from "./location";
import Selection from './selection';
import Switch from './switch';

const types = ['contentChunk', 'itemRelations', 'numeric','singleLine' ]

const Shape = ({shape}) => {
    if (!shape?.components || !shape?.components.length) return 'No components here!';
    const sorted = [...shape.components].sort((a,b) => {return types.indexOf(a.type) - types.indexOf(b.type)})
    return sorted.map(c => {
                switch (c.type) {
                  case 'singleLine':
                    return <SingleLine {...c}/>;
                  case 'numeric':
                      return <Numeric {...c}/>;
                  case'contentChunk':
                      return <ContentChunk {...c}/>
                  case 'propertiesTable':
                      return <PropertiesTable {...c}/>
                  case 'itemRelations':
                      return <ItemRelations {...c} />
                  case 'richText':
                      return <RichText {...c}/>
                  case 'images':
                      return <Images {...c}/>
                  case 'paragraphCollection':
                    return <ParagraphCollection {...c}/>
                  case 'videos':
                    return <Videos {...c}/>
                  case 'gridRelations':
                    return <GridRelations {...c}/>
                  case 'datetime':
                    return <Datetime {...c}/>
                  case 'location':
                    return <Location {...c}/>
                  case 'selection':
                    return <Selection {...c}/>
                  case 'boolean':
                    return <Switch {...c}/>
                  default:
                      return <p >{c.type}</p>
                }
            })

}

export default Shape;