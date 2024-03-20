// pages/search.js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { CardDefault } from '@/components/Card/Card';

const SearchPage = () => {
  const router = useRouter();
  const { q, lowPrice, highPrice, propType } = router.query;
  console.log("query", q);

  const [results, setResults] = useState([]);

  const getData = async () => {
    // axios
    try {
      const res = await axios.get(
        `http://localhost:3000/api/properties/s?q=${q}&lowPrice=${lowPrice}&highPrice=${highPrice}&propertyType=${propType}`
      );
      console.log(res.data);
        setResults(res.data);
    }
    catch (error) {
        console.log(error);
        }
    }


 useEffect(() => {
    getData();
  }, [q, lowPrice, highPrice, propType]);

  // Your logic to fetch and display search results based on the query parameters

  return (
    <div className='lg:mt-[140px] container mx-auto'>
      {results && results.length > 0 ? (
        <div className="">
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {results.map((result) => {
            return (
              <CardDefault key={result._id} {...result} />
            );
          })}
          </div>
        </div>
      ) : (
        <div>No results found</div>
      )}
    </div>
  );
};

export default SearchPage;
