import React from 'react';
import Slider from 'react-slick';
import './slider.css';
import img1 from '../../image/img1.jpeg';
import img2 from '../../image/img2.jpeg';
import img3 from '../../image/img3.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fade } from 'react-bootstrap';

const HomeSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <section className='homeSlider'>
      <div className='container-fluid'>
        <Slider {...settings} className='home_slider_Main'>
          <div className='sliderImg item'>
            <img src={img1} className=' w-100' alt='sliderimg1' />
            <div className='info'>
              <h2 className='mb-4'>
                Authentic Organic Fruits and Vegetables<br></br> Farm to your
                doorstep
              </h2>
              {/* <p>Sign up for the daily newsletter</p> */}
            </div>
          </div>
          <div className='sliderImg item'>
            <img src={img2} className=' w-100' alt='sliderimg2' />
            <div className='info'>
              <h2 class='mb-3'>
                Fresh Vegetables
                <br />
                Big discount
              </h2>
              {/* <p>Sign up for the daily newsletter</p> */}
              <button
                style={{
                  backgroundColor: 'rgba(169, 189, 128, 0.871)',
                  borderRadius: '5px',
                  height: '45px',
                  width: '25%',
                }}
              >
                Shop Now
              </button>
            </div>
          </div>
          <div className='sliderImg'>
            <img src={img3} className=' w-100' alt='sliderimg3' />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default HomeSlider;
