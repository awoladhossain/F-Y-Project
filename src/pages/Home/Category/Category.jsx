import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';


const Category = () =>
{
    return (
        <section>
            <SectionTitle
                heading={"Order Now!"}
                subHeading={"From 11.00 AM to 1.00 PM"}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h1 className='text-4xl uppercase text-center -mt-16 text-zinc-500  font-serif italic '>Salads</h1>
                </SwiperSlide>
                {/* <SwiperSlide style={{ position: 'relative' }}>
                <img src={slide1} alt="" style={{ width: '100%', height: 'auto' }} />
                <div style={{ position: 'absolute', top: '90%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: '#fff' }}>
                    <h1 className='text-black'>Salads</h1>
                </div>
            </SwiperSlide> */}
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h1 className='text-4xl uppercase text-center -mt-16 text-zinc-500  font-serif italic '>Pizza</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h1 className='text-4xl uppercase text-center -mt-16 text-zinc-500  font-serif italic '>Desert</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h1 className='text-4xl uppercase text-center -mt-16 text-zinc-500  font-serif italic '>Cake</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h1 className='text-4xl uppercase text-center -mt-16 text-zinc-500  font-serif italic '>Salads</h1>
                </SwiperSlide>
            </Swiper>
      </section>
    );
};

export default Category;