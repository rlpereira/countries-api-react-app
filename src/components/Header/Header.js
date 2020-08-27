/** @jsx jsx */
import { jsx } from '@emotion/core';

import { stylesHeader, stylesheaderWrapper } from './Header.styles';
import { useTheme } from 'emotion-theming';

function Header({ toggleTheme }) {
  const theme = useTheme();

  return (
    <header
      className='Header'
      css={stylesHeader({ bg: theme.headerBg, color: theme.color })}
    >
      <div css={stylesheaderWrapper}>
        <h1>Where in the world?</h1>
        <button onClick={toggleTheme}>{theme.btnText}</button>
      </div>
    </header>
  );
}

export default Header;
