import React, { useState } from 'react';
import './PageMain.scss';
import AccordionItem from "./AccordionItem.jsx";

const SmmModules = () => {
  const accordionData = [
    {
      module: 'Модуль 1',
      description: 'SMM Content',
      transitionModule: 'Перейти к модулю',
      listOne: 'одиндватри',
      listTwo: 'одиндватри',
      listThree: 'одиндватри',
      listFour: 'одиндватри',
      listFive: 'одиндватри',
      isClicked: false,

    },
    {
      module: 'Модуль 2',
      description: 'SMM Content',
      transitionModule: 'Перейти к модулю',
      listOne: 'одиндватри',
      listTwo: 'одиндватри',
      listThree: 'одиндватри',
      listFour: 'одиндватри',
      listFive: 'одиндватри',
      isClicked: false,

    },
    {
      module: 'Модуль 3',
      description: 'SMM Content',
      transitionModule: 'Перейти к модулю',
      listOne: 'одиндватри',
      listTwo: 'одиндватри',
      listThree: 'одиндватри',
      listFour: 'одиндватри',
      listFive: 'одиндватри',
      isClicked: false,

    },
    {
      module: 'Модуль 4',
      description: 'SMM Content',
      transitionModule: 'Перейти к модулю',
      listOne: 'одиндватри',
      listTwo: 'одиндватри',
      listThree: 'одиндватри',
      listFour: 'одиндватри',
      listFive: 'одиндватри',
      isClicked: false,
    },
  ];

  return (
    <>
      {accordionData.map(item => (
        <AccordionItem
          key={item.module}
          module={item.module}  
          describe={item.description}
          transitionModule={item.transitionModule}
          listOne = {item.listOne}
          listTwo = {item.listTwo}
          listThree = {item.listThree}
          listFour = {item.listFour}
          listFive = {item.listFive}

          isClicked={item.isClicked}
        />
      ))}
    </>
  );
};

export default SmmModules;
