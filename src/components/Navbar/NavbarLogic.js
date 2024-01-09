import { useState } from 'react';

const useNavbarLogic = (categoryData) => {
  const [isClickedCategory, setIsClickedCategory] = useState(false);
  const [isClickedCategory2, setIsClickedCategory2] = useState(null);
  const [isClickedCategory3, setIsClickedCategory3] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [categoryIndex, setCategoryIndex] = useState(null);
  const [categoryIndex2, setCategoryIndex2] = useState(null);

  const [positionUl2 , setPositionUl2] = useState({top:0 , left:0})
  const [positionUl3 , setPositionUl3] = useState({top:0 , left:0})
  const [mPopupVisible , setmPopupVisible] = useState(false)
  const [nPopupVisible , setnPopupVisible] = useState(false)
  

  const handleClick = () => {
    setIsClickedCategory(!isClickedCategory);
    setIsClickedCategory2(null);
    setIsClickedCategory3(null);
    setCategoryIndex(null);
    setCategoryIndex2(null);
  };

  const handleClick2 = (event, index) => {
    const {top , height , left } = event.target.getBoundingClientRect();

    setPositionUl2({top : top + height - 10 , left : left + 190});
    setIsClickedCategory3(null);
    setCategoryIndex2(null);
    setIsClickedCategory2((prev)=>{
        return prev !== index ? index : null;
    });
    setCategoryIndex((prevVal)=>{
        return prevVal !== index ? index : null;
    });


  };

  const checkLoginStatus = () =>{
      setIsLoggedIn(window.localStorage.getItem("loginStatus"));
  }

  

  const handleClick3 = (event, index) => {
    const {top , height , left } = event.target.getBoundingClientRect();

    setPositionUl3({top : top + height - 10 , left : left + 260});
    setCategoryIndex2((prev)=>{
        return prev !== index ? index : null;
    });
    setIsClickedCategory3((prev)=>{
        return prev !== index ? index : null;
    });
  };


  const handleNotificationPopup = () =>{
    setnPopupVisible(!nPopupVisible);
    setmPopupVisible(false);
  }

  const handleMessagePopup = () =>{
    setmPopupVisible(!mPopupVisible)
    setnPopupVisible(false)
  }

  return {
    isClickedCategory,
    isClickedCategory2,
    isClickedCategory3,
    categoryIndex,
    categoryIndex2,
    positionUl2 ,
    positionUl3,
    isLoggedIn,
    mPopupVisible,
    nPopupVisible,
    setnPopupVisible,
    setmPopupVisible,
    handleNotificationPopup,
    handleMessagePopup,
    setIsClickedCategory, 
    setIsClickedCategory2,
    setIsClickedCategory3,
    setIsLoggedIn,
    checkLoginStatus,
    handleClick,
    handleClick2,
    handleClick3,
  };
};

export default useNavbarLogic;



