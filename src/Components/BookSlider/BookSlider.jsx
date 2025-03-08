import React from 'react'
import {BooksData} from '../../assets/assets'
import { FaStar } from 'react-icons/fa6'


const BookSlider = () => {
  return (
    <div className='py-10'>
      <div className="container placeholder-gray-100">
        {/* header  */}
        <div data-aos="slide-up" className='text-center mb-20 max-w-[400px] mx-auto'>
          <p className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>
            Best Books
          </p>
          <h1 className='text-3xl font-bold'>Top Books</h1>
          <p>Lorem ipsum dolor sit amet consectetur 
            adipisicing elit
            .{" "}
          </p>
        </div>
        {/* card  */}
        <div data-aos="slide-up">
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
            {
              BooksData.map((data) => (
                <div className='space-y-3 '>
                  <img src={data.img} alt="" className='h-[220px] w-[150px] object-cover rounded-md'/>
                  <div>
                    <h2 className='font-semibold'>{data.title}</h2>
                    <p className='text-sm text-gray-700 dark:text-gray-400'>{data.author}</p>
                    <div className='flex items-center gap-1'>
                      <FaStar className='text-yellow-500'/>
                      <span>{data.rating}</span>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          <div className='flex justify-center'>
            <button className='text-center mt-10 cursor-pointer bg-primary text-white py-2 px-5 rounded-full hover:scale-105'>View All Books</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookSlider