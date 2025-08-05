'use client';

import useDebounce from '@/hooks/useDebounce';
import { useEffect, useState } from 'react';

const DebouncedInputSearch = () => {
  // manage the input state
  const [search, setSearch] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [results, setResults] = useState<{ id: string; name: string }[]>([]);
  const [error, setError] = useState<string | null>(null);

  const debouncedSearch = useDebounce(search, 500);

  // effect
  useEffect(() => {
    if (debouncedSearch.trim() === '') return;

    const fetchResults = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `https://api.thecatapi.com/v1/breeds/search?q=${encodeURIComponent(
            debouncedSearch
          )}`
        );
        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();

        // set results
        setResults(data || []);
      } catch (error) {
        setError(`${error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [debouncedSearch]);

  // handleChange
  const handleChange = (value: string) => {
    if (value.trim() === '') {
      setLoading(false);
      setResults([]);
      setError(null);
    }
    setSearch(value);
  };

  // input component
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '12px' }}>
        <input
          placeholder={'search...'}
          value={search}
          onChange={(e) => handleChange(e.target.value)}
        />
        {search.length > 0 && search.trim() !== '' ? (
          <button onClick={() => setSearch('')}>Clear Input</button>
        ) : null}
      </div>
      {results &&
        results.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
          </div>
        ))}
      {error && !loading && <p>{error}</p>}
      {loading && (
        <div>
          <p>Loading...</p>
        </div>
      )}
    </>
  );
};

export default DebouncedInputSearch;
