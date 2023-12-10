// NavbarLogic.js
import { CATEGORY_URI } from '../../environment';
import { useState, useEffect } from 'react';
import CategoryService from '../../services/CategoryService';

const useNavbarLogic = () => {
  const [categoryData, setCategoryData] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const [clickedCategory, setClickedCategory] = useState(null);
  const [clickedSubCategory, setClickedSubCategory] = useState(null);
  const [isHovered, setIsHovered] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await CategoryService.fetchData(CATEGORY_URI);
        setCategoryData(result);
      } catch (error) {
        console.error('Error in component:', error);
      }
    };

    fetchData();
  }, []);

  const handleMouseOver = (index) => {
    setIsHovered(index);
  };

  const handleMouseOut = () => {
    setIsHovered(null);
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
    setClickedCategory(null);
  };

  const handleClick2 = (index) => {
    setClickedCategory((prevClickedCategory) => {
      return prevClickedCategory !== index ? index : null;
    });
  };

  const handleClick3 = (index2 , index) =>{
    setClickedCategory(index);
    setClickedSubCategory((prevClickedSubCategory) => {
        return prevClickedSubCategory !== index2 ? index2 : null;
      });
  }
  return {
    categoryData,
    isClicked,
    clickedCategory,
    isHovered,
    clickedSubCategory,
    handleMouseOver,
    handleMouseOut,
    handleClick,
    handleClick2,
    handleClick3
  };
};

export default useNavbarLogic;
