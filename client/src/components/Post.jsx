import React, { useState } from "react";
import axios from "axios";
import css from "./post.css"
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
    
    <div className="post-item {
      ">
      <h1>sell your car </h1>
      <br/>
      <form>
      <input
        required
        type="text"
        placeholder="brand name"
        onChange={(e) => setBrandName(e.target.value)}
      />
            <br/>
            <br/>
      <textarea
        required
        type="text"
        placeholder="description"
        onChange={(e) => setDescription(e.target.value)}
      />
            <br/>
            <br/>
      <input
        required
        type="number"
        placeholder="initial price"
        onChange={(e) => setInitialPrice(e.target.value)}
      />
            <br/>
            <br/>
      <input
        required
        type="number"
        placeholder="year"
        onChange={(e) => setYear(e.target.value)}
      />
            <br/>
            <br/>

      <select
        required
        name="transmission"
        onChange={(e) => settransmission(e.target.value)}
      >
        <option value="auto">auto</option>
        <option value="manual">manual</option>
      </select>
          <br/>
          <br/>

      <select
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
        required
        type="file"
        onChange={(e) => {
          setFileToBase(e.target.files[0])}}
      />
            <br/>
            <br/>

      <button
     
     class="button-55" role="button"
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
    </div>
  );
}

export default Post;
