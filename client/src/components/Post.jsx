import React, { useEffect, useState } from "react";
import axios from "axios";
import css from "./post.css"
import { Link } from 'react-router-dom';
import Pop from "./Pop.jsx"
function Post() {
  const [brandName, setBrandName] = useState("");
  const [description, setDescription] = useState("");
  const [initialPrice, setInitialPrice] = useState(0);
  const [year, setYear] = useState(0);
  const [transmission, settransmission] = useState("auto");
  const [bodyStyle, setbodyStyle] = useState("coupe");
  const [image, setImage] = useState([]);
  const [user,setUser]=useState({})
  const [showPopup, setShowPopup] = useState(false);
  const [viewport,setViewport]=useState({})
  const setFileToBase = (files) => {
    console.log(files)
    let i=0
    while(i<files.length){
      const img = new FileReader();
      console.log("files console",files[i]);
      img.readAsDataURL(files[i]);
      img.onloadend = () => image.push(img.result);
      i++
    }
  
 
  };
  const handleSuccess = () => {
    setShowPopup(true);
  };
  const postACar = (
    id,
    brandName,
    description,
    initialPrice,
    year,
    transmission,
    bodyStyle,
    image,longitude,latitude
  ) => {
    axios
      .post(`http://localhost:3000/api/car/postACar/${id}`, {
        brandName: brandName,
        description: description,
        initialPrice: initialPrice,
        year: year,
        transmission: transmission,
        bodyStyle: bodyStyle,
        image: image,
        longitude:longitude,
        latitude:latitude
      })
      .then((res) => {
       setImage([])})
      .catch((err) => console.log(err));
  };
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(pos => {
      setViewport({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude
      });
    });
    axios.get(`http://localhost:3000/api/user/userbyuid/${localStorage.userInfo}`)
    .then((res)=>{
        setUser(res.data);
    }).catch((err)=>{
        console.log("user err:",err);
    })
  },[])
  return (
    
    <div className="post-container">
      <img className="imgcar" src="https://file.kelleybluebookimages.com/kbb/base/evox/CP/15180/2023-Chevrolet-Corvette-front_15180_032_1838x654_GA7_cropped.png"/>
    <div className="post-item">
      <h1 className="h11">sell your car :</h1>
      <br/>
      <form>
      <input
      className="inputs"
        required
        type="text"
        placeholder="brand name"
        onChange={(e) => setBrandName(e.target.value)}
      />
            <br/>
            <br/>
      <textarea
      className="inputs"
        required
        type="text"
        placeholder="description"
        onChange={(e) => setDescription(e.target.value)}
      />
            <br/>
            <br/>
      <input
       className="inputs"
        required
        type="number"
        placeholder="initial price"
        onChange={(e) => setInitialPrice(e.target.value)}
      />
            <br/>
            <br/>
      <input
        className="inputs"
        required
        type="number"
        placeholder="year"
        onChange={(e) => setYear(e.target.value)}
      />
            <br/>
            <br/>

      <select
        className="inputs"
        required
        name="transmission"
        onChange={(e) => settransmission(e.target.value)}
      >
        <option value="auto">auto</option>
        <option value="manual">manual</option>
      </select>
         

      <select
        className="inputs"
        required
        name="bodyStyle"
        onChange={(e) => setbodyStyle(e.target.value)}
      >
        <option value="coupe" >coupe</option>
        <option value="convertible">convertible</option>
        <option value="hatchback">hatchback</option>
        <option value="sedan">sedan</option>
        <option value="suv">suv</option>
        <option value="truck">truck</option>
        <option value="van">van/minivan</option>
        <option value="wagon">wagon</option>
        </select>
        <br/>
        <br/>

      <input
  className="inputs"
  required
  type="file"
  multiple
  onChange={(e) => {
    console.log("file",e.target.files)
    setFileToBase(e.target.files)}
  }
/>
            <br/>
            <br/>

      <button
     
     class="button-1" role="button"
        type="button"
        onClick={() => {
          console.log(image)
          postACar(
            user.id,
            brandName,
            description,
            initialPrice,
            year,
            transmission,
            bodyStyle,
            image,
            viewport.longitude,viewport.latitude
          );
        }}
      > <Link style={{ textDecoration: 'none',color:'black' }}to='/pop'>ADD</Link></button>
      </form>
    </div>
    <div className="post-container">

    {showPopup && <Pop />}
  </div>
    </div>
  );
      }
export default Post;