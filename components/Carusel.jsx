"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { ArrowRight } from "lucide-react";

const Carusel = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000
    };

   const items = [
    {
      name: "Bolalar uchun chegirmalar",
      id: 1,
      desc: "Bolalar kiyimlarida maxsus narxlar va qulay tanlovlar.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQUOO7uHFWRys53aOnStvLoI2PKjF2JnCx8A&s",
    },
    {
      name: "Ayollar kiyimlari",
      id: 2,
      desc: "Yangi mavsum uchun eng sara liboslar to'plami.",
      img: "https://i.ytimg.com/vi/Bsf8aEoN8Ho/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDY0mLJVRqRtKQNUuPEL8C1XRSulA",
    },
    {
      name: "Erkaklar kiyimlari",
      id: 3,
      desc: "Sifatli va zamonaviy erkaklar liboslari.",
      img: "https://frankfurt.apollo.olxcdn.com/v1/files/nden4az8fiua3-UZ/image;s=1040x1117",
    },
  ];

   return (
    <div className="w-full max-w-[1200px] mx-auto p-5 coruselCard">
      <Slider {...settings}>
        {items.map((item) => (
          <div key={item.id} className="outline-none">
            <div
              className="relative h-[400px] rounded-[20px] bg-cover bg-center flex flex-col justify-center px-[60px] text-white overflow-hidden"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.1)), url(${item.img})`,
              }}
            >
              <span className="text-sm font-light uppercase mb-8 opacity-80 tracking-wider">
                Online Market
              </span>
              
              <h1 className="text-5xl font-bold mb-10 max-w-[500px] leading-[1.1]">
                {item.name}
              </h1>
              
              <p className="text-lg mb-8 opacity-90 max-w-[450px]">
                {item.desc}
              </p>
              
              <button className="w-60 py-3 px-6 rounded-xl bg-white text-black font-bold flex items-center gap-2 hover:bg-gray-100 transition-colors active:scale-95">
                Chegirmalarni ko'rish<ArrowRight />
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carusel;