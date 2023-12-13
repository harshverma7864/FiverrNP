import {React , useEffect, useState} from 'react'
import navStyle from "../../assets/styles/navbar/navbar.module.css"
import logo from "../../assets/images/mainlogo.png"
import bellIcon from "../../assets/images/bellicon.svg"
import messageLogo from "../../assets/images/messagelogo.png"
import profileLogo from "../../assets/images/profilelogo.png"
import questionMark from "../../assets/images/questionmark.png"
import useNavbarLogic from './NavbarLogic';
import { useHistory } from 'react-router-dom'
import { CATEGORY_URI } from '../../environment'
import CategoryService from '../../services/CategoryService'


const Navbar = () => {
  const [inputValue, setInputValue] = useState('');
  const history = useHistory();
  const [categoryData , setCategoryData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await CategoryService.fetchData(CATEGORY_URI);
        setCategoryData(result);
        console.log(result);
      } catch (error) {
        // Handle error
        console.error('Error in component:', error);
      }
    };

    fetchData();
  }, []);

  const {
    isClickedCategory,
    isClickedCategory2, 
    isClickedCategory3,
    categoryIndex , 
    categoryIndex2,
    positionUl2 , 
    positionUl3,
    handleClick,
    handleClick2,
    handleClick3 

  } = useNavbarLogic();


    const handleSearchClick = () =>{
      if (history) {
        history.push(`/search?search=${inputValue}`);
      } else {
        console.error('History is undefined!');
      }
    }


    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };

    


  return (
    <div className={navStyle.navbarMain}>
      <div className={navStyle.navbox}>
        <div className={navStyle.logo}>
          <img src={logo} alt='logo' />
        </div>

        <div className={navStyle.categoriesDropdown}   >
          <h5 style={{ display:"flex" ,padding:"5px" , marginRight:"20px" , color : isClickedCategory ? '#F04C43' : '#000'}} onClick={handleClick}> 
            categories  &nbsp; &nbsp; &nbsp; <span style={{width:"13px"}}> </span>  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9" fill="none">
            <path d="M6.69784 7.32011C6.30953 7.69844 5.69048 7.69844 5.30216 7.32011L0.833367 2.96626C0.19074 2.34016 0.634001 1.25 1.5312 1.25L10.4688 1.25C11.366 1.25 11.8093 2.34016 11.1666 2.96626L6.69784 7.32011Z" style={{fill : isClickedCategory ? "#F04C43" : "black" , stroke: isClickedCategory ? "#F04C43" : "black"}} />
          </svg></h5>
          <div>
         
          <div>
            <ul className={navStyle.dropdownUl1} style={{ visibility: isClickedCategory ? 'visible' : 'hidden' }}>
              {categoryData &&
                categoryData.map((item, index) => (
                  <li key={index} onClick={(event) => handleClick2(event, item.id)}>
                    {item.category_name}
                    {  item.subcategory.length > 0 ?      (
                      item.subcategory.length > 0 &&
                    isClickedCategory2 === item.id ? (<svg xmlns="http://www.w3.org/2000/svg" width="14" height="6" viewBox="0 0 14 6" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 6L7 1.69565L1.5 6L2.28059e-08 5.47826L7 -1.70857e-07L14 5.47826L12.5 6Z" fill="#F04C43"/>
                      </svg>) : (<svg xmlns="http://www.w3.org/2000/svg" width="14" height="6" viewBox="0 0 14 6" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 -5.46392e-07L7 4.30435L12.5 -6.55671e-08L14 0.521739L7 6L-2.28059e-08 0.521739L1.5 -5.46392e-07Z" fill="black"/>
                    </svg>)
                    ): ('')
              }

                  </li>
                ))}
            </ul>
          </div>

          

          <div>
            <ul className={navStyle.dropdownUl2} style={{ top:positionUl2.top , left : positionUl2.left, visibility: isClickedCategory && isClickedCategory2 && isClickedCategory2 === categoryIndex ? 'visible' : 'hidden' }}>
              {categoryIndex &&
                categoryData &&
                categoryData.find((item3) => categoryIndex && item3.id === categoryIndex)?.subcategory?.map((item2, index2) => (
                  <li onClick={(ev) => handleClick3(ev, item2.id)} key={index2}>
                    {item2.subcategory_name}

               {  item2.subsubcategory.length > 0 ?    (
                      
                    isClickedCategory3 === item2.id ? (<svg xmlns="http://www.w3.org/2000/svg" width="14" height="6" viewBox="0 0 14 6" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 6L7 1.69565L1.5 6L2.28059e-08 5.47826L7 -1.70857e-07L14 5.47826L12.5 6Z" fill="#F04C43"/>
                      </svg>) : (<svg xmlns="http://www.w3.org/2000/svg" width="14" height="6" viewBox="0 0 14 6" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 -5.46392e-07L7 4.30435L12.5 -6.55671e-08L14 0.521739L7 6L-2.28059e-08 0.521739L1.5 -5.46392e-07Z" fill="black"/>
                    </svg>)
                    ) : ('')

              }
                    
                  </li>
                ))}
            </ul>
          </div>

          <div>
            <ul style={{top: positionUl3.top , left : positionUl3.left , visibility: isClickedCategory && isClickedCategory2 && isClickedCategory2 === categoryIndex && isClickedCategory3 === categoryIndex2 ? 'visible' : 'hidden' }} className={navStyle.dropdownUl2}>
              {categoryIndex &&
                categoryIndex2 &&
                categoryData &&
                categoryData
                  .find((itemx) => categoryIndex && itemx.id === categoryIndex)
                  .subcategory.find((itemxx) => categoryIndex2 && itemxx.id === categoryIndex2)?.subsubcategory?.map((subsub) => (
                    <li key={subsub.id}>{subsub.subsubcategory_name}</li>
                  ))}
            </ul>
          </div>
          </div>

        </div>
        <div  className={navStyle.searchBar}>

          <input           
                value={inputValue}
                 onChange={handleInputChange} 
                 type='text' placeholder=' Find Your Project'/>
          <button onClick={handleSearchClick}>search</button>
        </div>

        <div className={navStyle.navbarRightIcons}>
          <img src={bellIcon} alt='Bell' />
          <img src={messageLogo} alt='Message' />
          <img src={questionMark} alt='Query' />
          <img src={profileLogo} alt='Profile' />
        </div>

      </div>



    </div>
  )
}

export default Navbar
