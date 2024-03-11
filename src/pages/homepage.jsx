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
                      <h3 className="text-base text-start font-medium text-RootBrew font-bakilda">
                        {value.welcome}
                      </h3>
                      <h1 className="text-8xl text-start  text-RootBrew font-bakilda font-normal mt-6">
                        {value.heading}
                      </h1>
                      <h2 className="text-4xl text-start  font-normal font-bakilda text-RootBrew mt-6">
                        {value.heading2}
                      </h2>
                      <p className="text-base text-start  text-RootBrew/60 font-normal font-value-sans-pro leading-[27.2px] mt-8">
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
      <section className="bg-FloralWhite">
        <div className="flex justify-between container items-center md:h-[230px]">
          <div className="bg-Redorange p-8 rounded-b-xl">
            <img className="" src="assets/images/playline.svg" alt="img" />
            <div className="flex items-center">
              <img className="" src="assets/images/play.svg" alt="img" />
              <h3 className="text-2xl pl-4 font-semibold text-white font-abril-display">
                Play Intro Video
              </h3>
            </div>
          </div>
          <div className="">
            <h3 className="font-abril-display text-RootBrew font-semibold text-2xl">
              Our Opening Hours
            </h3>
            <p className="font-value-sans-pro text-base font-normal text-RootBrew">
              Mon - Sat: 07:00 - 18:00
            </p>
            <p className="font-value-sans-pro text-base font-normal text-RootBrew">
              Only Sun: 09:00 - 14:00
            </p>
          </div>
          <div>
            <h3 className="font-abril-display text-RootBrew font-semibold text-2xl">
              Our Live Location
            </h3>
            <p className="font-value-sans-pro text-base font-normal text-RootBrew">
              848 A 28TH ST, Brooklyn
            </p>
            <p className="font-value-sans-pro text-base font-normal text-RootBrew">
              New York, UK
            </p>
          </div>
          <div>
            <h3 className="font-abril-display text-RootBrew font-semibold text-2xl">
              Book A Table Now
            </h3>
            <p className="font-value-sans-pro text-base font-normal text-RootBrew">
              +1 318-254-6849
            </p>
            <p className="font-value-sans-pro text-base font-normal text-RootBrew">
              +1 452-754-6579
            </p>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-full md:col-span-7">
              <h3 className="text-base text-start font-medium text-Redorange font-bakilda">
                Why Choose Us
              </h3>
              <h2 className="text-4xl text-start font-normal font-bakilda text-RootBrew mt-6">
                Choosing Unlocklive, A Taste of Perfection
              </h2>
              <p className="text-base font-normal text-RootBrew/60 text-start font-value-sans-pro mt-6">
                Unlocklive takes pride in the art of roasting, transforming raw
                coffee beans into a symphony of aromatic notes and rich flavors.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="col-span-full md:col-span-1 border-solid border-2 border-RootBrew/10 rounded-[10px] py-6">
                  <h2 className="text-RootBrew font-bakilda text-5xl font-normal">
                    20+
                  </h2>
                  <p className="text-xl font-normal text-RootBrew items-center mt-4">
                    Years Experience
                  </p>
                </div>
                <div className="col-span-full md:col-span-1 border-solid border-2 border-RootBrew/10 rounded-[10px] py-6">
                  <h2 className="text-RootBrew font-bakilda text-5xl font-normal">
                    100+
                  </h2>
                  <p className="text-xl font-normal text-RootBrew items-center mt-4">
                    Master Chefs
                  </p>
                </div>
                <div className="col-span-full md:col-span-1 border-solid border-2 border-RootBrew/10 rounded-[10px] py-6">
                  <h2 className="text-RootBrew font-bakilda text-5xl font-normal">
                    30+
                  </h2>
                  <p className="text-xl font-normal text-RootBrew items-center mt-4">
                    Achievements
                  </p>
                </div>
              </div>
              <p className="text-base font-normal text-RootBrew/60 text-start font-value-sans-pro mt-6">
                Your choice to savor our coffee is an invitation to experience
                the epitome of craftsmanship, flavor, and dedication.
              </p>
              <div className="flex mt-6">
                <button className="border-solid border-2 border-RootBrew py-4 px-8 text-RootBrew font-value-sans-pro rounded-xl text-base font-medium">
                  Explore Our Menus
                </button>
              </div>
            </div>

            <div className="col-span-full md:col-span-5">
              <img src="assets/images/whyus.svg" alt="img" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h3 className="text-base font-normal text-Redorange font-bakilda">
            Coffee Menu
          </h3>
          <h2 className="text-RootBrew font-bakilda text-5xl font-normal">
            Unlocklive Coffee Menu
          </h2>
          <div className="grid grid-cols-12 gap-4 mt-6">
            <div className="col-span-full md:col-span-6">
              <div className="items-center flex border-solid border-2 border-RootBrew/10 rounded-xl py-6 px-8">
                <img src="assets/images/menu1.svg" alt="img" />
                <div className="px-4">
                  <h2 className="text-start text-2xl font-semibold font-abril-display text-RootBrew">
                    Double Espresso x2
                  </h2>
                  <p className="text-start text-sm font-normal font-value-sans-pro text-RootBrew/70 mt-2">
                    There are many variations of passages Lorem Ipsum form
                  </p>
                </div>
                <span className="font-medium font-value-sans-pro text-white text-xl bg-Redorange border-dashed border-2 border-RootBrew rounded-full p-3">
                  $10
                </span>
              </div>
              <div className="items-center flex border-solid border-2 border-RootBrew/10 py-6 px-8 rounded-xl mt-2">
                <img src="assets/images/menu2.svg" alt="img" />
                <div className="px-4">
                  <h2 className="text-start text-2xl font-semibold font-abril-display text-RootBrew">
                    Salted Caramel Cold Brew
                  </h2>
                  <p className="text-start text-sm font-normal font-value-sans-pro text-RootBrew/70">
                    There are many variations of passages Lorem Ipsum form
                  </p>
                </div>
                <span className="font-medium font-value-sans-pro text-RootBrew text-xl bg-white border-dashed border-2 border-RootBrew rounded-full p-3">
                  $10
                </span>
              </div>
            </div>
            <div className="col-span-full md:col-span-6">
              <div className="items-center flex border-solid border-2 border-RootBrew/10 py-6 px-8 rounded-xl">
                <img src="assets/images/menu3.svg" alt="img" />
                <div className="px-4">
                  <h2 className="text-start text-2xl font-semibold font-abril-display text-RootBrew">
                    Hazelnut Heaven Latte
                  </h2>
                  <p className="text-start text-sm font-normal font-value-sans-pro text-RootBrew/70">
                    There are many variations of passages Lorem Ipsum form
                  </p>
                </div>
                <span className="font-medium font-value-sans-pro text-white text-xl bg-Redorange border-dashed border-2 border-RootBrew rounded-full p-3">
                  $10
                </span>
              </div>
              <div className="items-center flex rounded-xl border-solid border-2 border-RootBrew/10 py-6 px-8 mt-2">
                <img src="assets/images/menu4.svg" alt="img" />
                <div className="px-4">
                  <h2 className="text-start text-2xl font-semibold font-abril-display text-RootBrew">
                    Salted Caramel Cold Brew
                  </h2>
                  <p className="text-start text-sm font-normal font-value-sans-pro text-RootBrew/70">
                    There are many variations of passages Lorem Ipsum form
                  </p>
                </div>
                <span className="font-medium font-value-sans-pro text-RootBrew text-xl bg-white border-dashed border-2 border-RootBrew rounded-full p-3">
                  $10
                </span>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <button className="border-solid border-2 border-RootBrew py-4 px-8 text-RootBrew font-value-sans-pro rounded-xl text-base font-medium">
              View All Menu
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
export default HomePage;
