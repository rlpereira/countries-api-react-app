/** @jsx jsx */
import { jsx } from '@emotion/core';
import LazyLoad from 'react-lazyload';

import { stylesImage, stylesCard, stylesCardContent } from './Country.styles';
import { useTheme } from 'emotion-theming';

function Country({ country }) {
  const theme = useTheme();

  return (
    <li>
      <div css={stylesCard({ theme:  theme })}>
        <LazyLoad height={240}>
          <img css={stylesImage} src={country.flag} alt={country.alpha3Code} />
        </LazyLoad>
        <div
          css={stylesCardContent}
        >
          <h2>{country.name}</h2>
          <p>
            <b>Population: </b> {country.population}
          </p>
          <p>
            <b>Region: </b>
            {country.region}
          </p>
          <p>
            <b>Capital: </b>
            {country.capital}
          </p>
        </div>
      </div>
    </li>
  );
}
export default Country;
