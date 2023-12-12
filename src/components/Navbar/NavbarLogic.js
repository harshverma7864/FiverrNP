import { useState } from 'react';

const useNavbarLogic = (categoryData) => {
  const [isClickedCategory, setIsClickedCategory] = useState(false);
  const [isClickedCategory2, setIsClickedCategory2] = useState(null);
  const [isClickedCategory3, setIsClickedCategory3] = useState(null);

  const [categoryIndex, setCategoryIndex] = useState(null);
  const [categoryIndex2, setCategoryIndex2] = useState(null);

  const [positionUl2 , setPositionUl2] = useState({top:0 , left:0})
  const [positionUl3 , setPositionUl3] = useState({top:0 , left:0})


  const handleClick = () => {
    setIsClickedCategory(!isClickedCategory);
    setIsClickedCategory2(null);
    setIsClickedCategory3(null);
    setCategoryIndex(null);
    setCategoryIndex2(null);
  };

  const handleClick2 = (event, index) => {
    const {top , height , left } = event.target.getBoundingClientRect();

    setPositionUl2({top : top + height - 40 , left : left + 330});
    setIsClickedCategory3(null);
    setCategoryIndex2(null);
    setIsClickedCategory2((prev)=>{
        return prev !== index ? index : null;
    });
    setCategoryIndex((prevVal)=>{
        return prevVal !== index ? index : null;
    });


  };

  const handleClick3 = (event, index) => {
    const {top , height , left } = event.target.getBoundingClientRect();

    setPositionUl3({top : top + height - 40 , left : left + 320});
    setCategoryIndex2((prev)=>{
        return prev !== index ? index : null;
    });
    setIsClickedCategory3((prev)=>{
        return prev !== index ? index : null;
    });
  };

  return {
    isClickedCategory,
    isClickedCategory2,
    isClickedCategory3,
    categoryIndex,
    categoryIndex2,
    positionUl2 ,
    positionUl3,
    handleClick,
    handleClick2,
    handleClick3,
  };
};

export default useNavbarLogic;