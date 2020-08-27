import { css } from '@emotion/core';

export const stylesForm = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 32px 16px;
`;

export const stylesInput = (theme) => css`
  width: 320px;
  height: 40px;
  border: none;
  border-radius: 0;
  padding: 8px 16px;
  background-color: ${theme.headerBg};
  color: ${theme.color};
  box-shadow: 3px 3px 3px 0px rgba(99, 99, 99, 0.25);
`;
