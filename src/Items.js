import React from 'react';
import {Link,NavLink} from 'react-router-dom';
import './Items.css'


class Items extends React.Component{
    

   state={quantity:0}
    

    
    render(){
        const {itemDetails}= this.props
        const {name,Id,price,available,category,vendor,image}=itemDetails
        const {quantity}=this.state
        const createTwoButtonAlert = () =>
    {
        const {quantity}=this.state
        if(quantity!==0){
            let msg=`${name} Rs${price}/-  Quantity:${quantity}   ${category} from ${vendor}`;
        alert(msg);
        }
        else{
            alert("Add Quantity for selected Product");
        }
        
    }

    const onInc=()=>{
        this.setState(prevState=>({quantity:prevState.quantity+1}))
    }
    const onDec=()=>{
        if(quantity>0){
        this.setState(prevState=>({quantity:prevState.quantity-1}))
        }
        else{
            this.setState({quantity:0})
        }
    }
    

    
    
    
    return(
        
        <div className="card-container">
            
           
           
            <img src={image} alt="image" className='img'/>
            
            {available?<h1 className='avail'>In Stock</h1>:<h1 className='notAvail'>Out of Stock</h1>}
            <div className='container'>
            <p className='name'>{name}</p>
            
            <p className='money'>Rs.{price}/-</p>
            </div>
            <div className='container4'>
            <p className='para2'>{category}  </p>
            <div className='container8'>
                <button className="button" onClick={onDec}>-</button>
                <p className='para'> {quantity} </p>
                <button className="button" onClick={onInc}>+</button>
            </div>
            </div>
            
            
            
            <button type="button" onClick={createTwoButtonAlert} className='purchaseBtn'>Purchase</button>
            
        </div>
        
    )
    }
    
    
}

export default Items