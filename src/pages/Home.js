/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useState, Suspense } from 'react';

import Loader from '../components/Loader/Loader';
import Form from '../components/Form/Form';

import { stylesContainer, stylesRow } from '../styles/global.styles';
import useFetch from '../api/useFetch';

const List = React.lazy(() => import('../components/List/List'));

function Home() {
  const [region, setRegion] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filterByRegion = (ev) => {
    setRegion(ev.target.value);
  };

  const baseUrl = 'https://restcountries.eu/rest/v2/';
  const fields = 'fields=name;alpha3Code;capital;flag;population;region';
  const url =
    region === 'all'
      ? `${baseUrl}?${fields}`
      : `${baseUrl}region/${region}?${fields}`;

  const { status, data } = useFetch(url);

  const filteredCountries = !searchTerm
    ? data
    : data.filter((country) =>
        country.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );

  return (
    <div css={stylesContainer}>
      <div css={stylesRow({ justifyContent: 'flex-start' })}>
        <Form
          handleChange={handleChange}
          filterByRegion={filterByRegion}
          region={region}
          searchTerm={searchTerm}
        />
      </div>
      
      <div css={stylesRow}>
        <Suspense fallback={<Loader />}>
          {status === 'fetching' ? (
            <Loader />
          ) : (
            <List countries={filteredCountries} />
          )}
        </Suspense>
      </div>
    </div>
  );
}

export default Home;
