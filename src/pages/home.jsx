import React from 'react';
import { ButtonBasic } from '../components/elements/Button/buttonBasic';
import { ButtonHover } from '../components/elements/Button/ButtonHover';
import { ButtonShadow } from '../components/elements/Button/ButtonShadow';
import { ButtonRotate } from '../components/elements/Button/ButtonRotate';
import { ButtonTransisi } from '../components/elements/Button/ButtonTransisi';

export const Home = () => (
  <div className="flex flex-col items-start justify-center w-full mx-auto mt-10 max-w-7xl">
    <h1 className="mb-3 font-semibold">⭐Button</h1>
    <ul className="flex flex-col items-start justify-center pl-9 gap-y-3">
      {[
        { label: '1. Basic button', Component: ButtonBasic },
        { label: '2. Hover button', Component: ButtonHover },
        { label: '3. Shadow button', Component: ButtonShadow },
        { label: '4. Rotate button', Component: ButtonRotate },
        { label: '5. Transition button', Component: ButtonTransisi },
      ].map(({ label, Component }, index) => (
        <li key={index}>
          <h1>{label}</h1>
          <Component text="Button" />
        </li>
      ))}
    </ul>
  </div>
);
