import React from 'react';
import './Home.css';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCarSide } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const Home=()=> {
  useEffect(() => {
    AOS.init({ duration: 1000 ,offset: 150,});
  }, []);

  return (
  <div >
   
     <section class="home" id="home">
     <div class="content">
       {/* <span data-aos="fade-up" data-aos-delay="150"> Car Addict</span> */}
       <h3 data-aos="fade-up" data-aos-delay="300">HET SOUMEK</h3>
       <p data-aos="fade-up" data-aos-delay="450">
       Whether you're a seasoned car enthusiast or a first-time buyer, our website offers a hassle-free way to buy your next vehicle. So why wait? Start bidding today and drive away with your perfect car!

       </p>
       <a data-aos="fade-up" data-aos-delay="600" href="#" class="btn"
         ><Link style={{ textDecoration: 'none',color:'white' }} to="/cars">JOIN US</Link></a>
     </div>
   </section>
   <section class="about" id="about">
      <div class="img-container" data-aos="fade-right" data-aos-delay="300">
        <img src="images/abt.png" alt="" />
      </div>

      <div class="content" data-aos="fade-left" data-aos-delay="600">
        <span>Our History</span>
        <h3>Everything you need to build</h3>
        <p>
        our web site allows user to bid on a wide range of vehicles, from sporty coupes to family-friendly SUVs, from the comfort of your own home. With our user-friendly interface and powerful search tools, you can easily find the car you want and place a bid that's right for yous
        </p>
        <a href="#" class="btn">read more</a>
      </div>
    </section>

    <section
      class="popular"
      id="popular"
      data-aos="fade-up"
      data-aos-delay="150"
    >
      <div class="heading">
        <span>Top Bided</span>
        <h1>Most popular Vehicles</h1>
      </div>

      <div class="box-container">
        <div class="box">
          <span class="price"> 500k - 2000k </span>
          <img src="/images/p-1.jpeg" alt="" />
          <h3>BMW</h3>
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
          </div>
          <a href="#" class="btn">order now</a>
        </div>
        <div class="box">
          <span class="price"> 500k - 2000k </span>
          <img src="images/p-2.jpeg" alt="" />
          <h3>mercedes</h3>
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
          </div>
          <a href="#" class="btn">order now</a>
        </div>
        <div class="box">
          <span class="price"> 500k - 2000k </span>
          <img src="images/p-3.jpeg" alt="" />
          <h3>Range Rover</h3>
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
          </div>
          <a href="#" class="btn">order now</a>
        </div>
        <div class="box">
          <span class="price"> 500k - 2000k </span>
          <img src="images/p-4.jpeg" alt="" />
          <h3>porche</h3>
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
          </div>
          <a href="#" class="btn">order now</a>
        </div>
        <div class="box">
          <span class="price"> 500k - 2000k </span>
          <img src="images/p-5.jpeg" alt="" />
          <h3>Nisan X</h3>
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
          </div>
          <a href="#" class="btn">order now</a>
        </div>
        <div class="box">
          <span class="price"> 500k - 2000k </span>
          <img src="images/p-6.jpeg" alt="" />
          <h3>ferrari</h3>
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
          </div>
          <a href="#" class="btn">order now</a>
        </div>
      </div>
    </section>
    <section class="review" id="review">
      <div class="heading">
        <span>THE FOUNDERS </span>
        <h1>reviews</h1>
      </div>
      <div class="box-container">
        <div class="box">
          <img src="images/pic-1.png" alt="" />
          <h4>Moshen rebhi</h4>
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
          </div>
          <p>
            the best bidding web site ever 
          </p>
        </div>
        <div class="box">
          <img src="images/pic-2.png" alt="" />
          <h4>Mariem bn sawaf</h4>
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
          </div>
          <p>
           i found here amazing cars 
          </p>
        </div>
        <div class="box">
          <img src="images/pic-3.png" alt="" />
          <h4>Lazher Arouch</h4>
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
          </div>
          <p>BMW in the best</p>
        </div>
      </div>
    </section>

    <div class="banner">
      <div class="content" data-aos="zoom-in-up" data-aos-delay="300">
        <span>NEWSLETTER</span>
        <h3>SUBSCRIBE for latest news</h3>
        <form action="#">
          <input
            type="email"
            placeholder="Enter your email address"
            class="input"
          />
        </form>
        <a href="#" class="btn"><Link to ='mail'>SEND</Link></a>
      </div>
    </div>

   

    <section class="footer">
      <div class="box-container">
        <div class="box" data-aos="fade-up" data-aos-delay="150">
          
          <div class="share">
            <a href="#" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
            <a href="#" class="fab fa-linkedin"></a>
          </div>
        </div>

        <div class="box" data-aos="fade-up" data-aos-delay="300">
          <h3>quick links</h3>
          <a href="#home" class="links">
            <i class="fas fa-arrow-right"></i> home
          </a>
          <a href="#about" class="links">
            <i class="fas fa-arrow-right"></i> about
          </a>
          <a href="#destination" class="links">
            <i class="fas fa-arrow-right"></i> destination
          </a>
          <a href="#services" class="links">
            <i class="fas fa-arrow-right"></i> services
          </a>
          <a href="#gallery" class="links">
            <i class="fas fa-arrow-right"></i> gallery
          </a>
          <a href="#blogs" class="links">
            <i class="fas fa-arrow-right"></i> blogs
          </a>
        </div>

        <div class="box" data-aos="fade-up" data-aos-delay="450">
          <h3>contact info</h3>
          <p><i class="fas fa-map"></i> ARIANA,Tunis</p>
          <p><i class="fas fa-phone"></i> +216 21 21 21 12 </p>
          <p><i class="fas fa-envelope"></i> hetSoumk@gmail.com</p>
          <p><i class="fas fa-clock"></i> 9:00am - 5:00pm</p>
        </div>

        <div class="box" data-aos="fade-up" data-aos-delay="600">
          <h3>newsletter</h3>
          <p>subscribe for latest updates</p>
          <form action="">
            <input
              type="email"
              name=""
              placeholder="enter your email"
              class="email"
              id=""
            />
            <input type="submit" value="subscribe" class="btn" />
          </form>
        </div>
      </div>
    </section>
 
   </div>
  );
}
export default Home;

