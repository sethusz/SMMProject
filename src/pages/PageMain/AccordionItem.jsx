import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './AccordionModules.scss';

const Accordion = ({ isClicked, module, describe, moduleList, transitionModule, link }) => {
  const [isActive, setIsActive] = useState(false);

  const handleAccordionClick = () => {
    setIsActive(!isActive);
  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <div className={`accordion ${isActive ? 'active' : ''}`}>
      <div className="accordion__text" onClick={handleAccordionClick}>
        <div className="module__topic">
          <div className="accordion__module">{module}</div>
          <div className="accordion__topic">{describe}</div>
        </div>
        <span className={`accordion__arrow ${isActive ? 'rotate' : ''}`}></span>
      </div>

      <div
        className={`accordion__content ${isActive ? 'active' : ''} no-pointer`}
        onClick={stopPropagation}>
        <ul className="accordion__list">
          {moduleList &&
            moduleList.map((listItem) => (
              <li key={listItem}>
                <span>{listItem}</span>
              </li>
            ))}
        </ul>

        <Link to={link}>
          <div className="accordion__button"> {transitionModule} </div>
        </Link>
      </div>
    </div>
  );
};

export default Accordion;
