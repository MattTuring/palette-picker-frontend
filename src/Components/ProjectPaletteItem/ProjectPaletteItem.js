
import React, {useState, useEffect} from 'react';
import { deletePalette, updatePalette } from '../../apiCalls/apiCalls';
import trash from '../../trash.png';
import edit from '../../edit.png';

const ProjectPaletteItem = ({palette, palettes, setPalettes}) => {

  const [name, setName] = useState('');
  useEffect(() => setName(palette.name), []);
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


  let [newPaletteName, setPaletteNewName] = useState('');
  let [showPaletteNewName, setPaletteShowNewName] = useState(false);

  return (
    <>
      <p style={{display: 'none'}}>{palette.project_id}</p>
      <p className='palette-area'>{name}
        <div className='color-div' style={{backgroundColor: palette.color1}}></div>
        <div className='color-div' style={{backgroundColor: palette.color2}}></div>
        <div className='color-div' style={{backgroundColor: palette.color3}}></div>
        <div className='color-div' style={{backgroundColor: palette.color4}}></div>
        <div className='color-div' style={{backgroundColor: palette.color5}}></div>
        <img src={trash} onClick={removeItem} className="delete" alt='delete'/>

        <img src={edit} onClick={() => setPaletteShowNewName(!showPaletteNewName)} className="edit" alt='edit'/>
        {showPaletteNewName && <><input onChange={(event) => setPaletteNewName(event.target.value)} type='text' placeholder='New Palette Name'/><button onClick={() => { updatePalette({name: newPaletteName},palette.id); setName(newPaletteName)}}>Update Name</button></>}

      </p>
    </>
  )
};

export default ProjectPaletteItem;
