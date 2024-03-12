// core version + navigation, pagination modules:

import Swiper from 'swiper';

// import Swiper and modules styles
import 'swiper/modules/navigation.min.css';
import 'swiper/modules/pagination.min.css';
import 'swiper/swiper.min.css';


// init Swiper:
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "vertical",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

let colorsArr=[


  
    {"number":"RAL 7024","value":"#474A50","name":"Graphite grey","hebName":"אפור"},
  {"number":"RAL 7045","value":"#91969A","name":"Telegrey 1","hebName":"אפור"},
   {"number":"RAL 6029","value":"#007243","name":"Mint green","hebName":"ירוק"},
    {"number":"RAL 7012","value":"#596163","name":"Basalt grey","hebName":"אפור"},
  {"number":"RAL 9006","value":"#A5A5A5","name":"White aluminum","hebName":"כסוף"},
  {"number":"RAL 9005","value":"#0A0A0A","name":"Jet black","hebName":"שחור"},
  {"number":"RAL 9003","value":"#ecece7","name":"Signal white","hebName":"לבן"},
  {"number":"RAL 9004","value":"#282828","name":"Signal black","hebName":"שחור"},
  {"number":"RAL 1011","value":"#AF8A54","name":"Brown beige","hebName":"עץ אלון"},
 {"number":"RAL 9007","value":"#8F8F8F","name":"Grey aluminum","hebName":"כסוף אפור"},
 {"number":"RAL 9010","value":"#FFFFFF","name":"Pure white","hebName":"לבן מבריק"},
 {"number":"RAL 9011","value":"#1C1C1C","name":"Graphite black","hebName":"שחור"},
 {"number":"RAL 9016","value":"#F6F6F6","name":"Traffic white","hebName":"לבן"},
 {"number":"RAL 1006","value":"#E1A100","name":"Maize yellow","hebName":"אלון כהה"}, 
  {"number":"RAL 3020","value":"#C1121C","name":"traffic red","hebName":"אדום"},

   {"number":"RAL 5002","hex":"#2B2C7C","name":"Ultramarine blue","hebName":"כחול"},

 {"number":"RAL 1013","hex":"#E9E5CE","name":"Oyster white","hebName":"ב'ז"},
{"number":"RAL 1003","hex":"#F7BA0B","name":"Signal yellow","hebName":"צהוב"},

] 


function Colors() {
  return (
// Slider main container

<div className="swiper">


  <div className="swiper-wrapper">
    {
  
    colorsArr.map((ele)=>{
      // eslint-disable-next-line react/jsx-key
      return   <div className="swiper-slide" >
        <h1>
          {ele.hebName}
        </h1>
        <h2>{ele.name}</h2>
        <p>{ele.number}</p>
        
         </div>
    })}

    <div className="swiper-slide">Slide 1</div>
    <div className="swiper-slide">Slide 2</div>
    <div className="swiper-slide">Slide 3</div>
    ...
  </div>



  <div className="swiper-pagination"></div>



  <div className="swiper-button-prev"></div>
  <div className="swiper-button-next"></div>

\
  <div className="swiper-scrollbar"></div>
</div>
  );
}

export default Colors;