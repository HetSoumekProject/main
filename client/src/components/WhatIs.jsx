/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/role-has-required-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './WhatIs.css';
import { Container, Row, Col } from 'react-bootstrap';

function WhatIs() {
  return (
    <div id="root">
      <div className='page container-fluid static what-is'>
        <div className='row'>
          <div>
            <nav className='static-sidebar'>
              <ul>
                <li>
                  <a className='aboutUs'  title='About Us' href='#section-about-us' class="btn btn-outline-success">
                    About Us
                  </a>
                </li>
                <br/>
                <br/>
                <li className="sub-nav">
  <span className="nav-sec" >How it works</span>
  
  <ul>
  <br/>
    <li>
      <a title="buying a car "href="#section-buying-a-car" className="btn btn-outline-success"> Buying  a car  </a>
    </li>
    <br/>
    <li>
    <a title="Selling a car "href="#section-selling-a-car" className="btn btn-outline-success"> Selling a car  </a>
    </li>
    <br/>
    <li>
    <a title="Finalization the Sale  "href="#section-finalizing-sale" className="btn btn-outline-success"> Finalization the Sale </a>
    </li>
    <br/>
  </ul>
</li>

              </ul>
            </nav>
              </div>
              
          <div className='details-page'>
            <div className='col' >
            <h1 className='line'>___________________</h1>
            <h1 className='whats' class="btn btn-outline-success">What's Chkoun Yzid?
</h1>

<Container className="facts " >
    <Row>
      <Col md={12} lg={6}>
        <div className="fact">
          <h3>Cool Car Auctions</h3>
          <p>Auction your modern enthusiast car — <br/>anything cool and exciting from the 1980s to the 2023s.</p>
        </div>
      </Col>
      <Col md={12} lg={6}>
        <div className="fact">
          <h3>Low Fees</h3>
          <p>Buyers pay a 4.5% commission, capped at 4,500dt. <br/>Sellers list for free and receive 100% of the sale price.</p>
        </div>
      </Col>
      <Col md={12} lg={6}>
        <div className="fact">
          <h3>More Information</h3>
          <p>We provide vehicle history reports for every<br/> vehicle listed on HetSoumek — for free.</p>
        </div>
      </Col>
      <Col md={12} lg={6}>
        <div className="fact">
          <h3>Easy to Use</h3>
          <p>We’ve developed several new features that <br/>innovate buying and selling enthusiast cars online.</p>
        </div>
      </Col>
    </Row>
  </Container>
<div className='section'>
<h1 className='line'>____</h1>
  <h2 id='section-about-us' className="btn btn-outline-success"> About Us </h2>
  
  <p>Over the last few years, many car enthusiasts have started turning their attention to recent <br/>vehicles – cars from the 1980s, 1990s, and beyond. RBK STUDENT realized there isn’t yet a specific<br/> place that’s focused solely on buying and selling these modern enthusiast cars,<br/> but there should be – so he and a team created HetSoumek,<br/> with its simple name modeled after Doug’s famous pursuit of “quirks and features.”</p>
<p>HetSoumek is the best online auction marketplace to buy and sell modern enthusiast cars – <br/>and that means pretty much anything that’s cool from the 1980s, 1990s, 2000s, 2010s, or 2020s. <br/>To us, “cool” ranges from the obvious (a Ferrari F355 or a Lamborghini Gallardo) to the esoteric<br/> (a pristine Dodge Dakota Convertible or a Mercury Capri XR2) to the traditional fun cars that enthusiasts love <br/>(a Mazda MX-5 Miata or a Porsche 911). Basically everything that’s exciting, fun, <br/>interesting, or quirky is welcome here – as long as it comes from the modern era.</p>
<p>Although there are many places to buy and sell a special car, HetSoumek offers <br/>significant advantages over other websites.
<br/>
<strong> Here are just a few of our benefits:<br/></strong> </p>
<ul>
<li>
<strong>We’re focused on modern enthusiast cars: <br/></strong> 
the 1980s to the 2020s. That means anyone interested in the next era of exciting cars will<br/> come here first to buy and sell.
</li>
<li>
<strong>Our fees are low. </strong>
Sellers list for free, and the buyer's fee is just 4.5%,<br/>
with a minimum of 225dt and a maximum of 4,500dt — far below other auction houses and enthusiast car auction websites.
</li>
<li>
<strong>We believe that every vehicle should come with a vehicle history report<br/></strong>
– so we provide one, for free, instead of asking sellers to pay for their own. </li>
<li>
<strong>our admin  will bring extra eyes – and extra buyers – to your cars,<br/></strong>
periodically reviewing cars offered on HetSoumek. <br/>If your car is chosen, you’ll get far more eyes on your vehicle than any other auction platform on earth.
</li>
<li>
While other car auctions take weeks or even months to get your car <br/>listed and available to buyers,<br/><strong>we’ll get your car listed quickly</strong>
– and we’ll even take your input on scheduling your car’s auction.</li>
<li>
<strong>HetSoumek makes it easy to submit your car for sale.<br/> </strong>
We value your time by asking for only a few crucial details before letting you know <br/>whether or not we’re accepting your vehicle. That means you don’t have to waste <br/>your time providing initial information only to have your car rejected. </li>
<li>
<strong>HetSoumek is the most user-friendly online automotive marketplace,<br/> </strong>with easy sorting and searching – and simplified auctions that tell you exactly<br/> what you need to know about each vehicle.

</li>
<li>We’re always here to help -
<strong> including after the auction ends.<br/></strong>
We’ve built a step-by-step checklist to ensure a smooth sale – and we’re just<br/> a chat away if you have any questions. </li>
</ul>
</div>
<div className="section ">
<h1 className='line'>________</h1>
<h2 id ="section-how-it-works"className="btn btn-outline-success">How It Works</h2>
<h1 className='line'>___</h1>
<h3 id ="section-buying-a-car"className="btn btn-outline-success"> Buying a Car</h3>

<p>Once you’ve found a car you’re interested in,<br/>
 here are the steps you should take to bid confidently and, 
 with any luck, win the auction!<br/></p>
 <h4 className="btn btn-outline-success">1. Register to Bid</h4>
 <p>To contact the seller directly and place bids,<br/>
   you must first Register to Bid  with a valid credit card and phone number.<br/>
    Winning bidders pay HetSoumek a 4.5% buyer’s fee on top of <br/>
    the winning bid amount (minimum of $225, maximum of $4,500).</p>
    <h4 className="btn btn-outline-success">2. Perform Due Diligence </h4>
    <p>While we’ve tried to make buying a car online as safe and easy as possible,<br/>
       it’s ultimately your responsibility to perform your own due diligence and make <br/>
       sure that the car you’re considering is right for you –<br/>
       <strong>prior to placing a bid.</strong>
       </p>
       <ul>
        <li>
        Review the listing thoroughly, including known flaws, the vehicle history report,<br/> recent maintenance, photos, etc.
        </li>
        <li>
        Ask the seller – via comments, Seller Q&A, <br/>
        or the “Contact” feature – any questions that you may have
         about the vehicle.
        </li>
        <li>
        Arrange to inspect the vehicle in person,
         or work with the seller to schedule a pre-purchase <br/>
         inspection (“PPI”) at a reputable shop in their area (at your cost).
         </li>
       </ul>
       <h4 className="btn btn-outline-success">3. Arrange Financing and Logistics</h4>
       <p>To ensure a smooth transaction, you should have the following organized prior to placing a bid.</p>
      <ul>
        <li> 
        To facilitate your purchase, we’ve teamed up with LightStream to make financing easy and fast<br/> for users with good to excellent credit. You can check out rates and payments -<br/> and apply for a loan - directly from each auction! LightStream financing is not tied to a specific vehicle,<br/> and you can get your loan funded - and money deposited into your account -<br/> as soon as the same day you apply.**
        </li>
        <li> 
        As a reminder, if you plan to finance this purchase, work with your lender to get your financing approved ahead of time - <br/>and keep in mind that some lenders may require specific vehicle information and may have year and mileage restrictions.

        </li>
        <li>
        Discuss transportation and storage timelines (if applicable) with the seller,<br/> and if you’ll be shipping the vehicle, get a quick and easy shipping quote directly <br/>on the auction page before bidding.
           </li>
      </ul>
      <h4 className="btn btn-outline-success">4.Bid</h4>
      <p>We’ve made bidding easy</p>
      <ul>
        <li>
        When you bid, we place a hold on your credit card for the buyer's fee – if you win, <br/>your card will be charged and you will pay the seller directly for the vehicle, otherwise, <br/>the hold will be released at the auction’s end.
        </li>
        <li>Bids are binding, so only bid if you fully intend to purchase the car and you have performed<br/> the requisite due diligence, because you might end up as the high bidder and there are no refunds.<br/></li>
        <li>To ensure the bidding process is fair for everyone, bids placed within the final minute of the auction<br/> will reset the auction’s time remaining back to 1 minute – giving others the opportunity to bid.</li>
      </ul>
      <h4> className="btn btn-outline-success"5. Win the Auction</h4>
      <p>To buy a car on Cars & Bids, you must win the auction by ultimately being the highest bidder – and,<br/> if the auction has a “Reserve,” by placing a bid that meets or exceeds the seller’s hidden “Reserve” price. If the auction has “No Reserve,” <br/>then the highest bidder wins it regardless of the amount they bid.</p>
      <p>After the auction closes, we’ll provide you with a step-by-step checklist to complete your purchase.<br/> You’ll also receive the seller’s contact information (and visa-versa) in order to finalize the details and logistics of the transaction.<br/><strong> Buyers are expected to pay for the vehicle in-full within a week of the auction closing<br/></strong><a title="Finalizing the Sale " href="/what-is/?section=finalizin-sale"> Learn more about Finalizing the Sale </a>. </p>
      <h1 className='line'>____</h1>
<h3 id="section-selling-a-car" className="btn btn-outline-success"> Selling a Car </h3>

<p>Cars & Bids is the best place to sell your modern enthusiast car – and we’ve made the process easy.</p>
<h4 className="btn btn-outline-success"> 1.Submit Your Car</h4>
<p> It's free to < a title ="Submit your car" href="/sell-car/submit/"> submit your car<br/></a>
We simply ask you for a few details – including the VIN, some photos, and a brief description of the car.<br/> You can also choose whether you want to set a reserve price, or if you want your vehicle to be sold with no reserve.<br/> A reserve price is a minimum value you’ll accept in order to sell your car – <br/>and while a reserve auction may seem like an appealing choice, we’ve found that vehicles offered <br/>with no reserve get more bids, more interest, and more attention.</p>
<p>If you choose a reserve auction, we’ll ask you to suggest a reserve price – but, <br/>based on market conditions, we may ask for a lower one before accepting your car. Keep in mind that all of our auctions start from $0,<br/> regardless of whether or not they have a reserve.</p>
<p>Our experienced auction team will review your submission and may ask you some follow-up questions.<br/> We will do our best to give you an answer within a business day. <br/>Not every car is right for Cars & Bids, but we always appreciate you taking the time to submit your car to us!</p>
<h4 className="btn btn-outline-success">2. Prepare Your Listing</h4>
<p>Once your submission is accepted, we’ll need some additional information from you – like detailed photos, <br/>service and ownership history, etc. Don’t worry – we’re here to help you throughout the process!</p>
<ul>
<li>Before you can sell on Cars & Bids, your car must not be listed for sale elsewhere – <br/>meaning you’ll have to remove any other advertisement for your car and you cannot<br/> accept offers outside of the auction.</li>
<li>Take excellent photos of your car to get top dollar –<br/>< a title ="Professional photography" href="/photos/">  hire a professional photographer</a> or<br/> < a title ="Photography guide" href="/photos/?to=guide">  review our photo guide</a><br/>before snapping your own pics.</li>
<li>Filming a quick video walk-around and cold-start are strongly recommended – <br/>just shoot them on your phone in landscape mode and upload to YouTube or Vimeo.</li>
<li>Review the process for transferring vehicle titles in your state – and, <br/>if you have a loan on the vehicle, review the process and timeline for paying it off with your lender.</li>
<li>Get ready for a thrilling 7-day auction and be prepared to engage with<br/> the community and answer questions as they arise.</li>
</ul>
<h4 className="btn btn-outline-success">3. Finalize Your Auction</h4>
<p>Once you’ve provided us with all of the necessary information and photos,<br/> we’ll create a draft of your listing for you to approve. Once you’ve reviewed and approved it,<br/> we’ll work with you to schedule your auction, and it will go live shortly thereafter!</p>
<h4 className="btn btn-outline-success"> 4. Participate in the Auction</h4>
<ul>
<li>Timely and positive seller participation in the auction – responding to comments and questions,<br/> providing additional pictures or videos as needed, etc – is crucial to a successful auction.<br/> Good seller participation will result in additional interest, more bids, and a higher final sale price.</li>
<li>Interested bidders may contact you directly via email using the “Contact Seller” feature, <br/>allowing them to schedule test drives, pre-purchase inspections (at their cost), <br/>and ask additional questions.</li>
<li>Enjoy the final minutes – many of our auctions end with thrilling bidding wars, so get ready!</li>
</ul>
<h4 className="btn btn-outline-success">5. Auction End </h4>
<p>After the auction closes, we’ll provide you with a step-by-step checklist to complete your sale.<br/> You’ll also receive the buyer’s contact information (and visa-versa) <br/>in order to finalize the details and logistics of the transaction. </p>
<p>If your auction had a reserve and it was not met, we’ll reach out to you and the highest<br/> bidder to see if we can help make a deal!</p>
<h1 className='line'>____</h1>
<h3 id="section-finalizing-sale"className="btn btn-outline-success">Finalizing the Sale </h3>

<p>Once a car is sold on Cars & Bids, we connect the buyer and seller so they can complete<br/> the vehicle sale directly – and provide them with a custom checklist to ensure a smooth transaction. <br/>Here are our recommendations and tips for a successful post-auction sale – and remember, we’re here to help!</p>
<h4 className="btn btn-outline-success">1. Make Contact</h4>
<ul>
<li>Reach out to the other party to introduce yourself as soon as the auction ends,<br/> and remember to stay polite and positive to ensure the process goes smoothly.</li>
<li>We recommend that the seller provides proof of ownership to the buyer – <br/>usually, that’s a photocopy or picture of the title and registration.</li>

</ul>
<h4 className="btn btn-outline-success">2. Payment & Documentation</h4>
<ul>
<li><strong>Buyers are expected to pay for the vehicle in-full within a week of the auction closing.<br/></strong></li>
<li>If there’s an outstanding loan on the vehicle, the buyer and seller should discuss<br/> how it will be paid off and the specific next steps, so that the buyer can complete the transaction safely.<ul>
<li>If the seller has funds to pay it off, they should do so as soon as possible, <br/>and provide proof from the lender that it has been paid off.</li>
<li>If the seller does not have the funds, the buyer may be able to pay the outstanding amount <br/>owed directly to the lender and then pay the remainder of the purchase price to the seller.</li>
</ul>
</li>
<li>An accurate Bill of Sale should be created, including the terms of the transaction, <br/>to be signed by both parties; we recommend checking with your state DMV for Bill of Sale templates and requirements.</li>
<li>We recommend wire transfers or cashier’s checks for payment, but there are many possible options –<br/> including meeting at the buyer’s/seller’s bank to draft up a cashier's check, withdrawing the funds directly,<br/> or completing an electronic money transfer.</li>
<li>Arrange for the car to be picked up and finalize the transaction. If the buyer plans to ship the vehicle,<br/> they can book shipping directly through the winner’s page . The vehicle and title should only be released once the seller <br/>has the full payment in hand. If the transaction is happening remotely, the seller should mail the signed-over <br/>title to the buyer via courier service with a tracking number once payment is in hand.</li>
</ul>
<h4 className="btn btn-outline-success">3. Share your Success Story</h4>
<p>Email the HetSoumek team a photo of the handoff to share your success story – we’d love to hear about it!</p>
</div>
            </div>
          </div>
        </div>

      </div>
      <div  id="autos-reviews">
<div className="container-fluid">
  <div className="review-wrap">
    <div className="section why">
    <h1 className='line'>____</h1>
      <h4 className="btn btn-outline-success"> Why HetSoumek </h4>
     
      <ul className='whyy'>
        <li>
          <strong>
            <span>10,000+</span>
          </strong>
          <br/>
          <span>Auctions completed</span>
        </li>
        <li>
          <strong> 2,000,000dt+</strong>
        
        <br/>
        <span> Value of cars Sold</span>
        </li>
        <li>
          <strong>
            <span>85%+</span>
          </strong>
          <br/>
          <span>Sell-throught rate </span>
        </li>
        <li>
          <strong>
            <span>305k+</span>
          </strong>
          <br/>
          Registered members
        </li>
      </ul>
    </div>
    <div className="section stories"> 
    <h6 className="btn btn-outline-success"> Our customers love Us</h6>
    <div className="review">
      <span className="heading">
       <span className="stars"></span>
       <span className="user"> Mehdi jaouedi</span>
       <span className="date "> FEB 2023</span>
       </span>
       <span className="blurb"> The only way to sell your car . Ihave sold many cars over my life and this was the best by far . </span>

    </div>
      </div>
  </div>
</div>
</div>
  


    </div>
       
   
  );
}

export default WhatIs;