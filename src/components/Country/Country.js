/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

import {
  stylesImage,
  stylesCard,
  stylesCardContent,
  stylesLink,
} from './Country.styles';
import { useTheme } from 'emotion-theming';

function Country({ country }) {
  const theme = useTheme();

  return (
    <li>
      <div css={stylesCard({ theme: theme })}>
        <Link css={stylesLink} to={`/details/${country.alpha3Code}`}>
          <LazyLoad height={240}>
            <img
              css={stylesImage}
              src={country.flag}
              alt={country.alpha3Code}
            />
          </LazyLoad>
          <div css={stylesCardContent}>
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
        </Link>
      </div>
    </li>
  );
}
export default Country;
