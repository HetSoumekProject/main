import React, { useState } from "react";
import axios from "axios";
import css from "./post.css";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
function Post() {
  const [brandName, setBrandName] = useState("");
  const [description, setDescription] = useState("");
  const [initialPrice, setInitialPrice] = useState(0);
  const [year, setYear] = useState(0);
  const [transmission, settransmission] = useState("");
  const [bodyStyle, setbodyStyle] = useState("");
  const [image, setImage] = useState("");


  const setFileToBase = (file) => {
    console.log(file)
    const img = new FileReader();
    img.readAsDataURL(file);
    img.onloadend = () => setImage(img.result);
    
  };

  const postACar = (
    id,
    brandName,
    description,
    initialPrice,
    year,
    transmission,
    bodyStyle,
    image
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
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    
    
    <div className="post-item">
      <h1>sell your car </h1>
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
        <option >coupe</option>
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
        onChange={(e) => {
          setFileToBase(e.target.files[0])}}
      />
            <br/>
            <br/>

      <button
     
     class="button-5" role="button"
        type="button"
        onClick={() => {
          console.log(image)
          postACar(
            1,
            brandName,
            description,
            initialPrice,
            year,
            transmission,
            bodyStyle,
            image
          );
        }}
      > submit</button>
      </form>
      {/* <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box> */}
    </div>
    
    




  );
}

export default Post;
