import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { hotelCards } from "../utils/hotelCard";

const Carousel = () => {
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    arrows: false,
    slidesToShow: 2,
    //! Görünümde tutulacak slayt sayısını belirlemek için
    slidesToScroll: 1,
    //! Caruselde gezinirken hareket ettirilecek slayt sayısını belirlemek için
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="content">
      <div className="controls">
        <button onClick={sliderRef?.slickPrev}>
          <FaChevronLeft />
        </button>
        <button onClick={sliderRef?.slickNext}>
          <FaChevronRight />
        </button>
      </div>
      <Slider ref={setSliderRef} {...sliderSettings}>
        {hotelCards.map((card, index) => (
          <div key={index} className="card">
            <img src={card.imageSrc} alt={card.title} className="card-image" />
            <div className="text-info">
              <div className="card-header">
                <h2>{card.title}</h2>
                <span>{card.pricingText}</span>
              </div>
              <p>{card.description}</p>
              <ul>
                {card.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
