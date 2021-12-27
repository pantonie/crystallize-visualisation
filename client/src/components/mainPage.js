import React, { useState, useCallback } from 'react';
import {Checkbox, FormControlLabel, Button} from "@mui/material";
import Shape from "./shape";


const MainPage = ({names, definitions}) => {
    const [shapesList, setShapesList] = useState(names.map(n => n.name));
    const toggleList = useCallback(
        (name) => shapesList.includes(name)
          ? setShapesList(shapesList.filter(a => a !== name))
          : setShapesList([...shapesList, name]),[shapesList])
    const selectAll = useCallback(() => setShapesList(names.map(s => s.name)),[names])
    const deselectAll = () => setShapesList([]);
    return (
        <>
            <div className="side-bar">
                <div className="shape-buttons">
                    <Button variant="outlined" onClick={selectAll}>Select all</Button>
                    <Button variant="outlined" onClick={deselectAll}>Deselect all</Button>
                </div>
                {
                    names.map(s =>
                        <FormControlLabel key={s.identifier} control={
                            <Checkbox checked={shapesList.includes(s.name)} onClick={() => toggleList(s.name)}/>
                        } label={s.name} />
                    )
                }


            </div>
            <div className="content">
                {
                    definitions.map(
                        definition =>
                            shapesList.includes(definition.name) &&
                            <div key={definition.identifier} id={definition.identifier}>
                                <h2><p>{definition.name}</p></h2>
                                <div className="shape" key={'shape-'+definition.identifier}>
                                    <Shape shape={definition}/>
                                </div>
                            </div>
                    )
                }
            </div>
        </>
    )
}

export default MainPage