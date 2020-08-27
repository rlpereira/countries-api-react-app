/** @jsx jsx */
import { css, jsx, Global } from '@emotion/core';
import reset from 'emotion-reset';
import { useTheme } from 'emotion-theming';

import { stylesGlobal } from '../../styles/global.styles';

const Layout = (props) => {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        ${reset} ${stylesGlobal({ bg: theme.bodyBg, color: theme.color })}
      `}
    />
  );
};

export default Layout;
