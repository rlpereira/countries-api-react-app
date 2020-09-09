/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from 'emotion-theming';

import { stylesColumn, stylesButton } from '../../styles/global.styles';
import { stylesImage, stylesBorderList } from './Country.styles';

function Details({ country }) {
  const theme = useTheme();
  const {
    name,
    flag,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = country;

  return (
    <Fragment>
      <div css={stylesColumn}>
        <img
          css={stylesImage({ width: '100%', height: 'auto' })}
          src={flag}
          alt={name}
        />
      </div>
      <div css={stylesColumn}>
        <h1>{name}</h1>
        <p>Native name: {nativeName}</p>
        <p>Population: {population}</p>
        <p>Region: {region}</p>
        {subregion && <p>Sub region: {subregion}</p>}
        <p>Capital: {capital}</p>
        <p>Top level domain: {topLevelDomain && topLevelDomain.join(' ')}</p>
        <p>Currencies: {currencies && currencies.map((c) => c.name).join(' ')}</p>
        <p>Languages: {languages && languages.map((l) => l.name).join(' ')}</p>

        <h2>Borders:</h2>
        <ul css={stylesBorderList}>
          {!borders || borders.length === 0
            ? 'This country has no country borders.'
            : ''}
          {borders && borders.map((borderCountry) => (
            <li key={borderCountry}>
              <Link to={`/details/${borderCountry}`}>
                <button css={stylesButton({ theme: theme })}>
                  {borderCountry}
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
}

export default Details;
