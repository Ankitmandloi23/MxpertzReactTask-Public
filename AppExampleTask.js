import React from 'react'
import './index.css';
import fruitImage from './Gif.gif';


const AppExampleTask=()=>{
return(<div>
<Title />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<Navbars />
<TopContainComponent/>
<MiddleContainComponent/>
<ViewItemComponent/>
<ItemPriceComponent/>
<RatingComponent/>
<NewsAndEvenetsComponent/>
<ContactComponent/>
</div>);
}

const ContactComponent=()=>{

const checkContactUs=()=>{
alert("checkContactUsButton");
}
return(
<div className="ContactComponent-container">

<div className="ContactContanier-formcss">
<center>
<h5>Drop Us a Line</h5>
<h6>Don't be Shy! Please contact<br/> if you have any queries...</h6>
<button type='button' onClick={checkContactUs} className="colored-button">CONTACT US</button>

<h3>Our NewsLetter</h3>
<h6>Dieloage is an essential part of any script</h6>
<input type="text" placeholder="First Name"/><br/><br/>
<input type="text" placeholder="Last Name"/><br/><br/>
<input type="text" placeholder="Email"/><br/><br/>
<button type='button' onClick={checkContactUs} className="colored-button">CONTACT US</button>
</center>
</div>

<div className="ReservationContanier-formcss">
<center>
<h5>Hours of Operation</h5>
<h6>MON-FRI</h6>
<h6>10:00am - 1:00pm</h6>
<h6>4:00pm - 4:30pm</h6>
<hr></hr>
<h6>SAT</h6>
<h6>3:00pm - 10:30pm</h6>
<hr></hr>
<h6>SUN</h6>
<h6>We are Closed</h6>
<button type='button' onClick={checkContactUs} className="colored-button">MAKE A RESERVATION</button>
</center>
</div>


</div>
);
}



const NewsAndEvenetsComponent=()=>{
const checkReadMore=()=>{
alert("checkReadMoreButton");
}

return(
<div className="NewsAndEvenetsComponent-container">
<center>
<h6 className="colored-textRating">DON'T MISS</h6>
<h1>Our News And Events</h1>
<h6 className="colored-textRating">Selling food is not merely a transaction; it is an art form that combines the sensory delights of taste, aroma, and presentation <br/>
with the scientific precision of culinary expertise and market dynamics.<br/> 
 and traditions.</h6>

<div className="NewsAndEventsRateOne">
<img src="D:/react/tmone/src/Gif.gif" />
<h5>Demo Word for Pic</h5>
<h6 className="coloredRating">CATEGORY</h6>
<h6>Selling food is deeply intertwined<br/> with cultural practices and traditions.<br/> Different cuisines carry the stories of their<br/> origins, 
reflecting the history, values, and <br/>customs of a particular
 community. As we indulge  <br/>in diverseculinary experiences, we not only <br/>savor flavors but also engage in a </h6>
</div>


<div className="NewsAndEventsRateTwo">
<img src="D:/react/tmone/src/Gif.gif" />
<h5>Demo Word for Pic</h5>
<h6 className="coloredRating">CATEGORY</h6>
<h6>Selling food is deeply intertwined<br/> with cultural practices and traditions.<br/> Different cuisines carry the stories of their<br/> origins, 
reflecting the history, values, and <br/>customs of a particular
community. As we indulge  <br/>in diverseculinary experiences, we not only <br/>savor flavors but also engage in a </h6>
</div>

<button type='button' onClick={checkReadMore} className="colored-button">READ MORE</button>

</center>
</div>
);
}





const RatingComponent=()=>{
return(
<div>
<center>
<h6 className="colored-textRating">TESTIMONIAL</h6>
<h1>What People are Saying</h1>

<div className="ratingTextDivOne">
<h3 className="coloredRating">&#9733;&#9733;&#9733;&#9733;&#9733;</h3>
<h4>"A Great Find"</h4>
<h6 className="colored-textRating">Immerse yourself<br/> 
in the world of text<br/> rating as readers share<br/> their thoughts and experiences,<br/>
guiding others through the literary <br/>landscape with star-studded opinions.</h6>
<h5>Diwi</h5>
</div>

<div className="ratingTextDivTwo">
<h3 className="coloredRating">&#9733;&#9733;&#9733;&#9733;&#9733;</h3>
<h4>"A Great Find"</h4>
<h6 className="colored-textRating">Immerse yourself<br/> 
in the world of text<br/> rating as readers share<br/> their thoughts and experiences,<br/>
guiding others through the literary <br/>landscape with star-studded opinions.</h6>
<h5>Bloom</h5>
</div>

<div className="ratingTextDivThree">
<h3 className="coloredRating">&#9733;&#9733;&#9733;&#9733;&#9733;</h3>
<h4>"A Great Find"</h4>
<h6 className="colored-textRating">Immerse yourself<br/> 
in the world of text<br/> rating as readers share<br/> their thoughts and experiences,<br/>
guiding others through the literary <br/>landscape with star-studded opinions.</h6>
<h5>Extra</h5>
</div>

</center>
</div>
);
}



