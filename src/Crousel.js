import React, { Component } from 'react'  
import Carousel from 'react-bootstrap/Carousel'  
export class Crousel extends Component {  
        render() {  
  
                return (  
                        <div>  
                          
                         <div className='container-fluid' >  
                         <Carousel>  
                         <Carousel.Item style={{'height':"300px"}} >  
                         <img style={{'height':"300px"}}  
                         className="d-block w-100"  
                        src="https://m.media-amazon.com/images/I/61nL24jpwzL._SX3000_.jpg"  />  
                           <Carousel.Caption>  
                              
                                 </Carousel.Caption>  
                                 </Carousel.Item  >  
                                 <Carousel.Item style={{'height':"300px"}}>  
                                 <img style={{'height':"300px"}}  
                                   className="d-block w-100"  
                                    src="https://m.media-amazon.com/images/I/51baiMblc8L._SX3000_.jpg"    />  
                                       <Carousel.Caption>  
                                   
                                      </Carousel.Caption>  
                                         </Carousel.Item>  
                                       <Carousel.Item style={{'height':"300px"}}>  
                                       <img style={{'height':"300px"}}  
                                        className="d-block w-100"  
                                         src="https://m.media-amazon.com/images/I/611swYV2idL._SX3000_.jpg"   />  
                                        <Carousel.Caption>  
                                           
                                          </Carousel.Caption>  
                                         </Carousel.Item>  
                                        </Carousel>  
                                </div>  
                        </div>  
                )  
        }  
}  
  
export default Crousel  