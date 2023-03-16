import axios from 'axios';
import React, { useState ,useEffect} from 'react'
import Countdown from 'react-countdown';
import FavoriteList from './FavoriteList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'
function FavoriteIcon() {
  return (
    <FontAwesomeIcon icon={faHeart} />
  )
}
const AllPosts = ({user,car,setCar,setView,view}) => {
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
  const handleSubmitfav = async (event) => {
    event.preventDefault();
    console.log("user ", localStorage)
    console.log("car", car.id)

    try {
      const response = await axios.post(`http://localhost:3000/api/fav/addfav/${user.id}/${car.id}`)
      console.log(response.data); 
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='oneCard'>
     <div> <button type='button' className='' onClick={handleSubmitfav}><FavoriteIcon /></button></div>
 { car.images[0]?<img className='cars-pic' src={car.images[0].image} onClick={()=>{setView(!view)
      setCar(car)
      }}/> :"doesnt exist"}
      <h1>
        {car.brand_name}
      </h1>
      <h4>
      ending in :  {car.ending_day}
      </h4>

      <div>

      {countdownDate && (
        <div>
          <Countdown date={countdownDate} renderer={renderer} />
        </div>
      )}
    </div>

      <div>
        <button type='button' onClick={()=>setView(!view)}>Bid!!</button>
      </div>
    </div>

    
  )
}
export default AllPosts
;

