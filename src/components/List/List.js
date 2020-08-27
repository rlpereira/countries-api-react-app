/** @jsx jsx */
import { jsx } from '@emotion/core';

import { stylesImage } from './List.styles';
import { useTheme } from 'emotion-theming';

function List({ countries }) {
  const theme = useTheme();

  return (
    <ul>
      {countries.map((country) => (
        <li key={country.alpha3Code}>
          <div
            className='card'
            style={{
              width: '320px',
              margin: '16px',
              height: 'auto',
              background: `${theme.cardBg}`,
              paddingBottom: '32px',
              position: 'relative',
              boxShadow: '3px 3px 2px 0px rgba(99, 99, 99, 0.25)',
            }}
          >
            <img
              css={stylesImage}
              src={country.flag}
              alt={country.alpha3Code}
            />
            <div
              className='card-content'
              style={{
                padding: '0 16px',
              }}
            >
              <h2>{country.name}</h2>
              <p>
                <b>Population:</b> {country.population}
              </p>
              <p>
                <b>Region:</b>
                {country.region}
              </p>
              <p>
                <b>Capital:</b>
                {country.capital}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default List;
