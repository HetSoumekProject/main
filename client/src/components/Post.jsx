import React, { useState } from "react";
import axios from "axios";
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
      .post(`api/car/postACar/${id}`, {
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
    <div>
      <h1>Post a car</h1>
      <form>
      <input
        required
        type="text"
        placeholder="brand name"
        onChange={(e) => setBrandName(e.target.value)}
      />
      <input
        required
        type="text"
        placeholder="description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        required
        type="number"
        placeholder="initial price"
        onChange={(e) => setInitialPrice(e.target.value)}
      />
      <input
        required
        type="number"
        placeholder="year"
        onChange={(e) => setYear(e.target.value)}
      />
      <select
        required
        name="transmission"
        onChange={(e) => settransmission(e.target.value)}
      >
        <option value="auto">auto</option>
        <option value="manual">manual</option>
      </select>
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
      <input
        required
        type="file"
        onChange={(e) => {
          console.log(e.target.files[0])
          setFileToBase(e.target.files[0])}}
      />
      <button
        type="button"
        onClick={() => {
          console.log(image)
          postACar(
            id,
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
