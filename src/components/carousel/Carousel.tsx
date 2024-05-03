import React, { FC } from "react";
import { Carousel } from "antd";

// const screenHeight = window.innerHeight;
const contentStyle = {
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "100%",
  height: "90vh",
};

const CarouselSlider: FC = () => {
  // const onChange = (currentSlide: any) => {
  //   console.log(currentSlide);
  // };
  return (
    <Carousel style={{ width: "100%", margin: "auto" }} autoplay>
      <div style={{position: 'relative'}}>
        <img
          style={{
            ...contentStyle,
            backgroundImage: `url("./img/resto_fon1.jpg")`,
          }}
          alt=""
        />
      </div>
      <div >
        <img
          style={{
            ...contentStyle,
            backgroundImage: `url("./img/resto_fon2.jpg")`,
          }}
          alt=""
        />
      </div>
      <div >
        <img
          style={{
            ...contentStyle,
            backgroundImage: `url("./img/resto_fon3.jpg")`,
          }}
          alt=""
        />
      </div>
      <div>
        <img
          style={{
            backgroundImage: `url("./img/resto_fon4.jpg")`,
            ...contentStyle,
          }}
          alt=""
        />
      </div>
      <div >
        <img
          style={{
            backgroundImage: `url("./img/resto_fon5.jpg")`,
            ...contentStyle,
          }}
          alt=""
        />
         
      </div>
    </Carousel>
  );
};
export default CarouselSlider;
