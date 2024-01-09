import React  , { useEffect , useState } from 'react'
import { Card, Navbar, Table } from '../components'
import style from '../assets/styles/homepage.module.css'
import bannerImage from '../assets/images/bannerImage1.png'
import CategoryService from '../services/CategoryService';
import { useHistory } from 'react-router-dom';
import Accordion from '../components/Accordian/Accordian';

const HomePage = () => {
  const [inputValue, setInputValue] = useState('');
  const history = useHistory();
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

    const [categoryData, setCategoryData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const result = await CategoryService.fetchData('product/category');
            setCategoryData(result);
            
          } catch (error) {
            // Handle error
            console.error('Error in component:', error);
          }
        };
    
        fetchData();
      }, []);

    var cardData2 = [
        {
            heading:"Logo and Brand Identity",
            subHeading:[]
        },
        
        {
            heading:"Web and App Design",
            subHeading:[]
        },
        
        {
            heading:"Art & Illustration",
            subHeading:[]
        },
        {
            heading:"Logo and Brand Identity",
            subHeading:[]
        },
        
        {
            heading:"Web and App Design",
            subHeading:[]
        },
        
        {
            heading:"Art & Illustration",
            subHeading:[]
        },
        {
            heading:"Logo and Brand Identity",
            subHeading:[]
        },
        
        {
            heading:"Web and App Design",
            subHeading:[]
        },
        
        {
            heading:"Art & Illustration",
            subHeading:[]
        },
        {
            heading:"Art & Illustration",
            subHeading:[]
        },

    ]

    var mostPopular =["Image Editing" , "Social Media Design" , "Ai Artist" , "Web Design" , "Interior Design",
    "Image Editing" , "Social Media Design" , "Ai Artist" , "Web Design" , "Interior Design"]

  return (
    <>

<Navbar/>


<div  className={style.searchBar}>

<input           
      value={inputValue}
       onChange={handleInputChange} 
       type='text' placeholder=' Find Your Project'/>
<button onClick={handleSearchClick}>search</button>
</div>


    <div className={style.banner}>
        <div className={style.bannerBox}>
            <div className={style.bannerImage}>
                <img src={bannerImage}/>
            </div>
            <div className={style.bannerbox2}>
                <h1>Graphic & Design</h1>
                <h2>Designs To Make You Stand Out</h2>
                <button className={style.bannerButton}>
                    More &nbsp;&nbsp; 
                </button>
            </div>
        </div>
    </div>

    <div className={style.scrollView1}>
      <h1 className={style.heading}>Most Popular Graphics and Design</h1>
      <div className={style.scrollViewInner}>
        {mostPopular.map((item, index) => (
          <div key={index} className={style.scrollViewItem}>
            {item} <span style={{color:'#F04C43'}}>&rarr;</span>
          </div>
        ))}
      </div>
    </div>

    <div className={style.serviceCardsOuter}>
    <h1 className={style.heading}>Explore Graphics and Design</h1> 
    <div className={style.serviceCards}>
    {categoryData &&
        categoryData.map((item)=>(<Card heading={item.category_name} subHeadings={item.subcategory} key={item.id}/>))
    }
    </div>
    </div>


    <div className={style.scrollView1} style={{height:'400px'}}>
      <h1 className={style.heading}>Graphics & Design Related Guides</h1>
      <div className={style.scrollViewInner}>
        {cardData2.map((item, index) => (
         <div key={index} className={style.scrollViewItem2}>
          <Card heading={item.heading} subHeadings={item.subHeading} />
       </div>
        ))}
      </div>
    </div>



    <Accordion/>
    </>
  )
}

export default HomePage