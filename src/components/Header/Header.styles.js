import { css } from '@emotion/core';

export const stylesHeader = ({ bg, color }) => css`
  display: flex;
  margin: 0 auto;
  position: relative;
  padding: 16px 8px;
  width: 100%;
  background-color: ${bg};
  color: ${color};
  box-sizing: border-box;
  box-shadow: 0px 4px 2px 0px rgba(99, 99, 99, 0.25);
`;

export const stylesheaderWrapper = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;
