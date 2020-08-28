import { css } from '@emotion/core';
import variables from './variables';

export const bp = {
  small: variables.breakpoints.mobile,
  large: variables.breakpoints.desktop,
};

export const mediaQueries = (n) => {
  const bpArray = Object.keys(bp).map((key) => [key, bp[key]]);

  const [result] = bpArray.reduce((acc, [name, size]) => {
    if (n === name) return [...acc, `@media (min-width: ${size}px)`];
    return acc;
  }, []);

  return result;
};

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
`;

export const stylesCountriesList = css`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
  width: 100%;
  flex-wrap: wrap;
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

export const stylesRow = ({
  justifyContent = 'center',
  flexDirection = 'row',
}) => css`
  label: GridRow;
  display: block;
  justify-content: ${justifyContent};
  align-items: center;
  width: 100%;
  position: relative;
  flex-direction: ${flexDirection};

  ${mediaQueries('large')} {
    display: flex;
  }
`;

export const stylesColumn = css`
  label: GridColumn;
  display: block;
  padding: 0 16px;

  ${mediaQueries('large')} {
    flex: 1;
    width: 50%;
  }
`;

export const stylesButton = ({ theme, margin = '8px' }) => css`
  padding: 8px 16px;
  margin: ${margin};
  background-color: ${theme.headerBg};
  border: 1px solid ${theme.color};
  color: ${theme.color};
`;
