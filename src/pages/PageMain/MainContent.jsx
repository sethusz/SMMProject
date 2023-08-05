import React, { useState } from 'react';
import './PageMain.scss';
import AccordionItem from './AccordionItem.jsx';

const SmmModules = () => {
  const accordionData = [
    {
      module: 'Модуль первый',
      description: 'Позиционирование',
      transitionModule: 'Перейти к модулю',
      moduleList: [
        'Введение. Знакомство.',
        'Распоковка личности.',
        'Цели, Миссия и позоционирование в блоге',
        'Насмотренность',
      ],
      isClicked: false,
      link: '/ModuleOne',
    },
    {
      module: 'Модуль Второй',
      description: 'Визуал&SMM',
      transitionModule: 'Перейти к модулю',
      moduleList: [
        'Элементы визуала. Стили визуала',
        ' Терминология. Референс и мудборд',
        ' Размеры фотографий в ленте',
        ' Расположение фотографий в ленте',
        'Воздух. Загруженные кадры в ленте.Тренды визуала',
        ' Сочетание цветов. Цветовой круг',
      ],
      isClicked: false,
      link: '/ModuleTwo',
    },
    {
      module: 'Модуль Третий',
      description: 'Сторисмейкинг',
      transitionModule: 'Перейти к модулю.',
      moduleList: [
        'Как делать фотографии в домашних условиях',
        ' Основные правила композиции в фотографии',
        'Фуд съёмка.Предметная съемка ',
        'Обработка фотографий',
      ],

      isClicked: false,
      link: '/ModuleThree',
    },
    {
      module: 'Модуль Четвертый',
      description: 'Сторисмейкинг И СММ',
      transitionModule: 'Перейти к модулю',
      moduleList: [
        'Сторис',
        'Копирайтинг',
        'СММ',
      ],
      isClicked: false,
      link: '/ModuleFour',
    },
    {
      module: 'Модуль Пятый',
      description: 'Reels',
      transitionModule: 'Перейти к модулю',
      moduleList: [
        'Что такое рилс и для чего он нам нужен?',
        'Приложение и основы монтажа видео-рилс.',
        'Цепляющий оффер, который будет использоваться в рилс воронке.',
      ],
      isClicked: false,
      link: '/ModuleFive',
    },
    {
      module: 'Модуль Шестой',
      description: 'Личный бренд и монетизация',
      transitionModule: 'Перейти к модулю',
      moduleList: [
        'Контент план. Видео',
        ' Тайм менеджмент',
        ' Личный бренд',
        'Монетизация',
        'БОНУСНЫЙ УРОК ПО ТАРГЕТУ',
        'БОНУСНЫЙ УРОК ПО УПАКОВКЕ АККАУНТА',
      ],
      isClicked: false,
      link: '/ModuleSix',
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
          moduleList={item.moduleList}
          isClicked={item.isClicked}
          link={item.link}
        />
      ))}
    </>
  );
};

export default SmmModules;
