import React, { useState, useEffect, useRef } from "react";
import { getCustoms } from "../../../api/cusAPI";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import CustomerReviewsTitle from "./CustomerReviewsTitle";
import VideoCard from "../../../components/UserCard/VideoCard";
import ImageCard from "../../../components/UserCard/ImageCard";
import endpoint from "../../../config/config";
import "./custom-swiper.css";

const CustomerReviews = () => {
  const swiperRef = useRef(null);
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    getCustoms().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setCustomers(data);
      }
    });
  }, []);

  return (
    <Box id="c_reviews" className="customerContainer">
      <CustomerReviewsTitle />
      <Swiper
        id="c_reviews"
        className="mySwiper"
        centeredSlides={true}
        grabCursor={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        ref={swiperRef}
      >
        {customers.map((item, index) => (
          <SwiperSlide key={index}>
            {item.type === "video" ? (
              <VideoCard
                name={item.name}
                title={item.position}
                avatar={`${endpoint}/uploads/${item.image}`}
              />
            ) : (
              <ImageCard
                name={item.name}
                title={item.position}
                avatar={`${endpoint}/uploads/${item.image}`}
                content={item.content}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default CustomerReviews;
