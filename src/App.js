
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './Header.css'
import React from 'react';
import Items from './Items';
import BlogItemDetails from './BlogItemDetails';
import MensClothing from './MensClothing';
import Deals from './Deals';
import Offers from './Offers';
import Crousel from './Crousel';
import Footer from './Footer';

const listOfItems=[ 

  { 
  
  name:"Potato", 
  
  id:1, 
  
  price:30, 
  
  available:1, 
  
  vendor:"Himachal Pvt Ltd", 
  
  category:"Vegtables",
  image:"https://cdn.cheapism.com/images/081516_national_potato_day_recipe.2e16d0ba.fill-1440x605.jpg" 
  
  }, 
  
  { 
  
  name:"Banana", 
  
  id:2, 
  
  price:50, 
  
  available:1, 
  
  category:"Fruits",
  
  vendor: "Organic farms",
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGMjaBt9NFXZJEGT7vEsTBiRWEW7qT6zuqZA&usqp=CAU" 
  
  
  }, 
  
  { 
  
  name:"Drumsticks", 
  
  id:3, 
  
  price:20, 
  
  available:0, 
  
  category:"Vegetables", 
  
  vendor:"Mallikarjuna farms",
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT-aghFEBepp5BbWxYhjGqWYMPmZFNsU7sRQ&usqp=CAU" 
  
  }, 
  
  { 
  
  name:"Orange", 
  
  id:4, 
  
  price:25, 
  
  available:1, 
  
  vendor:"Nagpur farms", 
  
  category:"Fruits" ,
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROzLWLpgZIj11zOHIlsdvwxnLzl_7tJl9sDg&usqp=CAU" 
  
  } 
  
  ] 
  
  


class App extends React.Component {

  

  state={searchInput:'',itemslList:listOfItems}

  onChangeSearchInput=event=>{
    this.setState({searchInput:event.target.value})
  }
  
  


  render(){
    
    const {searchInput,itemslList}=this.state
    const searchResults=itemslList.filter(each=>each.category.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase()))
  return (
    
    <div className="App">
      
      <div className='header'>
        <div className='header__first'>
            <img src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="flipkart"/>
            <div className='header_first1'>
                <span style={{
                    fontSize:'11px',
                    color:'white',
                    fontStyle:'italic'
                }}>Explore</span>
                <span style={{
                    color:'#f9e107',
                    fontSize:'11px',
                    fontStyle:'italic'
                }}>Plus</span>
                <span><img width="10" src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" alt="flipkart plus"/></span>
            </div>
        </div>
        <div className='header__second'>
            <input type="text" placeholder='Search for products' onChange={this.onChangeSearchInput} value={searchInput}/>
            <SearchIcon/>
        </div>
        <div className='header__third'>
            <button>Login</button>
        </div>
        <div className='header__fourth'>
            <span>More</span>
            <ExpandMoreIcon/>
        </div>
        <div className='header__fifth'>
            <ShoppingCartIcon/>
            <p>Cart</p>
            </div>       
      </div>
      <BlogItemDetails/>
      <Crousel/>
  
      <h1 className='sale'>Deals of the Day- <span className='spanTag'>Christmas Sale</span></h1>
      <ul className='listContainer'>
        {searchResults.map(each=>(
          <Items key={each.id} itemDetails={each}/>
      
        ))}
      </ul>
      <Deals/>
      <MensClothing/>
      <Offers/>
      <Footer/>

    </div>
   
   
  );
              }
}

export default App;
