import {React , useState} from 'react'
import navStyle from "../../assets/styles/navbar/navbar.module.css"
import logo from "../../assets/images/mainlogo.png"
import bellIcon from "../../assets/images/bellicon.svg"
import messageLogo from "../../assets/images/messagelogo.png"
import profileLogo from "../../assets/images/profilelogo.png"
import questionMark from "../../assets/images/questionmark.png"
import useNavbarLogic from './NavbarLogic';
import { useHistory } from 'react-router-dom'


const Navbar = () => {
  const [inputValue, setInputValue] = useState('');
  const history = useHistory();

  const {
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

  } = useNavbarLogic();


    const handleSearchClick = () =>{
      if (history) {
        history.push(`/search?search=${inputValue}`);
      } else {
        console.error('History is undefined!');
      }
      window.location.reload()
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
          <h5 style={{ display:"flex" ,padding:"5px" , marginRight:"20px" , color : isClicked ? '#F04C43' : '#000'}} onClick={handleClick}>categories  &nbsp; &nbsp; &nbsp; <span style={{width:"13px"}}> </span>  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9" fill="none">
            <path d="M6.69784 7.32011C6.30953 7.69844 5.69048 7.69844 5.30216 7.32011L0.833367 2.96626C0.19074 2.34016 0.634001 1.25 1.5312 1.25L10.4688 1.25C11.366 1.25 11.8093 2.34016 11.1666 2.96626L6.69784 7.32011Z" style={{fill : isClicked ? "#F04C43" : "black" , stroke: isClicked ? "#F04C43" : "black"}} />
          </svg></h5>
          <div>
          <ul className={navStyle.dropdownUl1} style={{ color: isClicked ? '#F04C43' : 'black', visibility: isClicked ? 'visible' : 'hidden' }}>
        {categoryData &&
          categoryData.map((item, index) => (
            <li
              key={item.id}
              onMouseOver={() => handleMouseOver(index)}
              onMouseOut={handleMouseOut}
              onClick={() => handleClick2(index)}  // Use handleClick2 instead of handleClick
              style={{ color: (isHovered === index || clickedCategory === index) ? '#F04C43' : 'black' }}
            >
              {item.category_name}
              <div>
                {/* Updated visibility condition for subcategories */}
                <ul className={navStyle.dropdownUl2} 
                style={{ visibility: (clickedCategory === index) ? 'visible' : 'hidden' }}>
                  {item.subcategory.map((item2 , index2) => (
                    <li 
                    
                    onClick={()=>handleClick3(index2)}
                    key={item2.id}>{item2.subcategory_name}
                    <div>
                {/* Updated visibility condition for subcategories */}
                <ul className={navStyle.dropdownUl2} style={{ visibility: (clickedCategory===index && clickedSubCategory === index2) ? 'visible' : 'hidden' }}>
                  {item2.subsubcategory.map((item3) => (
                    <li key={item3.id}>{item3.subsubcategory_name}
                    </li>
                  ))}
                </ul>
              </div>
                    
                    
                    </li>
                  ))}
                </ul>
              </div>
              {item.subcategory !== null && item.subcategory.length > 0 && (
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="6" viewBox="0 0 14 6" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.5 -5.46392e-07L7 4.30435L12.5 -6.55671e-08L14 0.521739L7 6L-2.28059e-08 0.521739L1.5 -5.46392e-07Z" fill={(isHovered === index || clickedCategory === index) ? "#F04C43" : "black"} />
                </svg>
              )}
            </li>
          ))}
      </ul>


          {/* 
            <div>
              <ul className={navStyle.dropdownUl3} style={{visibility : isClicked3 ? 'visible' : 'hidden'}}>
                <li>Logo & Brand Identity </li>
                <li>Logo Design</li>
                <li>Brand Style Guides</li>
                <li>Business Card</li>
              </ul>
            </div> */}
          </div>

        </div>
        <div  className={navStyle.searchBar}>

          <input           
                value={inputValue}
                 onChange={handleInputChange} 
                 type='text' />
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