/** @jsx jsx */
import { jsx } from '@emotion/core';

import React, { useState, useEffect, Suspense } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTheme } from 'emotion-theming';

import {
  stylesContainer,
  stylesRow,
  stylesButton,
} from '../styles/global.styles';

const CountryDetails = React.lazy(() =>
  import('../components/Country/Details')
);

function Details() {
  const theme = useTheme();
  const { code } = useParams();
  const [loading, setLoading] = useState(true);
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const baseUrl = 'https://restcountries.eu/rest/v2/';
    const fields =
      'fields=name;alpha3Code;capital;flag;population;region;nativeName;subRegion;currencies;languages;topLevelDomain;borders';
    const url = `${baseUrl}alpha/${code}?${fields}`;

    setLoading(true);

    if (code) {
      fetch(url)
        .then((data) => data.json())
        .then((result) => {
          setCountry(result);
          setLoading(false);
        });
    }
  }, [code]);

  if (loading) {
    return 'Loading...';
  }

  return (
    <div css={stylesContainer}>
      <div css={stylesRow({ justifyContent: 'flex-start' })}>
        <Link to='/'>
          <button
            css={stylesButton({ theme: theme, margin: '32px 16px' })}
          >{`< Back`}</button>
        </Link>
      </div>
      <div css={stylesRow}>
        <Suspense fallback={'Loading...'}>
          <CountryDetails country={country} />
        </Suspense>
      </div>
    </div>
  );
}

export default Details;
