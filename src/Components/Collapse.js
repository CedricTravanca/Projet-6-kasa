import React, { useState } from 'react';
import arrow from "../Assets/arrow.png"

function Collapse({ title, content }) {
 const [isOpen, setIsOpen] = useState(false);

 return (
    <div>
      <button>{title}<img onClick={() => setIsOpen(!isOpen)}src={arrow} alt='Fleche pour montrer le contenu' className={isOpen ? "open-arrow" : "close-arrow"}></img></button>
      {isOpen &&<div className='collapse-content'>{content}</div>}
    </div>
 );
}

export default Collapse;