const { useState, useEffect } = require('react');

const useFetch = (url) => {
  const [status, setStatus] = useState('idle');
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setStatus('fetching');

      try {
        const response = await fetch(url);
        console.log(response);
        if (response.ok) {
          const data = await response.json();

          setData(data);
          setError(null);
          setStatus('fetched');
        } else {
          setError({message: 'Somethinng went wrong, sorry. Code: ' + response.status});
          setStatus('fetched');
        }
      } catch (err) {
        setError(err);
        setStatus('fetched');
      }
    };

    fetchData();
  }, [url]);

  return { status, data, error };
};

export default useFetch;
