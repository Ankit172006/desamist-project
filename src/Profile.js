import React, { useRef, useState } from 'react';
    // Import Swiper React components
    import { Swiper, SwiperSlide } from 'swiper/react';
    
    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/pagination';
    import 'swiper/css/navigation';
    
    import './Proflie.css';
    
    // import required modules
    import { Keyboard, Pagination, Navigation } from 'swiper/modules';

  

    
    function App() {
      return (
        <div className='main_container'>
        <div className='swipe__container'>
          <Swiper
            slidesPerView={2}
            spaceBetween={2}
            autoplay={{ delay: 1000 }} // Set autoplay options
            loop={true}
            keyboard={{
              enabled: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Keyboard, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
                <div className='person_proflie'>
                  <div className="img_container">
                    <img src="https://themecraze.net/html/moran/images/resource/team-3.jpg" alt="" />
                  </div>
                  <div className="tittle_container">Kevin Hardson</div>
                  <div className="bio_container">SEO Content Writer</div>
                </div>
            </SwiperSlide>
            <SwiperSlide>                
                <div className='person_proflie'>
                <div className="img_container">
                    <img src="https://themecraze.net/html/moran/images/resource/team-3.jpg" alt="" />
                  </div>
                  <div className="tittle_container">Kevin Hardson</div>
                  <div className="bio_container">SEO Content Writer</div>
                </div>
                </SwiperSlide>
            <SwiperSlide>                
                <div className='person_proflie'>
                <div className="img_container">
                    <img src="https://themecraze.net/html/moran/images/resource/team-3.jpg" alt="" />
                  </div>
                  <div className="tittle_container">Kevin Hardson</div>
                  <div className="bio_container">SEO Content Writer</div>
                </div>
                </SwiperSlide>
            <SwiperSlide>
            <div className='person_proflie'>
            <div className="img_container">
                    <img src="https://themecraze.net/html/moran/images/resource/team-3.jpg" alt="" />
                  </div>
                  <div className="tittle_container">Kevin Hardson</div>
                  <div className="bio_container">SEO Content Writer</div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='person_proflie'>
            <div className="img_container">
                    <img src="https://themecraze.net/html/moran/images/resource/team-3.jpg" alt="" />
                  </div>
                  <div className="tittle_container">Kevin Hardson</div>
                  <div className="bio_container">SEO Content Writer</div>
            </div>                
            </SwiperSlide>
            <SwiperSlide>
            <div className='person_proflie'>
            <div className="img_container">
                    <img src="https://themecraze.net/html/moran/images/resource/team-3.jpg" alt="" />
                  </div>
                  <div className="tittle_container">Kevin Hardson</div>
                  <div className="bio_container">SEO Content Writer</div>
             </div>
            </SwiperSlide>
            <SwiperSlide>                
                <div className='person_proflie'>
                <div className="img_container">
                    <img src="https://themecraze.net/html/moran/images/resource/team-3.jpg" alt="" />
                  </div>
                  <div className="tittle_container">Kevin Hardson</div>
                  <div className="bio_container">SEO Content Writer</div>
                </div>
                </SwiperSlide>
            <SwiperSlide>
            <div className='person_proflie'>
            <div className="img_container">
                    <img src="https://themecraze.net/html/moran/images/resource/team-3.jpg" alt="" />
                  </div>
                  <div className="tittle_container">Kevin Hardson</div>
                  <div className="bio_container">SEO Content Writer</div>
            </div>
            </SwiperSlide>
          </Swiper>
        </div>
        </div>
      );
    }
    
  

export default App
