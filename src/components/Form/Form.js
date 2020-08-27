/** @jsx jsx */
import { jsx } from '@emotion/core';
import { stylesForm, stylesInput } from './Form.styles';

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
      <select css={stylesInput} onChange={filterByRegion} value={region}>
        {options.map((option) => (
          <option key={option.key}>{option.value}</option>
        ))}
      </select>
    </form>
  );
}

export default Form;
