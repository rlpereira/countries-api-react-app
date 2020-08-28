/** @jsx jsx */
import { jsx } from '@emotion/core';

import Country from '../Country/Country';
import { stylesCountriesList } from '../../styles/global.styles';

function List({ countries }) {
  return (
    <ul css={stylesCountriesList}>
      {countries.map((country) => (
        <Country key={country.alpha3Code} country={country} />
      ))}
    </ul>
  );
}

export default List;
