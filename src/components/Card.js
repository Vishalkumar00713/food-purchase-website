import React from 'react'




export default function Card({item}) {


 




  


  return (
    <div className="container card1">
     
        <div className="card mt-3" style={{"width":"18rem"}}>
  <img src={item.img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{item.name}</h5>
    <p className="card-text">{item.description}</p>
     <div className="container w-100">
     

      <br />
      <div className="d-inline f-5">
         Price:Rs <b>{(item.name!=="Chicken Cheese Pizza")||(item.name!=="Mix Veg Pizza")?item.options[0].half:item.options[0].regular}</b>
         
      </div>

     </div>
     <hr />
  </div>

</div>

    </div>
  )


}









