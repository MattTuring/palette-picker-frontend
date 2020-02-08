import React from 'react';
import { deletePalette } from '../../apiCalls/apiCalls';
import trash from '../../trash.png';
import edit from '../../edit.png';

const ProjectPaletteItem = ({palette, palettes, setPalettes}) => {
  const removeItem = async () => {
    try {
      const newPallete = palettes.filter(pal => pal.id !== palette.id);
      setPalettes(newPallete);
      await deletePalette(palette.id);
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <p style={{display: 'none'}}>{palette.project_id}</p>
      <p className='palette-area'>{palette.name}
        <div className='color-div' style={{backgroundColor: palette.color1}}></div>
        <div className='color-div' style={{backgroundColor: palette.color2}}></div>
        <div className='color-div' style={{backgroundColor: palette.color3}}></div>
        <div className='color-div' style={{backgroundColor: palette.color4}}></div>
        <div className='color-div' style={{backgroundColor: palette.color5}}></div>
        <img src={trash} onClick={removeItem} className="delete" alt='delete'/>
        <img src={edit} className="edit" alt='edit'/>
      </p>
    </>
  )
};

export default ProjectPaletteItem;
