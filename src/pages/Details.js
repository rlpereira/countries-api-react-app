/** @jsx jsx */
import { jsx } from '@emotion/core';

import React, { Suspense } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTheme } from 'emotion-theming';

import {
  stylesContainer,
  stylesRow,
  stylesButton,
} from '../styles/global.styles';
import useFetch from '../api/useFetch';

const CountryDetails = React.lazy(() =>
  import('../components/Country/Details')
);

function Details() {
  const theme = useTheme();
  const { code } = useParams();

  const baseUrl = 'https://restcountries.eu/rest/v2/';
  const fields =
    'fields=name;alpha3Code;capital;flag;population;region;nativeName;subRegion;currencies;languages;topLevelDomain;borders';
  const url = `${baseUrl}alpha/${code}?${fields}`;

  const { status, data, error } = useFetch(url);

  if (status === 'fetching') {
    return 'Loading...';
  }

  if (error) {
    return `${error.message}`;
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
          <CountryDetails country={data} />
        </Suspense>
      </div>
    </div>
  );
}

export default Details;
