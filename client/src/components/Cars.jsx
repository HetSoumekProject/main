import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AllPosts from './AllPosts';


const Cars = () => {
    const[years,setYears]=useState("all")
    const[transmission,setTransmission]= useState("all");
    const[bodyStyle,setbodystyle]= useState("all");
    const [cars,setCars]=useState([])
    const [result,setResult]=useState([])
    const [refresh,setRefresh]=useState(true)
    const getCarsByCondition=()=>{
      axios.get(`http://localhost:3000/api/car/AllCars`).then(res=>{
        console.log(res.data)
        setCars(res.data)
      }).catch(err=>console.log(err))
    }
    useEffect(()=>{
   getCarsByCondition()

   console.log(cars)
   let x=cars.filter(el=>{
    if((years!="all"&&transmission!="all")&&bodyStyle!="all"){
      return (el.year===parseInt(years)&&el.transmission===transmission)&&el.body_style===bodyStyle}
      else{
        return el
      }
    })
    console.log(x)
   setResult(x)
    },[refresh])
  return (
    <div className='box' >
      <div>
      <h1 className='car'>Auctions</h1>
      <div id='selects' class="chosen-wrapper" data-js="custom-scroll">
      <select  name="years" id="years" class="chosen-select" data-placeholder="select a year" onChange={(e) => {setYears(e.target.value)
      setRefresh(!refresh)}}>
        <option value="all" >All</option>
        <option  value="2000"> 2000  </option>
        <option  value="2012"> 2012  </option>
        <option  value="2013"> 2013  </option>
        <option  value="2014"> 2014  </option>
        <option  value="2015"> 2015  </option>
        <option  value="2016"> 2016  </option>
        <option  value="2017"> 2017  </option>
        <option  value="2018"> 2018  </option>
        <option  value="2019"> 2019  </option>
        <option  value="2020"> 2020  </option>
        <option  value="2021"> 2021  </option>
        <option  value="2022"> 2022  </option>
        <option  value="2023"> 2023  </option> 
      </select>
      </div>
      <div className='selects'>
      <select className='select' name="transmission" id="transmission" onChange={(e) => {setTransmission(e.target.value)
      setRefresh(!refresh)} }>


      <option value="all"> All  </option>
      <option value="auto"> Automatic  </option>
      <option value="manual"> Manual  </option>
      </select>
      <select className='select' name="bodyStyle" id="bodyStyle" onChange={(e) => {setbodystyle(e.target.value)
      setRefresh(!refresh)} }>
      <option value="all"> All  </option>
      <option value="coupe"> coupe  </option>
      <option value="convertible"> convertible  </option>
      <option value="hatchback"> hatchback  </option>
      <option value="sedan"> sedan  </option>
      <option value="suv"> suv </option>
      <option value="truck"> truck  </option>
      <option value="van">van </option>
      <option value="wagon"> wagon  </option>
      </select>
      </div>
      <h5 className='car' >Ending soon  </h5>
      </div>
      {result.map((item , index) => {

      console.log("item",item)
      return(
        <div  key = {index}>
       <AllPosts car={item}/>
 </div>    

      )
             

})}
    </div>
  )
}
export default Cars