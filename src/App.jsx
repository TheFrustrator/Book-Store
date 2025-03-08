import { useEffect, useState } from 'react'
import Navbar from './Components/NavBar/Navbar'
import Hero from './Components/Hero/Hero'
import Banner from './Components/Banner/Banner'
import AppStore from './Components/AppStore/AppStore'
import BookSlider from './Components/BookSlider/BookSlider'
import Testimonial from './Components/Testimonial/Testimonial'
import OrderPopup from './Components/OrderPopup/OrderPopup'
import Footer from './Components/Footer/Footer'
import BestBook from './Components/BestBook/BestBook'
import AOS from 'aos'
import 'aos/dist/aos.css'


function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    AOS.init(
      {
        offset:100,
        duration:800,
        easing:"ease-in-sine",
        delay: 100,
      }
    );
    AOS.refresh();
  },[]);

  return (
    <div>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar />
        <Hero />
        <BestBook />
        <Banner />
        {/* cover banner  */}
        <AppStore />
        {/* pdf Reader  */}
        <BookSlider />
        <Testimonial />
        <Footer />
        <OrderPopup />
      </div>
    </div>
  )
}




export default App



