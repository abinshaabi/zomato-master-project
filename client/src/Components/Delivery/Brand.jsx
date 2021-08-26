import React from "react";
import Slider from "react-slick";

// components
import { BrNextArrow, BrPrevArrow} from "../CarousalArrow";

const Brand = (props) => {
  const logos = [
    "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252598.png?output-format=webp",
    "https://b.zmtcdn.com/data/brand_creatives/logos/5bfbd8dfec807f55def6257118c7bf67_1600755551.png?output-format=webp",
    "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187721.png?output-format=webp",
    "https://b.zmtcdn.com/data/brand_creatives/logos/7a7904eff687a7456599074a4e7d2335_1617875100.png?output-format=webp",
    "https://b.zmtcdn.com/data/brand_creatives/logos/ec72c289aa01d947fe15a009ce8e559f_1616052816.png?output-format=webp",
    "https://b.zmtcdn.com/data/brand_creatives/logos/874c2b2b4554f4aed7dd3bb4e755c420_1604383019.png?output-format=webp",
    "https://b.zmtcdn.com/data/brand_creatives/logos/80c09d718acddee05a655eb378bb442f_1617875125.png?output-format=webp",
  ];
  const settings = {
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <BrNextArrow />,
    prevArrow: <BrPrevArrow />,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
          infinite: false,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3
        }
      },]
  };
  return (
    <div className=" hidden md:block my-5  ">
      <h1 className="text-2xl font-semibold mt-10 mb-2 md:mt-16 md:mb-6 md:text-2xl md:font-semibold">Top Brands for You</h1>
      <Slider {...settings} className="pl-7 lg:pl-12  ">
        {logos.map((logo) => (
          <div className="  ">
            <div className="w-36 h-36 border border-1 shadow rounded-lg">
                <img src={logo}
                  alt="food"
                  className="w-full h-full object-cover  rounded-md" />
            </div>     
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Brand;