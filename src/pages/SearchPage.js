import React, { useState, useEffect } from 'react';
import GigCards from '../components/Cards/GigCards';
import PageStyle from '../assets/styles/searchpage.module.css';
import GigService from '../services/GigService';
import { GIG_URI } from '../environment';
import { useLocation } from 'react-router-dom';
import { Navbar } from '../components';

const SearchPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('search');

  const [searchData, setSearchData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 20;
  useEffect(() => {
    
    const fetchData = async () => {
      
      try {

       
        // Check if query is null or empty before making the API call
        if (query) {
          console.log(query)
          console.log(`${GIG_URI}search=${query}`)
          const result = await GigService.allGigs(`${GIG_URI}search=${query}`);
          setSearchData(result);
        }
      } catch (error) {
        console.error('Error in component:', error);
      }
    };

    fetchData();
  }, [query]);


  

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = searchData && searchData.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
    <Navbar/>
    <div className={PageStyle.main}>
      <h2 className={PageStyle.heading}>
        Showing full catalog results, giving you the widest variety of services at any price.
      </h2>

      <h3 className={PageStyle.subHeading}>
        {searchData && searchData.length} Services for{' '}
        <span className={PageStyle.heading}>{query}</span>
      </h3>

      <div className={PageStyle.cardGrid}>
        {currentCards &&
          currentCards.map((item, index) => <GigCards key={index} gigsData={item}  />)}
      </div>

      <div className={PageStyle.pagination}>
        {[...Array(Math.ceil((searchData && searchData.length) / cardsPerPage))].map((_, index) => (
          <button key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
    </>
  );
};

export default SearchPage;
