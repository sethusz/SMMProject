import React, { useState } from 'react';
import './PageMain.scss';
import AccordionItem from './AccordionItem.jsx';

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
      listSix: 'тритритри',
      isClicked: false,
      link: '/ModuleOne',
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
      listSix: 'тритритри',
      isClicked: false,
      link: '/ModuleTwo',
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
      link: '/ModuleThree',
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
      link: '/ModuleFour',
    },
    {
      module: 'Модуль 5',
      description: 'SMM Content',
      transitionModule: 'Перейти к модулю',
      listOne: 'одиндватри',
      listTwo: 'одиндватри',
      listThree: 'одиндватри',
      listFour: 'одиндватри',
      listFive: 'одиндватри',
      listSix: 'тритритри',
      isClicked: false,
      link: '/ModuleFive',
    },
  ];

  return (
    <>
      {accordionData.map((item) => (
        <AccordionItem
          key={item.module}
          module={item.module}
          describe={item.description}
          transitionModule={item.transitionModule}
          listOne={item.listOne}
          listTwo={item.listTwo}
          listThree={item.listThree}
          listFour={item.listFour}
          listFive={item.listFive}
          listSix={item.listSix}
          isClicked={item.isClicked}
          link={item.link}
        />
      ))}
    </>
  );
};

export default SmmModules;
