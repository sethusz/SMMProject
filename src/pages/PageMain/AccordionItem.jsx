import React, { useState } from 'react';
import './AccordionModules.scss'

const Accordion = () => {
  const [isActive, setIsActive] = useState(false);

  const handleAccordionClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`page__accordion ${isActive ? 'active' : ''}`}>
      <div className="page__accordion-title" onClick={handleAccordionClick}>
        TITLE
      </div>
      <div className="page__accordion-content">
        КОНТЕНТКОНТЕНТКОНТЕНТКОНТЕНТКОНТЕНТКОНТЕНТКОНТЕНТКОНТЕНТКОНТЕНТКОНТЕНТКОНТЕНТКОНТЕНТ
        КОНТЕНТКОНТЕНТКОНТЕНТКОНТЕНТКОНТЕНТКОНТЕНТКОНТЕНТКОНТЕНТКОНТЕНТКОНТЕНТ
        КОНТЕНТКОНТЕНТКОНТЕНТКОНТЕНТКОНТЕНТКОНТЕНТКОНТЕНТКОНТЕНТКОНТЕНТКОНТЕНТ
        КОНТЕНТКОНТЕНТКОНТЕНТКОНТЕНТКОНТЕНТКОНТЕНТКОНТЕНТ
        КОНТЕНТКОНТЕНТКОНТЕНТКОНТЕНТКОНТЕНТКОНТЕНТКОНТЕНТКОНТЕНТ
        КОНТЕНТКОНТЕНТКОНТЕНТКОНТЕНТКОНТЕНТКОНТЕНТКОНТЕНТКОНТЕНТ
        КОНТЕНТКОНТЕНТКОНТЕНТКОНТЕНТКОНТЕНТКОНТЕНТКОНТЕНТ
      </div>
    </div>
  );
};

export default Accordion;














// import React, { useState } from 'react';
// import scss from './AccordionModules.module.scss'
// import { Link } from 'react-router-dom';

// function AccordionItem({ isClicked, module, describe, listOne, listTwo, listThree, listFour, listFive, lastSix, transitionModule }) {
//   const [isOpen, setIsOpen] = useState(isClicked);

//   const toggleAccordion = () => {
//     setIsOpen(!isOpen);
//   };

//   const stopPropagation = (event) => {
//     event.stopPropagation();
//   };

//   return (

//     <div className={`${scss.accordion} ${isOpen ? scss.accordion__active : ''}`} onClick={toggleAccordion}>
//       <div className={scss.accordion__text}>
//         <div className={`${scss.accordion__module} ${isOpen ? scss.active : ''}`} >
//           {module}
//         </div>
//         <div className={`${scss.accordion__topic} ${isOpen ? scss.active : ''}`}>
//           {describe}
//         </div>
//         <span className={`${scss.accordion__arrow} ${isOpen ? scss.rotate : ''}`}></span>
//       </div>
//       <div className={`${scss.accordion__content} ${isOpen ? scss.accordion__content__active : ''}`}
//         onClick={stopPropagation} >
//         <ul className={scss.accordion__list}>
//           <li> <span>{listOne}</span> </li>
//           <li> <span>{listTwo}</span> </li>
//           <li> <span>{listThree}</span> </li>
//           <li> <span>{listFour}</span> </li>
//           <li> <span>{listFive}</span> </li>
//         </ul>

//         <Link to='/ModuleOne'>
//           <div className={scss.accordion__button}> {transitionModule} </div>
//         </Link>
//       </div>
//     </div>



//   );
// }

// export default AccordionItem;