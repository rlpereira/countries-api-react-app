/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useState, useEffect, Suspense } from 'react';

import Loader from '../components/Loader/Loader';
import Form from '../components/Form/Form';

import { stylesContainer, stylesRow } from '../styles/global.styles';

const List = React.lazy(() => import('../components/List/List'));

function Home() {
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filterByRegion = (ev) => {
    setRegion(ev.target.value);
  };

  useEffect(() => {
    const baseUrl = 'https://restcountries.eu/rest/v2/';
    const fields = 'fields=name;alpha3Code;capital;flag;population;region';
    const url =
      region === 'all'
        ? `${baseUrl}?${fields}`
        : `${baseUrl}region/${region}?${fields}`;

    setLoading(true);

    fetch(url)
      .then((data) => data.json())
      .then((result) => {
        setCountries(result);
        setLoading(false);
      });
  }, [region]);

  const filteredCountries = !searchTerm
    ? countries
    : countries.filter((country) =>
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
          {loading ? <Loader /> : <List countries={filteredCountries} />}
        </Suspense>
      </div>
    </div>
  );
}

export default Home;
