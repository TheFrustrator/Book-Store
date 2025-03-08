import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaMoneyBillWaveAlt } from 'react-icons/fa'
import { FaLocationArrow } from 'react-icons/fa6'
import { FooterLinksData } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='bg-gray-100 dark:bg-gray-950 mt-14 rounded-t-3xl'>
      <div className="container">
        <div className='grid md:grid-cols-3 py-5'>
          {/* company details  */}
          <div className='py-8 px-4'>
            <h1 className='text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3 gap-3 flex items-center'>
              Book Store</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio laborum quae quaerat.</p>
              <br />
              <div className='flex items-center gap-3 '>
                <FaLocationArrow />
                <p>Noida ,Uttar Pradesh</p>
              </div>
              <div className='flex items-center gap-3'>
                <FaMoneyBillWaveAlt />
                <p>+91 9847247533</p>
              </div>
              {/* social handles  */}
              <div className='flex items-center gap-3 mt-6'>
                <a href="#">
                  <FaInstagram className='text-3xl hover:text-primary duration-300'/>
                </a>
                <a href="#">
                  <FaFacebook className='text-3xl hover:text-primary duration-300'/>
                </a>
                <a href="#">
                  <FaLinkedin className='text-3xl hover:text-primary duration-300'/>
                </a>
              </div>
          </div>
          {/* navlinks  */}
          <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
            {/* first col  */}
              <div>
                <div className='py-8 px-6'>
                  <h1 className='text-xl font-bold sm:text-left text-justify mb-3'>Important Links</h1>
                  <ul className='flex flex-col gap-3'>
                    {
                      FooterLinksData.map((data)=>{
                        return(
                          <li className='cursor-pointer hover:text-primary duration-300' key={data.id}>
                            <span className='mr-2'>&#11162;</span>
                            <a href={data.link}>{data.title}</a>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              </div>
              {/* second col  */}
              <div>
                <div className='py-8 px-6'>
                  <h1 className='text-xl font-bold sm:text-left text-justify mb-3'>Important Links</h1>
                  <ul className='flex flex-col gap-3'>
                    {
                      FooterLinksData.map((data)=>{
                        return(
                          <li className='cursor-pointer hover:text-primary duration-300' key={data.id}>
                            <span className='mr-2'>&#11162;</span>
                            <a href={data.link}>{data.title}</a>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              </div>
              {/* Third col  */}
              <div>
                <div className='py-8 px-6'>
                  <h1 className='text-xl font-bold sm:text-left text-justify mb-3'>Important Links</h1>
                  <ul className='flex flex-col gap-3'>
                    {
                      FooterLinksData.map((data)=>{
                        return(
                          <li className='cursor-pointer hover:text-primary duration-300' key={data.id}>
                            <span className='mr-2'>&#11162;</span>
                            <a href={data.link}>{data.title}</a>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              </div>
          </div>
        </div>
        <div>
          <div className="text-center py-10 border-t-2 border-gray-300/50">
            @copyright 2025 All rights reserved || Made with ❤️ by Frustrator
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer