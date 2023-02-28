import React,{useState} from 'react'

const AllPosts = () => {


const[years,setYears]=useState("")
const[transmission,setTransmission]= useState("");
const[bodyStyle,setbodystyle]= useState("");


  return (
    <div>
      <div>
      <h1>Auctions</h1>
      <select name="years" id="years"  onChange={(e) => {setYears(e.target.value)}}>
      {console.log(years)}
        <option  value="2010"> 2010  </option>
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
      <select name="transmission" id="transmission" onChange={(e) => {setTransmission(e.target.value)} }>
      {console.log(transmission)}

      <option value="All"> All  </option>
      <option value="Automatic"> Automatic  </option>
      <option value="Manuel"> Manual  </option>
      </select>
      <select name="bodyStyle" id="bodyStyle" onChange={(e) => {setbodystyle(e.target.value)} }>
      {console.log(bodyStyle)}
      <option value="All"> All  </option>
      <option value="Coupe"> Coupe  </option>
      <option value="Convertible"> Convertible  </option>
      <option value="Hatchback"> Hatchback  </option>
      <option value="Sedan"> Sedan  </option>
      <option value="SUV/Crossover "> SUV/Crossover  </option>
      <option value="Truck"> Truck  </option>
      <option value="Van/Minivan"> Van/Minivan  </option>
      <option value="Wagon"> Wagon  </option>
      </select>
      <h5 >Ending soon  </h5>
      
      </div>
    </div>
  )
}

export default AllPosts
