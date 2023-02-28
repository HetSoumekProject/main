/* eslint-disable jsx-a11y/role-has-required-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './WhatIs.css';

function WhatIs() {
  return (
       <div id=" autos-nav" className="lo  navbar navbar-expand-md navbar-light fixed top">
        <div className="container-fluid">
          <a  aria-current="page" className="navbar-brand active" href="/">
            <span className="sr-only"> HetSoumek</span>
          </a>
          <a className="btn btn-primary btn-lg btn-signin " href="/signup/">
            Sign Up
          </a>
          <button type="button" className="navbar-toggler closed">
            <span className="navbar-toggler-icon">
              <span className="dr-only"> Nav
              </span>
            </span>
            <span className="x-icon">
              <span className="sr-only"> Close </span>
            </span>
          </button>
          <div className="collapse navbar-collapse">
            <div className="d-flex flex column flex-md-row flex-grow-1">
              <ul className="navbar-nav">
                <li className="nav-item Auctions profile-item dropdown nav-item">
                  <a aria-haspopup="true" href='#' className='auction-toggle nav-link' aria-expanded='false'> Auctions
                  </a>
                  <ul tabIndex='-1' role='menu' aria-hidden='true' className='dropdownmenu'>
                    <li tabIndex='0' role='menuitem' className='dropdown-item'>
                      <a className='nav-link' title='Past Results' href='/past-auctions/' >Past Results</a>
                    </li>
                  </ul>
                </li>
             
                  <a className='nav-link' href='/sell-car/' title='Sell a Car'>Sell a Car</a>
               
                
                  <a className='nav-link active' title='What is HetSoumek ?' href='/what-is/' aria-current='page'> what's HetSoumek ?</a>
                
                    </ul>
                    <form method='post' className='search-form form-inline' autoComplete='off' noValidate>
                      <fieldset className='form-group' >
                        <div role='combobox' aria-haspopup='listbox' aria-owns='react-autowhatever-1' aria-expanded='false' className='react-autosuggest__container'>
                          <input 
                           type='text' 
                           autoComplete='on'
                            aria-autocomplete='list'
                             aria-controls='react-autowhatever-1' 
                             className='form-control' 
                             placeholder='Search for cars (ex.BMW, Audi,Ford)'
                             name='search'
                        />
                        <div id ="react-autowhatever-1" role="listbox" className='react-autosuggest__suggestions-container'>

                        </div>
                        </div>
                      </fieldset>
                    </form>
            </div>
          </div>
          <div className='header-border'></div>
        </div>
        <div id="root">
      
    
      <div className=" page container-fluid static what-is">
        <div className="row ">
          <div>
        <nav className ="static-sidebar">
      <ul>
        <li>
          <a title="About Us " href ="#section-about-us">
            About us
          </a>
        </li>
        <li className="sub-nav">
          <span className="nav-sec">How it works</span>
          <ul>
            <li>
              <a title="buying a car "href="#section-buying-a-car"> Buying  a car  </a>
            </li>
            <li>
            <a title="Selling a car "href="#section-selling-a-car"> Selling a car  </a>
            </li>
            <li>
            <a title="Finalization the Sale  "href="#section-finalizing-sale"> Finalization the Sale </a>
            </li>
          </ul>
        </li>
        <li className="sub-nav">
          <span className="nav-sec">FAQ</span>
          <ul>
            <li>
            <a title="Buyer FAQ "href="#section-buyers"> Buyer FAQ </a>
            </li>
            <li>
            <a title="Seller FAQ "href="#section-sellers"> Seller FAQ </a>
            </li>
            <li>
            <a title="Shipping FAQ "href="#section-shippings"> Shipping FAQ </a>
            </li>
            <li>
            <a title="Sign in FAQ "href="#section-sign-in-"> Sign in FAQ </a>
            </li>
          </ul>
        </li>
      </ul>
      </nav>
      </div>
      <div className="details-page">
      <div className="col">
      <h1>What's HetSoumek?
      </h1>
      <div className="facts">
        <div className="fact">
          <h3>Cool Car Auctions</h3>
          <p>
            Auction your modern enthusiast car — <br/>anything cool and exciting from the 1980s to the 2023s.
          </p>
        </div>
        <div className="fact">
          <h3> Low Fees</h3>
          <p>Buyers pay a 4.5% commission, capped at $4,500.<br/> Sellers list for free and receive 100% of the sale price.</p>
        </div>
        <div className="fact">
          <h3> More Information </h3>
          <p>We provide vehicle history reports for every<br/> vehicle listed on HetSoumek — for free.</p>
        </div>
        <div className="fact">
          <h3> Easy to Use </h3>
          <p>We’ve developed several new features that <br/>innovate buying and selling enthusiast cars online.</p>
        </div>
        <div className="doug-quote d-flex">
          <h3> Doug & Bids :</h3>
          <p><br/>Car reviewer Doug DeMuro brings a huge audience <br/>to HetSoumek 
      — along with his commentary.</p>
        </div>
      </div>
      <div className="section">
        <h2 id="section-about-us"> About Us</h2>
        <p>Over the last few years, many car enthusiasts have started turning their attention to recent <br/>vehicles – cars from the 1980s, 1990s, and beyond. RBK STUDENT realized there isn’t yet a specific<br/> place that’s focused solely on buying and selling these modern enthusiast cars,<br/> but there should be – so he and a team created HetSoumek,<br/> with its simple name modeled after Doug’s famous pursuit of “quirks and features.”</p>
      <p>HetSoumek is the best online auction marketplace to buy and sell modern enthusiast cars – <br/>and that means pretty much anything that’s cool from the 1980s, 1990s, 2000s, 2010s, or 2020s. <br/>To us, “cool” ranges from the obvious (a Ferrari F355 or a Lamborghini Gallardo) to the esoteric<br/> (a pristine Dodge Dakota Convertible or a Mercury Capri XR2) to the traditional fun cars that enthusiasts love <br/>(a Mazda MX-5 Miata or a Porsche 911). Basically everything that’s exciting, fun, <br/>interesting, or quirky is welcome here – as long as it comes from the modern era.</p>
      <p>Although there are many places to buy and sell a special car, HetSoumek offers <br/>significant advantages over other websites.<strong> Here are just a few of our benefits:<br/></strong> </p>
      <ul>
      <li>
      <strong>We’re focused on modern enthusiast cars: <br/></strong> 
      the 1980s to the 2020s. That means anyone interested in the next era of exciting cars will<br/> come here first to buy and sell.
      </li>
      <li>
      <strong>Our fees are low. </strong>
      Sellers list for free, and the buyer's fee is just 4.5%,<br/>
       with a minimum of $225 and a maximum of $4,500 — far below other auction houses and enthusiast car auction websites.
      </li>
      <li>
      <strong>We believe that every vehicle should come with a vehicle history report<br/></strong>
      – so we provide one, for free, instead of asking sellers to pay for their own. </li>
      <li>
      <strong>Doug DeMuro will bring extra eyes – and extra buyers – to your cars,<br/></strong>
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
      <h2 id ="section-how-it-works">How It Works</h2>
      <h3 id ="section-buying-a-car"> Buying a Car</h3>
      <p>Once you’ve found a car you’re interested in,<br/>
         here are the steps you should take to bid confidently and, 
         with any luck, win the auction!<br/></p>
         <h4>1. Register to Bid</h4>
         <p>To contact the seller directly and place bids,<br/>
           you must first Register to Bid  with a valid credit card and phone number.<br/>
            Winning bidders pay HetSoumek a 4.5% buyer’s fee on top of <br/>
            the winning bid amount (minimum of $225, maximum of $4,500).</p>
            <h4>2. Perform Due Diligence </h4>
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
               <h4>3. Arrange Financing and Logistics</h4>
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
              <h4>4.Bid</h4>
              <p>We’ve made bidding easy</p>
              <ul>
                <li>
                When you bid, we place a hold on your credit card for the buyer's fee – if you win, <br/>your card will be charged and you will pay the seller directly for the vehicle, otherwise, <br/>the hold will be released at the auction’s end.
                </li>
                <li>Bids are binding, so only bid if you fully intend to purchase the car and you have performed<br/> the requisite due diligence, because you might end up as the high bidder and there are no refunds.<br/></li>
                <li>To ensure the bidding process is fair for everyone, bids placed within the final minute of the auction<br/> will reset the auction’s time remaining back to 1 minute – giving others the opportunity to bid.</li>
              </ul>
              <h4>5. Win the Auction</h4>
              <p>To buy a car on Cars & Bids, you must win the auction by ultimately being the highest bidder – and,<br/> if the auction has a “Reserve,” by placing a bid that meets or exceeds the seller’s hidden “Reserve” price. If the auction has “No Reserve,” <br/>then the highest bidder wins it regardless of the amount they bid.</p>
              <p>After the auction closes, we’ll provide you with a step-by-step checklist to complete your purchase.<br/> You’ll also receive the seller’s contact information (and visa-versa) in order to finalize the details and logistics of the transaction.<br/><strong> Buyers are expected to pay for the vehicle in-full within a week of the auction closing<br/></strong><a title="Finalizing the Sale " href="/what-is/?section=finalizin-sale"> Learn more about Finalizing the Sale </a>. </p>
      <h3 id="section-selling-a-car"> Selling a Car </h3>
      <p>Cars & Bids is the best place to sell your modern enthusiast car – and we’ve made the process easy.</p>
      <h4> 1.Submit Your Car</h4>
      <p> It's free to < a title ="Submit your car" href="/sell-car/submit/"> submit your car<br/></a>
      We simply ask you for a few details – including the VIN, some photos, and a brief description of the car.<br/> You can also choose whether you want to set a reserve price, or if you want your vehicle to be sold with no reserve.<br/> A reserve price is a minimum value you’ll accept in order to sell your car – <br/>and while a reserve auction may seem like an appealing choice, we’ve found that vehicles offered <br/>with no reserve get more bids, more interest, and more attention.</p>
      <p>If you choose a reserve auction, we’ll ask you to suggest a reserve price – but, <br/>based on market conditions, we may ask for a lower one before accepting your car. Keep in mind that all of our auctions start from $0,<br/> regardless of whether or not they have a reserve.</p>
      <p>Our experienced auction team will review your submission and may ask you some follow-up questions.<br/> We will do our best to give you an answer within a business day. <br/>Not every car is right for Cars & Bids, but we always appreciate you taking the time to submit your car to us!</p>
      <h4>2. Prepare Your Listing</h4>
      <p>Once your submission is accepted, we’ll need some additional information from you – like detailed photos, <br/>service and ownership history, etc. Don’t worry – we’re here to help you throughout the process!</p>
      <ul>
      <li>Before you can sell on Cars & Bids, your car must not be listed for sale elsewhere – <br/>meaning you’ll have to remove any other advertisement for your car and you cannot<br/> accept offers outside of the auction.</li>
      <li>Take excellent photos of your car to get top dollar –<br/>< a title ="Professional photography" href="/photos/">  hire a professional photographer</a> or<br/> < a title ="Photography guide" href="/photos/?to=guide">  review our photo guide</a><br/>before snapping your own pics.</li>
      <li>Filming a quick video walk-around and cold-start are strongly recommended – <br/>just shoot them on your phone in landscape mode and upload to YouTube or Vimeo.</li>
      <li>Review the process for transferring vehicle titles in your state – and, <br/>if you have a loan on the vehicle, review the process and timeline for paying it off with your lender.</li>
      <li>Get ready for a thrilling 7-day auction and be prepared to engage with<br/> the community and answer questions as they arise.</li>
      </ul>
      <h4>3. Finalize Your Auction</h4>
      <p>Once you’ve provided us with all of the necessary information and photos,<br/> we’ll create a draft of your listing for you to approve. Once you’ve reviewed and approved it,<br/> we’ll work with you to schedule your auction, and it will go live shortly thereafter!</p>
      <h4> 4. Participate in the Auction</h4>
      <ul>
      <li>Timely and positive seller participation in the auction – responding to comments and questions,<br/> providing additional pictures or videos as needed, etc – is crucial to a successful auction.<br/> Good seller participation will result in additional interest, more bids, and a higher final sale price.</li>
      <li>Interested bidders may contact you directly via email using the “Contact Seller” feature, <br/>allowing them to schedule test drives, pre-purchase inspections (at their cost), <br/>and ask additional questions.</li>
      <li>Enjoy the final minutes – many of our auctions end with thrilling bidding wars, so get ready!</li>
      </ul>
      <h4>5. Auction End </h4>
      <p>After the auction closes, we’ll provide you with a step-by-step checklist to complete your sale.<br/> You’ll also receive the buyer’s contact information (and visa-versa) <br/>in order to finalize the details and logistics of the transaction. </p>
      <p>If your auction had a reserve and it was not met, we’ll reach out to you and the highest<br/> bidder to see if we can help make a deal!</p>
      <h3 id="section-finalizing-sale">Finalizing the Sale </h3>
      <p>Once a car is sold on Cars & Bids, we connect the buyer and seller so they can complete<br/> the vehicle sale directly – and provide them with a custom checklist to ensure a smooth transaction. <br/>Here are our recommendations and tips for a successful post-auction sale – and remember, we’re here to help!</p>
      <h4>1. Make Contact</h4>
      <ul>
      <li>Reach out to the other party to introduce yourself as soon as the auction ends,<br/> and remember to stay polite and positive to ensure the process goes smoothly.</li>
      <li>We recommend that the seller provides proof of ownership to the buyer – <br/>usually, that’s a photocopy or picture of the title and registration.</li>
      
      </ul>
      <h4>2. Payment & Documentation</h4>
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
      <h4>3. Share your Success Story</h4>
      <p>Email the HetSoumek team a photo of the handoff to share your success story – we’d love to hear about it!</p>
      </div>
      <div className="section faqs">
      <h2 id=" section-faqs"> Frequently Asked Questions</h2>
      <h3 id ="section-buyers"> Buyer Questions</h3>
      <ul>
        <li className  ="faq-buyer-fees">
          <h4>
          What are the fees for the buyer on HetSoumek?
          </h4>
          <div className="faq">
            <p>
            In addition to the final purchase price paid to the seller, <br/>buyers pay a 4.5% buyer’s fee to Cars & Bids. The buyer’s fee has a minimum of $225, and a maximum of $4,500.
            </p>
          </div>
        </li>
        <li className="faq-buyer-reg">
          <h4>
            How do i register to bid?
          </h4>
          <div className="faq">
            <p>
            In order to register, first sign up by clicking the “Sign In” icon in the upper right corner of the screen – then click “Sign up here” in the box that subsequently pops up. Once you create a username and password, you’ll be prompted to verify your email address. After you’ve done that, you can return to Cars & Bids and you’ll be prompted to register to bid. 
            </p>
            <p>
            If you don’t want to register just yet, no problem – you can do it later. Once you find a car you want to bid on, click “Place Bid” on the car’s listing page, and you’ll be prompted to register before you can bid. You will have to enter your credit information, as we place a hold on each bidder’s credit card until the conclusion of the auction.
            </p>
          </div>
        </li>
        <li className="faq-buyer-bid">
          <h4> How do i place a bid ?</h4>
          <div className="faq">
            <p>
            In order to place a bid, you first have to register, which we’ve explained above. Once you’ve registered and you’ve found a car you’re interested in buying, bidding is easy – just click the “Place Bid” icon on a vehicle’s listing page. Then, you’re prompted to enter your bid amount.
            </p>
            <p>Your bid must be higher than the previous bid, of course – and depending on the current bidding level, there may be a minimum increase over the previous bid. Once you’ve submitted your bid, we place a hold on your credit card for 4.5% of your bid amount until the duration of the auction, in case you end up as the winning bidder.</p>
          </div>
        </li>
        <li className=" faq-buyer-bid-increments">
          <h4>
            how do bid increment work?
          </h4>
          <div className="faq">
            <p> Bid increment increase as follows:</p>
            <ul>
              <li>
                <strong> Minimum : </strong>
                bid of 100dt to start the auction
              </li>
              <li>
                <strong> 100dt : </strong>
                increments up to 14.999dt
              </li>
              <li>
                <strong> 250dt : </strong>
                increment from 15dt to 49.999dt
              </li>
              <li>
                <strong> 500dt : </strong>
                increment at or above 50dt
              </li>
            </ul>
          </div>
        </li>
       <li className="faq-buyer-currency">
        <h4>
          What currency does HetSoumek use ?
        </h4>
        <div className="faq">
          <p>All bids on Cars & Bids are in United States Dollars (USD), including on vehicles located in Canada.</p>
        </div>
       </li>
       <li className="faq-buyer-live-outside">
        <h4>
        Can I bid if I live outside of Tunisia ?
        </h4>
        <div className="faq">
          <p>
          Yes, however you will need to pay in full for the vehicle promptly following the close of the auction, just like all other buyers. Additionally, any logistics, import fees, transportation, legal dues, and/or other items needed to export/import the vehicle are entirely the buyer’s responsibility. Please ensure you’re aware of all these rules and you have everything fully in place prior to bidding. The close of the auction is not the time to begin researching transportation logistics and import regulations.
          </p>
        </div>
       </li>
      <li className="faq-buyer-contact-seller">
        <h4>
          How do i contact the seller provately?
        </h4>
        <div className="faq">
          <p>
          You can contact the seller privately when  you win the auction we will open a chat room between you and the seller 
          </p>
        </div>
      </li>
      <li className="faq-buyer-proxy-bidding">
        <h4>
          Is there proxy bidding? 
        </h4>
        <div className="faq">
          <p>
          No. If you are outbid, you will need to manually input your next bid. Note that the price of the vehicle will immediately progress to your bid amount. For example, if the current high-bid is 30,000dt and you input a 35,000dtbid, the current high bid will immediately go to 35,000dt
          </p>
        </div>
      </li>
      <li className="faq-buyer-hold ">
        <h4>
          Why do you place a hold on my credit card when i bid ?
        </h4>
        <div className="faq">
          <p>We place a hold on your credit card when you bid in order to account for the possibility that you may have to pay the buyer’s fee, should you end up as the winning bidder. The hold is for 4.5% of your initial bid amount, with a minimum of 225dt and a maximum of 4,500dt. If you aren’t the winning bidder, the hold is released from your credit card at the conclusion of the auction.</p>
        </div>
      </li>
      <li className="faq-buyer-hold-after">
        <h4> I didn't win the auction , why do i still have a hold from HetSoumek?</h4>
      <div className="faq"> 
      <p>We cancel holds for non-winning bidders immediately upon the conclusion of the auction. Depending on your bank, it may take a few days - or up to 7 business days, in rare cases - for the hold to appear removed; please contact your card issuer directly with any questions about the timeline and process.
         </p>
      </div>
      </li>
      <li className=" faq-buyer-reserve-price">
      <h4>
      What’s the reserve price of the car I want to buy?
      </h4>
      <div className="faq">
        <p>
        If a listing doesn’t have a reserve, you’ll see a “No Reserve” tag along with a “No Reserve” text near the bidding box. If you don’t see this text, that auction has a reserve price. Reserve prices are not published, and we ask that buyers refrain from asking sellers about reserve pricing during the auction. The only time you’ll know if the reserve is met is if the car sells at auction close.
        </p>
      </div>
      </li>
      <li className="faq-buyer-reserve ">
        <h4>
          What if the reserve isn't met ?
        </h4>
      <div className="faq ">
        <p>If you’re the high bidder on a car where the reserve isn’t met, we’ll work with the seller and the buyer in an attempt to find a sale price that’s suitable for both parties. If we’re able to reach an agreement, we’ll put the buyer and seller in contact – and our fee drops to 2.5%.
      
      </p>
      </div>
      </li>
      <li className=" faq-buyer-complete ">
        <h4>
          Once the auction is over , gow do i complete the transaction?
        </h4>
      <div className="faq"> 
      <p>At the conclusion of the auction, both the buyer and seller are given each other’s contact information to complete the transaction. Read more about Finalizing the Transaction.
        </p>
        </div>
      </li>
      <li className="faq-buyer-arrange-financing">
        <h4>
          How do i arrange financing?
        </h4>
        <div className="faq">
          <p>We've teamed up with LightStream to offer seamless and quick financing options. With low rates, funding available as soon as the same day**, funds deposited directly to your account, and excellent customer service, a LightStream loan makes buying a car through HetSoumek even easier.
            </p>
            <p>Check out the loan options - and apply - directly from each auction. Have questions? Click here to learn more. We may be compensated through links on this site.</p>
            <p>
            If you'd like to explore other financing options, keep in mind that the time to get approved for a loan is prior to bidding! The information provided in the listing is often sufficient for pre-approval for that specific vehicle, but if other information is required by your lender, please use the “Contact” button to reach out to the seller. 
            </p>
             </div>
      </li>
      <li className="faq-buyer-pick-up">
        <h4>
          How do i pick up the vehicle ?
        </h4>
        <div className="faq ">
          
      <p>
      Transportation costs are always the buyer’s responsibility, so we recommend gathering personal travel and/or shipping cost estimates before bidding. There are many options for how to collect your new vehicle, such as booking a one-way flight and driving home, or going with a trailer to pick up the car. However, we always suggest shipping as an easy and often more affordable option.
      </p>
      <p>
      You can get instant shipping quotes directly in the auction for most vehicles, and winning bidders can often book shipping directly through HetSoumek Shipping.
      </p>
      <p>
      Please be sure to verify that a general timeline would work for the seller before bidding. Some sellers may be happy to store the car briefly to allow you time to pick it up, and may also be willing to bring the car to a nearby location for it to be loaded onto a shipping truck. Note that title transfers, paying off loans, etc. may take a little bit of time. When in doubt, contact the seller and make sure the timing works for them!
      
      
      </p>
       </div>
      </li>
      <li className="faq-buyer-pay-seller">
        <h4>
          How do I pay the seller safely ?
        </h4>
        <div className=" faq">
          <p>
          We recommend wire transfers or cashier’s checks for payment, but there are many possible options. We do recommend discussing the potential timeline with the seller as early as possible to ensure that you’re both comfortable with the timing and steps.
          </p>
          <p>
          Note that some states can take several weeks to reissue a title once the loan has been satisfied. Additionally, some states require titles to be notarized by the seller before it can be transferred to you, so pay attention to those rules – and reference state DMV websites – before sending important documents.
          </p>
        </div>
      </li>
      <li className="faq-buyer-comment-rules">
       <h4>
        Are there rules to follow in the comments?
       </h4>
       <div className="faq">
        <p>
        Yes! Aside from common-sense rules like language and personal attacks, the conversation should be focused on the vehicle being sold, so as to be fair to the seller and bidders. We want to ensure the HetSoumek community remains an open and positive place to spend time with fellow enthusiasts. A partial list of things that are frowned upon (and will be moderated accordingly) include:
        </p>
        <ul>
          <li>foul language</li>
          <li> personal attacks</li>
          <li> attempting to share your personal contact information </li>
          <li> spamming</li>
          <li> Asking the seller about their reserve</li>
          <li>Calling out the price you think the vehicle will sell for </li>
          <li> Inappropriate images or descriptions in your profile</li>
          <li> Plugging your personal business,website , social media handles,ect.</li>
          <li> Sidetracking the conversation about other vehicles or topics unrelated to the vehicle being offered</li>
          <li> Linking to inappropriate videos/webpages/content</li>
          <li> Linking to other vehicle for sale ads</li>
        </ul>
       </div>
      </li>
      <li className="faq-buyer-reputation-score ">
       <h4>
        What is a Reputation Score ?
       </h4>
       <div className="faq">
        <p>
        The Reputation Score is an aggregate score of positive interactions on the site. You earn it by other users upvoting your comments and bids – adding helpful and constructive comments will grow your Reputation Score. You can find a user’s Reputation Score in their profile, as well as next to their name when they comment and bid.
        </p>
       </div>
      </li>
      </ul>
      {/* i stopped here */}
      
      </div>
      </div>
      </div>
        </div>
      </div>
      <div  id="autos-reviews">
        <div className="container-fluid">
          <div className="review-wrap">
            <div className="section why">
              <h4> Why HetSoumek </h4>
              <ul>
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
            <h6> Our customers love Us</h6>
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
       </div>
       
   
  );
}

export default WhatIs;