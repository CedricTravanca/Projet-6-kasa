import React, { useState } from 'react';
import arrow from "../Assets/arrow.png"

function Collapse({ title, content }) {
 const [isOpen, setIsOpen] = useState(false);
 //const [isRotated, setIsRotated] = useState(false);
 //{isRotated && <div className=".collapse-arrow"></div>}

 return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>{title}<img src={arrow} alt='Fleche pour montrer le contenu' className='collapse-arrow'></img></button>
      {isOpen &&<div className='collapse-content'>{content}</div>}
    </div>
 );
}

export default Collapse;