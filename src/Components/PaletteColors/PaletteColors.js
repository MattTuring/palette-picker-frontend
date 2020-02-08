import React from 'react';
import lock from '../../lock.png';
import unlocked from '../../open-lock.png';

const PaletteColors = ({colors, lockeds, setLockeds}) => {
  const {color1, color2, color3, color4, color5} = colors;
  const {locked1, locked2, locked3, locked4, locked5} = lockeds;
  const {setLocked1, setLocked2, setLocked3, setLocked4, setLocked5} = setLockeds;
  
  return (
    <section className="color-picker">
      <div style={{backgroundColor: color1}} className="colors color1">{color1} <img className='lock' onClick={() => setLocked1(!locked1)} src={locked1 ? lock : unlocked} alt='lock'/></div>
      <div style={{backgroundColor: color2}} className="colors color2">{color2} <img className='lock' onClick={() => setLocked2(!locked2)} src={locked2 ? lock : unlocked} alt='lock'/></div>
      <div style={{backgroundColor: color3}} className="colors color3">{color3} <img className='lock' onClick={() => setLocked3(!locked3)} src={locked3 ? lock : unlocked} alt='lock'/></div>
      <div style={{backgroundColor: color4}} className="colors color4">{color4} <img className='lock' onClick={() => setLocked4(!locked4)} src={locked4 ? lock : unlocked} alt='lock'/></div>
      <div style={{backgroundColor: color5}} className="colors color5">{color5} <img className='lock' onClick={() => setLocked5(!locked5)} src={locked5 ? lock : unlocked} alt='lock'/></div>
    </section>
  )
};

export default PaletteColors;
