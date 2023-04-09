import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "One of the simplest ways to obtain customer feedback is just to ask willing customers to provide it in an interview. Customer interviews can be an excellent way for your business to ask customers about specific aspects of your business and how they played a role in their success. This format allows you to show off your different products and features and lets potential leads see their real-world application.",
    },
    {
      img: profilePic2,
      review:
        "These reviews should be used as customer testimonials for your business because they can be quickly uploaded and shared to your company's website. They can be screenshotted and then posted on the home page for customers to see, or they can be quoted and reformatted on your site. Instead of making the customer search for your good reviews, bring the reviews to them and prevent navigation away from your site.",
    },
    {
      img: profilePic3,
      review:
        "These reviews should be used as customer testimonials for your business because they can be quickly uploaded and shared to your company's website. They can be screenshotted and then posted on the home page for customers to see, or they can be quoted and reformatted on your site. Instead of making the customer search for your good reviews, bring the reviews to them and prevent navigation away from your site.",
    },
    {
      img: profilePic4,
      review:
        "These reviews should be used as customer testimonials for your business because they can be quickly uploaded and shared to your company's website. They can be screenshotted and then posted on the home page for customers to see, or they can be quoted and reformatted on your site. Instead of making the customer search for your good reviews, bring the reviews to them and prevent navigation away from your site.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
