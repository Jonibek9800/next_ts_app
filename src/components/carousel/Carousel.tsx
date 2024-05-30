/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import { Carousel, Image } from "antd";

const contentStyle = {
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "100%",
  height: "90vh",
};

const CarouselSlider: FC = () => {
  return (
    <Carousel style={{ width: "100%", margin: "auto" }} autoplay>
      <div>
        <img
          style={{
            ...contentStyle,
          }}
          width="100%"
          height="100%"
          src="./img/resto_fon1.jpg"
          alt="./img/resto_fon1.jpg"
        />
      </div>
      <div >
        <img
          style={{
            ...contentStyle,
          }}
          width="100%"
          height="100%"
          src="./img/resto_fon2.jpg"
          alt="./img/resto_fon2.jpg"
        />
      </div>
      <div >
        <img
          style={{
            ...contentStyle,
          }}
          width="100%"
          height="100%"
          src="./img/resto_fon3.jpg"
          alt="./img/resto_fon3.jpg"
        />
      </div>
      <div>
        <img
          width="100%"
          height="100%"
          src="./img/resto_fon4.jpg"
          style={{
            ...contentStyle,
          }}
          alt="./img/resto_fon4.jpg"
        />
      </div>
      <div >
        <img
          width="100%"
          height="100%"
          style={{
            ...contentStyle,
          }}
          src="./img/resto_fon5.jpg"
          alt="./img/resto_fon5.jpg"
        />

      </div>
    </Carousel>
  );
};
export default CarouselSlider;
