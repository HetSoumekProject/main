import axios from 'axios';
import React, { useState ,useEffect} from 'react'
import Countdown from 'react-countdown';
import css from './allPosts.css'
const AllPosts = ({user,car,setCar,setView,view}) => {
console.log(car);
  const [countdownDate, setCountdownDate] = useState(new Date('2023-12-31'));

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdownDate(new Date(car.ending_day));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const Completionist = () => <span>You are good to go!</span>;

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else if (countdownDate < new Date()) {
      return <span>Countdown date has passed!</span>;
    } else {
      return (
        <span>
          {days} days, {hours} hours, {minutes} minutes, {seconds} seconds
        </span>
      );
    }
  };

  const handleSubmitfav = (event) => {
    console.log('user',user);
    console.log('carr',car)
    event.preventDefault();
    axios.post(`http://localhost:3000/api/fav/addfav/${user}/${car.id}`)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };
  return (
  <div className="example-1 car_card">
    <div className="car_wrapper">
    { car.images[0]?<img classNameName='cars-pic' src={car.images[0].image} onClick={()=>{setView(!view)
      setCar(car)
    }}/> :"doesnt exist"}
      <div className="car_date">
       
       {countdownDate && (
        <div>
          <Countdown date={countdownDate} renderer={renderer} />
          </div>
            )}
      </div>
      <div className="car_data">
        <div className="car_content">
          <span className="car_author"> brand name : <br/>
          {car.brand_name}</span>
          <h1 className="car_title"><a href="#">  {car.brand_name} :</a></h1>
          <p className="car_text">"Join us to place a bid on this car and increase your chances of winning."
           </p>
           <h4>
            ending in :  {car.ending_day}
            </h4>
           
            <button className='buttonposts' type='button' onClick={()=>{setView(!view);setCar(car)}}>Bid!!</button>
          
          <label for="show-menu" className="car_menu-button"><span></span></label>
        </div>
        <input type="checkbox" id="car_show-menu" />
        <ul className="car_menu-content">
          <li>
            <a href="#"  className="fa fa-bookmark-o"></a>
          </li>
          <li><a href="#" className="fa fa-heart-o"><span>47</span></a></li>
          <li><a href="#" className="fa fa-comment-o"><span>8</span></a></li>
        </ul>
      </div>
    </div>
  </div>


    
  )
}
export default AllPosts
;