const ItemPriceComponent=()=>{
return(
<div>
ItemPriceComponent=InProgress</div>
);
}

const ViewItemComponent=()=>{

const checkViewItems=()=>{
alert("checkViewItems");
}

return(
<div className="ViewItemComponent-container">
<center className="ViewItemComponentText-container">
<h6>ONLY THE BEST</h6>
<h2>Fresh Ingredient, Tasty Meals</h2>
<h5>The rise of online platforms, food delivery services,<br/> and innovative marketing strategies have transformed the way we access and <br/>
purchase food. The market dynamics include<br/> 
considerations of supply chains, consumer preferences, and the ever-evolving trends that shape the culinary landscape</h5>
<button type='button'onClick={checkViewItems}  className="colored-button">VIEW ITEMS</button></center>
</div>
);
}










const MiddleContainComponent=()=>{
return(
<div className="middle-container">
      <div className="text-container">
      <h5>Our Story</h5>
       <h1>Welcome To Royal</h1>
        <h6>Selling food is not merely a transaction; it is an art form that<br/> combines the sensory delights of taste, aroma, and presentation <br/>
with the scientific precision of culinary expertise and market dynamics.<br/> 
As societies evolve, so does the way we sell and consume food. This essay<br/>
 explores the intricate world of selling food, examining the elements<br/>
 that the kitchen.Selling food is deeply intertwined with cultural practices<br/>
 and traditions. Different cuisines carry the stories of their origins, reflecting <br/>
the history, values, and customs of a particular community. As we indulge in <br/>
diverse culinary experiences, we not only savor flavors but also engage in a <br/>
cultural exchange that transcends geographical boundaries. In the<br/>
 contemporary world, selling food extends beyond the realms of traditional<br/>
markets. The rise of online platforms, food delivery services, and innovative<br/>
marketing strategies have transformed the way we access and purchase food. <br/>
The market dynamics include considerations of supply chains, consumer <br/>
preferences, and the ever-evolving trends that shape the culinary landscape.<br/>
The modern consumer is increasingly conscious of health and wellness,<br/>
influencing the way food is sold. There is a growing demand for organic,<br/>
sustainable, and health-conscious options.and traditions. Different cuisines <br/>
carry the stories of their origins, reflecting the history, values, and customs<br/> of a particular community. As we indulge in <br/>
diverse culinary experiences, we not only savor flavors but also engage in a <br/>
cultural exchange that transcends geographical boundaries. In the<br/>
 contemporary world, selling food extends beyond the realms of traditional<br/>
markets. The rise of online platforms, food delivery services, and innovative<br/>
marketing strategies have transformed the way we access and purchase food. <br/>
The market dynamics include considerations of supply chains, consumer <br/>
preferences, and the ever-evolving trends that shape the culinary landscape.<br/>
The modern consumer is increasingly conscious of health and wellness,<br/>
influencing the way food is sold. There is a growing demand for organic,<br/>
sustainable, and health-conscious options.
</h6>
  </div>
      <div className="image-container">
        <img src="fruitImage" alt="Food Image" />
      </div>
    </div>
);
}




const TopContainComponent=()=>{

const checkViewButton=()=>{
alert("checkViewButton");
}
const checkReservationButton=()=>{
alert("checkReservationButton");
}

return(
<div className="my-Topcomponent">
<center>
<h1>Only Quality Food</h1><br/>
<h5>Certainly Here's a sentence you can use to describe selling 
in a culinary journey as we proudly <br/>present a delectable selection of 
dishes crafted with passion and expertise</h5><br/> 
<button type='button' onClick={checkViewButton} className="colored-button">VIEW MENU</button>&nbsp;&nbsp;
<button type='button'onClick={checkReservationButton} className="colored-button">RESERVATION</button>
</center>
</div>
);
}




const Title=()=>{
return(
<div>Restaurent Lending Page</div>
);
}


const Navbars = () => {
  return (
     <nav>
      <ul>
        <li><>Home</></li>
        <li><>Gallery</></li>
        <li><>Shop</></li>
        <li><>Blog</></li>
        <li><>About</></li>
        <li><>Team</></li>
        <li><>Contact</></li>
      </ul>
    </nav>
  );
};





export default AppExampleTask;