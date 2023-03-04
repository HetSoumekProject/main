import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AllPosts from './AllPosts';


const Cars = () => {

    const[years,setYears]=useState("")
    const[transmission,setTransmission]= useState("");
    const[bodyStyle,setbodystyle]= useState("");
    const [cars,setCars]=useState([])
    const [result,setResult]=useState([])
    const [refresh,setRefresh]=useState(true)
    const getCarsByCondition=()=>{
      axios.get(`http://localhost:3000/api/car/AllCars`).then(res=>{
        setCars(res.data)
      }).catch(err=>console.log(err))
    }
    useEffect(()=>{
   getCarsByCondition()

   console.log(cars)
   let x=cars.filter(el=>{

      return (el.year===parseInt(years)&&el.transmission===transmission)&&el.body_style===bodyStyle
    })
    console.log(x)
   setResult(x)
    },[refresh])
  return (
    <div >
      <div>
      <h1>Auctions</h1>
      <select name="years" id="years"  onChange={(e) => {setYears(e.target.value)
      setRefresh(!refresh)}}>
        <option  value="2010"> 2010  </option>
        <option  value="2011"> 2011  </option>
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
      <select name="transmission" id="transmission" onChange={(e) => {setTransmission(e.target.value)
      setRefresh(!refresh)} }>


      <option value="All"> All  </option>
      <option value="auto"> Automatic  </option>
      <option value="manual"> Manual  </option>
      </select>
      <select name="bodyStyle" id="bodyStyle" onChange={(e) => {setbodystyle(e.target.value)
      setRefresh(!refresh)} }>
      <option value="All"> All  </option>
      <option value="coupe"> coupe  </option>
      <option value="convertible"> convertible  </option>
      <option value="hatchback"> hatchback  </option>
      <option value="sedan"> sedan  </option>
      <option value="suv"> suv </option>
      <option value="truck"> truck  </option>
      <option value="van">van </option>
      <option value="wagon"> wagon  </option>
      </select>
      <h5 >Ending soon  </h5>
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