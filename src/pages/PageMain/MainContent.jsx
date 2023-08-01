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
        'Поиск тематики.',
        'Определение концепции блога.',
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
        'Визуал, элементы визуала, стили.',
        'SMM.',
        'Размеры и расположение фотографий в ленте.',
        'Воздух.',
        'Загруженный кадры.',
        'Тренды, антитренды визуала.',
        'Сочетание цветов.',
        'Цветовой круг.',
        'Терминология: Референс и мудборд.',
        'Предметная съемка.',
        'Как делать предметную съемку.',
        'Основные правила композиций в фотографии.',
        'Обработка фотографий.',
      ],
      isClicked: false,
      link: '/ModuleTwo',
    },
    {
      module: 'Модуль Третий',
      description: 'Сторисмейкинг',
      transitionModule: 'Перейти к модулю.',
      moduleList: [
        'Сторис.',
        'Приложение для сторис.',
        'Как вести гармонические сторис.',
        'Копирайтинг.',
        'Контент план.',
        'Тайм-менеджмент.',
      ],

      isClicked: false,
      link: '/ModuleThree',
    },
    {
      module: 'Модуль Четвертый',
      description: 'Reels',
      transitionModule: 'Перейти к модулю',
      moduleList: [
        'Что такое рилс и для чего он нам нужен?',
        'Приложение и основы монтажа видео-рилс.',
        'Цепляющий оффер, который будет использоваться в рилс воронке.',
      ],
      isClicked: false,
      link: '/ModuleFour',
    },
    {
      module: 'Модуль Пятый',
      description: 'Личный бренд и монетизация',
      transitionModule: 'Перейти к модулю',
      moduleList: [
        'Личный бренд.',
        'Монетизация блога.',
        'Аватар будущих клиентов.',
        'Продающая упаковка.',
        'Экспертный контент.',
        'Поиск и привлечение вашей.',
        'Бонусный урок по таргету.',
        'Бонусный урок по упаковке аккаунта.',
        'Практика. Финал обучения.',
        'Фуршет.',
        'Вручение сертификатов.',
      ],
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
          moduleList={item.moduleList}
          isClicked={item.isClicked}
          link={item.link}
        />
      ))}
    </>
  );
};

export default SmmModules;
