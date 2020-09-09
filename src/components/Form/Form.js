/** @jsx jsx */
import { jsx } from '@emotion/core';
import { stylesForm, stylesInput, stylesLabel } from './Form.styles';

function Form({ searchTerm, handleChange, region, filterByRegion }) {
  const options = [
    { key: 'all', value: 'all' },
    { key: 'africa', value: 'Africa' },
    { key: 'americas', value: 'Americas' },
    { key: 'asia', value: 'Asia' },
    { key: 'europe', value: 'Europe' },
    { key: 'oceania', value: 'Oceania' },
  ];

  return (
    <form css={stylesForm} action='#' onSubmit={(ev) => ev.preventDefault()}>
      <input
        type='text'
        name='search'
        id='search'
        placeholder='Search'
        value={searchTerm}
        onChange={handleChange}
        css={stylesInput}
      />
      <label css={stylesLabel} htmlFor='search'>
        Search:{' '}
      </label>
      <label css={stylesLabel} htmlFor='region'>
        Search:{' '}
      </label>
      <select
        name='region'
        id='region'
        css={stylesInput}
        onChange={filterByRegion}
        value={region}
      >
        {options.map((option) => (
          <option key={option.key}>{option.value}</option>
        ))}
      </select>
      <button
        aria-label='search countries'
        style={{ display: 'none' }}
        type='submit'
      >
        &nbsp;
      </button>
    </form>
  );
}

export default Form;
