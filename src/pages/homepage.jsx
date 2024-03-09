import Header from "../components/header.jsx";
import Slider from "../components/slider.jsx";
import { SwiperSlide } from "swiper/react";
import data from "../data.json";

const HomePage = () => {
  const { sliderData } = data;
  return (
    <>
      <Header />
      <section className="container py-20">
        <Slider
          slidesPerView={1}
          spaceBetween={30}
          autoHeight={false}
          sliderClass=""
        >
          {sliderData &&
            sliderData.length > 0 &&
            sliderData.map((value, key) => {
              return (
                <SwiperSlide className="h-auto">
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-full md:col-span-7">
                      <h3 className=" text-base text-start font-medium text-RootBrew font-bakilda">
                        {value.welcome}
                      </h3>
                      <h1 className="text-8xl text-start  text-RootBrew font-bakilda font-normal mt-6">
                        {value.heading}
                      </h1>
                      <h2 className="text-4xl text-start  font-normal font-bakilda text-RootBrew mt-6">
                        {" "}
                        {value.heading2}
                      </h2>
                      <p className="text-base text-start  text-RootBrew font-normal font-value-sans-pro leading-[27.2px] mt-8">
                        {value.description}
                      </p>
                    </div>
                    <div className="col-span-full md:col-span-5 px-4 md:px-0 pb-4 md:pb-0 rounded-[inherit] md:rounded-r-[inherit] md:rounded-l-none">
                      <img
                        className="w-full h-full object-cover rounded-[inherit] md:rounded-r-[inherit] md:rounded-l-none"
                        src="assets/images/coffecup.svg"
                        alt="img"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Slider>
        <div className="flex text-center">
          <button className="bg-Redorange py-4 px-8 text-white font-value-sans-pro rounded-xl text-base font-medium">
            EXPLORE OUR MENU
          </button>
          <img src="assets/images/coffe1.svg" alt="img" />
          <img src="assets/images/coffe2.svg" alt="img" />
          <img src="assets/images/coffe3.svg" alt="img" />
        </div>
      </section>
      <section className="container py-20">
        <div className="flex justify-between">
          <div className="bg-Redorange p-8 rounded-b-xl">
            <img className="" src="assets/images/playline.svg" alt="img" />
            <div className="flex items-center">
              <img className="" src="assets/images/play.svg" alt="img"/>
              <h3 className="text-2xl pl-4 font-semibold text-white font-abril-display">
                Play Intro Video
              </h3>
            </div>
          </div>
          <div>
            <h3 className="font-abril-display text-RootBrew font-semibold text-2xl">Our Opening Hours</h3>

          </div>
          <div>
            <h3 className="font-abril-display text-RootBrew font-semibold text-2xl">Our Opening Hours</h3>
            
          </div>
          <div>
            <h3 className="font-abril-display text-RootBrew font-semibold text-2xl">Our Opening Hours</h3>
            
          </div>
        </div>
      </section>
    </>
  );
};
export default HomePage;
