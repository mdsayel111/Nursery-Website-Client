// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './slider.css';

// import required modules
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';

export default function App() {
    return (
        <div className='h-[400px]'>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="bg-[url('/banner1.jpg')] w-full h-full bg-cover bg-no-repeat flex justify-center items-center relative">
                        <div className='absolute top-0 w-full h-full bg-black opacity-[0.4] z-0'></div>
                        <div className='space-y-4 z-10'>
                            <h1 className='text-white text-2xl lg:text-3xl'>BUY Online: Greenery At Your Fingertips</h1>
                            <p className='text-gray-300'>Browse, select and purchase your favorite plants from the comfort of your home.</p>
                            <button className=' py-2 px-4 rounded-md bg-primary transition-all text-white font-bold hover:bg-secondary'>Order Now</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-[url('/banner2.jpg')] w-full h-full bg-cover bg-no-repeat flex justify-center items-center relative">
                        <div className='absolute top-0 w-full h-full bg-black opacity-[0.4] z-0'></div>
                        <div className='space-y-4 z-10'>
                            <h1 className='text-white text-2xl lg:text-3xl'>Our Nersery: Nerturing Nature's Beauty</h1>
                            <p className='text-gray-300'>drive into our vast section of thriving plants, catch cultivated with care and expertise.</p>
                            <button className=' py-2 px-4 rounded-md bg-primary transition-all text-white font-bold hover:bg-secondary'>Know More</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-[url('/banner3.jpg')] w-full h-full bg-cover bg-no-repeat flex justify-center items-center relative">
                        <div className='absolute top-0 w-full h-full bg-black opacity-5 z-0'></div>
                        <div className='space-y-4 z-10'>
                            <h1 className='text-white text-2xl lg:text-3xl'>Landscapting Servic: Crafting Green Mesterpices</h1>
                            <p className='text-gray-300'>Transform your outdoor areas with our bespok landscapting service.</p>
                            <button className=' py-2 px-4 rounded-md bg-primary transition-all text-white font-bold hover:bg-secondary'>Know More</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
