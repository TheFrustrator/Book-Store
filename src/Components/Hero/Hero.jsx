import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { bgImage } from "../../assets/assets";
import { ImageList } from "../../assets/assets";

const Hero = () => {
  const [imageId, setImageId] = useState(assets.book1);
  const [title, setTitle] = useState("Who's There?");
  const [description, setDescription] = useState(
    " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, debitis? Neque totam cumque officia tempore earum corrupti. Expedita"
  );

  return (
    <div
      className="min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
      style={bgImage}
    >
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* text-container-section  */}
          <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
            <h1 data-aos="zoom-out" data-aos-duration="500" className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              {title}
              <p data-aos="slide-up" data-aos-duration="500" data-aos-delay="100" className="bg-clip-text text-transparent bg-gradient-to-b from-primary text-right text-sm to-secondary">
                by Annoymous
              </p>
            </h1>
            <p data-aos="slide-up" data-aos-duration="500" data-aos-delay="100" className="text-sm">{description}</p>
            <div>
              <button data-aos="zoom-in" className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full hover:scale-105 duration-200">
                Order Now
              </button>
            </div>
          </div>
          {/* image container section  */}
          <div className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2">
            <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
              <img
                data-aos="zoom-in"
                data-aos-once="true"
                src={imageId}
                alt=""
                className="w-[300px] h-[300px] sm:[h-450px] sm:w-[450px] sm:scale-125 object-contain mx-auto"
              />
            </div>
            {/* other image list  */}
            <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute -bottom-[40px] lg:-right-1 bg-white rounded-full">
              {
                ImageList.map((data)=>(
                  <img src={data.img} data-aos="zoom-in"
                  data-aos-once="true" className="max-w-[100px] h-[100px] object-contain inline-block hover:scale-110 duration-200" 
                  onClick={() => {
                    setImageId(data.id === 1 ? assets.book1:data.id ===2?assets.book2:assets.book3)
                    setTitle(data.title);
                    setDescription(data.description);
                    
                  }
                  
                }/>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
