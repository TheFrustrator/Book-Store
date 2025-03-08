import React from 'react'
import { bannerImg } from '../../assets/assets'
import { assets } from '../../assets/assets'

const AppStore = () => {
  return (
    <>
      <div className='bg-gray-100 dark:bg-gray-800 text-white py-10' style={bannerImg}>
        <div className="container">
          <div className='space-y-6 max-w-xl mx-auto'>
            <h1 data-aos="slide-up" className='text-2xl text-center sm:text-4xl font-semibold'>Read Books at your fingertips</h1>
            <div data-aos="slide-up" className='flex flex-wrap justify-center items-center gap-4'>
              <a href="#">
                <img src={assets.play_store} alt="" className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'/>
              </a>
              <a href="#">
                <img src={assets.app_store} alt="" className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AppStore