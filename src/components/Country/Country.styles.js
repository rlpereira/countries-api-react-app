import { css } from '@emotion/core';

export const stylesCard = ({ theme }) => css`
  width: 320px;
  margin: 16px;
  height: auto;
  background: ${theme.cardBg};
  paddingbottom: 32px;
  position: relative;
  boxshadow: 3px 3px 2px 0px rgba(99; 99, 99, 0.25);
`;

export const stylesCardContent = css`
  padding: 8px 16px;
`;

export const stylesImage = css`
  width: 100%;
  height: 240px;
  object-fit: cover;
`;
