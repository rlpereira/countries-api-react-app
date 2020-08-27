import { css } from '@emotion/core';
import variables from './variables';

export const stylesGlobal = ({ bg, color }) => css`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: ${variables.fonts.family};
    font-size: ${variables.fonts.sizes.base};
    font-weight: ${variables.fonts.weights.regular};
    background-color: ${bg};
    color: ${color};
    overflow-x: hidden;
    box-sizing: border-box;
    transition: background 333ms;
  }

  h1,
  h2 {
    padding: 16px 0;
  }

  h1 {
    font-size: ${variables.fonts.sizes.h1};
  }

  h2 {
    font-size: ${variables.fonts.sizes.h2};
  }

  p {
    font-size: ${variables.fonts.sizes.base};
    margin: 8px 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-around;
    width: 100%;
    flex-wrap: wrap;
  }
`;

export const stylesContainer = ({ direction = 'column' }) => css`
  label: GridContainer;
  display: flex;
  flex-direction: ${direction};
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 375px;
  max-width: 1440px;
  margin: 0 auto;
  overflow-x: hidden;
`;

export const stylesRow = ({ justifyContent = 'center' }) => css`
  label: GridRow;
  display: flex;
  justify-content: ${justifyContent};
  align-items: center;
  width: 100%;
`;
