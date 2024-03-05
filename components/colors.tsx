import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectCoverflow, Navigation, Pagination } from 'swiper';

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
    <div className="container">
      <h1 className="heading">Flower Gallery</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >

        {colorsArr.map((ele)=>{

// eslint-disable-next-line react/jsx-key
return <SwiperSlide>
    <div className='colors'>

    </div>
         
        </SwiperSlide>


        })}
       
       

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Colors;