import React from 'react'
import Slider from 'react-slick'
import { testimonialData } from '../../assets/assets';


const Testimonial = () => {

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    // slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='pb-10'>
      <div className="container">
         {/* header  */}
         <div data-aos="slide-up" className='text-center mb-20 max-w-[400px] mx-auto'>
          <p className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>
            What our customer says
          </p>
          <h1 className='text-3xl font-bold'>Testimonials</h1>
          <p>Lorem ipsum dolor sit amet consectetur 
            adipisicing elit
            .{" "}
          </p>
        </div>
        {/* card section  */}
        <div data-aos="zoom-in">

          <Slider {...settings}>
            {
              testimonialData.map((data) => (
                  <div className='my-6'>
                    <div className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative '>
                      <div>
                        <img src={data.img} alt="" className='rounded-full w-20 h-20 object-cover'/>
                      </div>
                      <div>
                        <div>
                          <p className='text-gray-500 text-sm'>{data.text}</p>
                          <h1 className='text-xl font-bold text-black dark:text-white'>{data.name}</h1>
                        </div>
                      </div>
                    <p className='absolute text-black/20 z-10 top-0 right-0 font-serif text-9xl'>,,</p>
                    </div>
                  </div>
              ))
            }
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Testimonial