import React from 'react';
import { ButtonBasic } from '../components/elements/Button/buttonBasic';
import { ButtonHover } from '../components/elements/Button/ButtonHover';
import { ButtonShadow } from '../components/elements/Button/ButtonShadow';
import { ButtonRotate } from '../components/elements/Button/ButtonRotate';
import { ButtonTransisi } from '../components/elements/Button/ButtonTransisi';
import { SideMenu } from '../components/fragments/SideBar/SideMenu';
import { CardDarkened } from '../components/elements/Card/CardDarkened';
import { CardLargeImage } from '../components/elements/Card/CardLargeImage';
import { CardTiga } from '../components/elements/Card/CardTiga';
import { CardBooking } from '../components/elements/Card/CardBooking';
import { CardPerson } from '../components/elements/Card/CardPerson';
import { CardShape } from '../components/elements/Card/CardShape';
import { CardComment } from '../components/elements/Card/CardComment';
import { ProductCard1 } from '../components/elements/Card/ProductCard1';
import { ProductCard2 } from '../components/elements/Card/ProductCard2';
import { ProductCard3 } from '../components/elements/Card/ProductCard3';
import { ProductCard4 } from '../components/elements/Card/ProductCard4';
import { ProductCard5 } from '../components/elements/Card/ProductCard5';
import { ProductCard6 } from '../components/elements/Card/ProductCard6';
import { ProductCard8 } from '../components/elements/Card/ProductCard8';
import { ProductCard10 } from '../components/elements/Card/ProductCard10';
import { ProductCard11 } from '../components/elements/Card/ProductCard11';




export const Home = () => {
  console.log("Rendering Home component");

  const buttonData = [
    { label: '1. Basic button', Component: ButtonBasic },
    { label: '2. Hover button', Component: ButtonHover },
    { label: '3. Shadow button', Component: ButtonShadow },
    { label: '4. Rotate button', Component: ButtonRotate },
    { label: '5. Transition button', Component: ButtonTransisi },
  ];

  const cardData = [
    { label: '1. Card Darkened', Component: CardDarkened },
    { label: '2. Card Large Image', Component: CardLargeImage },
    { label: '3. Card Tiga', Component: CardTiga },
    { label: '4. Card Booking', Component: CardBooking },
    { label: '5. Card Person', Component: CardPerson },
    { label: '6. Card Shape', Component: CardShape },
    { label: '7. Card Commment', Component: CardComment },
    { label: '8. Product Card1', Component: ProductCard1 },
    { label: '9. Product Card2', Component: ProductCard2 },
    { label: '10. Product Card3', Component: ProductCard3 },
    { label: '11. Product Card4', Component: ProductCard4 },
    { label: '12. Product Card5', Component: ProductCard5 },
    { label: '13. Product Card6', Component: ProductCard6 },
    { label: '14. Product Card8', Component: ProductCard8 },
    { label: '15. Product Card9', Component: ProductCard10 },
    { label: '16. Product Card10', Component: ProductCard11 },
  ];

  return (
    <div className="flex flex-col items-start justify-center w-full mx-auto mt-10 max-w-7xl">
      <h1 className="mb-3 font-semibold">⭐Button</h1>
      <ul className="flex flex-col items-start justify-center pl-9 gap-y-3">
        {buttonData.map(({ label, Component }, index) => {
          console.log(`Rendering ${label}`);
          return (
            <li key={index}>
              <h1>{label}</h1>
              <Component text="Button" />
            </li>
          );
        })}
      </ul>
      <h1 className="mb-3 font-semibold">⭐Card</h1>
      <ul className="flex flex-col items-start justify-center max-w-md pl-9 gap-y-3">
        {cardData.map(({ label, Component }, index) => {
          console.log(`Rendering ${label}`);
          return (
            <li key={index}>
              <h1>{label}</h1>
              <Component />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
