import axios from 'axios';
import React, { useState } from 'react';
import CarImages from './CarImages.jsx';
import ChatRoom from './ChatRoom.jsx';
import Payment from './Payment.jsx';
import Bid from './Bid.jsx';
import './oneCar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function OneCar(props) {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-8'>
          <div className='card'>
            <div className='card-body'>
              <div className='row'>
                <div className='col-md-8'>
                  {props.car.images.length > 0 && (
                    <div className='preload-wrap main loaded'>
                      <CarImages image={props.car.images[0]} />
                    </div>
                  )}
                  {props.car.images.slice(1).map((el, i) => (
                    <div className={`car-image car-image-${i + 1}`} key={i}>
                      <CarImages image={el} />
                    </div>
                  ))}
                </div>
                <div className='col-md-4'>
                  <div className='description'>
                    <h1>Brand: {props.car.brand_name}</h1>
                    <p>Description: {props.car.description}</p>
                    <h1>Year: {props.car.year}</h1>
                    <h1>Transmition: {props.car.transmission}</h1>
                    <h1>Body Style: {props.car.body_style}</h1>
                    <h1>Min amount to bid: {props.car.min_amount} dt</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='card'>
            <div className='card-body'>
              <ChatRoom id={props.car.id} />
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='card'>
            <div className='card-body'>
              <Bid car={props.car} />
            </div>
          </div>
          <div className='card'>
            <div className='card-body'>
              <Payment />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OneCar;
