/** @jsx jsx */
import { jsx } from '@emotion/core';

import Country from '../Country/Country';

function List({ countries }) {
  return (
    <ul>
      {countries.map((country) => (
        <Country key={country.alpha3Code} country={country} />
      ))}
    </ul>
  );
}

export default List;
