import React from 'react'
import { BookData } from '../../assets/assets'
import { FaStar } from 'react-icons/fa'

const BestBook = () => {
  return (
    <div className='py-10 dark:bg-gray-950 dark:text-white'>
      <div className="container">
        {/* herader section  */}
        <div className='text-center mb-20 max-w-[400px] mx-auto'>
          <p className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>
            Trending Books 
          </p>
          <h1 className='text-3xl font-bold'>Best Book</h1>
          <p>Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Qui magnam porro
             officiis! Reprehenderit, eligendi 
             ducimus vel placeat veritatis ipsa 
             numquam.{" "}
          </p>
        </div>
        {/* card section  */}
        <div className='grid grid-cols-1 sm:grid-cols-3 md:gap-5 place-items-center'>
          {
            BookData.map((data)=>(
              <div data-aos="zoom-in" className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]'>
                <div className='h-[100px]'>
                  <img src={data.img} alt="" className='max-w-[100px] block mx-auto transform -translate-y-14 group-hover:scale-105 duration-300 shadow-md'/>
                </div>
                <div className='p-4 text-center'>
                  <div className='w-full flex items-center justify-center'>
                    <FaStar className='text-yellow-500'/>
                    <FaStar className='text-yellow-500'/>
                    <FaStar className='text-yellow-500'/>
                    <FaStar className='text-yellow-500'/>
                  </div>
                  <h1 className='text-xl font-bold'>{data.title}</h1>
                  <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{data.description}</p>
                  <button className='bg-primary to-secondary text-white px-4 py-4 rounded-full mt-4 hover:scale-105 duration-200 group-hover:bg-white group-hover:text-primary'>Order Now</button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default BestBook