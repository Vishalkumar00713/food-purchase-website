import React,{useState,useEffect} from 'react'
import Navbar2 from "../components/Navbar2"
import Card from '../components/Card'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'






import "./back.css";


let sum=0;

export default function Home2() {


 const[fooditems,setFooditems]=useState([]);
 const[search,setSearch]=useState('');
 const [cart,setCart]=useState([]);
const[modal,setModal]=useState(false);
const[data,setData]=useState();





const toggleModal=()=>
{

  setModal(!modal);
} 

function Data(e)
{
  setData(e);

}





 
 function handelCart(name)
 {
 fooditems.map((i)=>{


    if(i.name===name)
      {
        
        sum=sum+i.options[0].half;
        
    setCart([...cart,i])
      }
      
  })
  
 
 
 }
 function seperate()
 {

  setFooditems(fooditems.filter((i)=>(

    i.name.toLowerCase().includes(search.toLowerCase())
  )))

  if(fooditems.length===0)
    {
      loadData();
    }
  
 }

 function Delete(e)

 {
  
  setCart(cart.filter((i)=>{

    if(i.name==e)
    {
      sum=sum-i.options[0].half;
    }

      return i.name!==e;
     }))
   
   

 }

 

 function handleSearch(e){


  
  setSearch(e.target.value);
    
  seperate();


 }




 const loadData=async()=>{

   let url="http://localhost:5000/api/foodData"
  let response=await fetch(url,{

    method:"POST",
    headers:{
      'Content-Type':'application/json'
    }
});

  response=await response.json();
  // console.log(response);
  setFooditems(response[0]);
  console.log(response[0])
 

 }

 useEffect(()=>{
  loadData()
  
 },[])

 function login()
 {
  alert("please login")
 }


  return (
    <div onTouchMoveCapture={login} >
      
      <Navbar2/>
    
      <button onClick={toggleModal} className=" btn-modal">Click to open cart<sup>{cart.length}</sup></button>
     
        <Modal isOpen={modal}>
        <button onClick={toggleModal} className=" btn btn-dark">Click to Close Cart</button>
      
          <div className="cart ">
            {
              cart.map((i)=>{
                
            
               
           
                return(
               <div className="container Inside">
                  <img src={i.img} alt="" />
                  <p className="para">{i.name}</p>
                  <p className="para">Rs{i.options[0].half}</p>
                  <div>
                    <button className='btn btn-dark my-3' onClick={()=>Delete(i.name)}>Remove</button>
                  </div>
                 
                  </div>
                
                 
                )
              })
            }
          
          <div>
          <button className='btn btn-success pay'>Pay Rs.{sum}</button>
          </div>
      
          </div>
          </Modal>
     
      
     
      <div className="container w-100">
      <form className="form-inline">
    <input className="form-control w-50  my-5 mx-2 d-inline" type="search" placeholder="Search" aria-label="Search" value={search} onChange={handleSearch}/>
    <button className="btn btn-light">Refresh</button>

  </form>
      </div>
      <div className='d-flex'>
      <div className="container d-flex flex-row flex-wrap">
      
      {fooditems.map((i)=>{


        return (
          <div>
         
            <Card  data={Data} item={i} handelCart={handelCart}/>
           
           <button className="btn btn-light" key={i.id} onClick={()=>handelCart(i.name)}>ADD TO CART</button>
         
            

            </div>
        )
      })}      
      </div>
   
      </div>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
     
      </Link>
      <span className="mb-3 mb-md-0 text-muted">© 2022 Foodaap, Inc</span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
    
    </ul>
  </footer>
    
    </div>
  )
}

