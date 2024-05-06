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
        <Image
          style={{
            ...contentStyle,
            // backgroundImage: `url("./img/resto_fon1.jpg")`,
          }}
          width="100%"
          height="100%"
          src="./img/resto_fon1.jpg"
          alt="./img/resto_fon1.jpg"
        />
      </div>
      <div >
        <Image
          style={{
            ...contentStyle,
            // backgroundImage: `url("./img/resto_fon2.jpg")`,
          }}
          width="100%"
          height="100%"
          src="./img/resto_fon2.jpg"
          alt="./img/resto_fon2.jpg"
        />
      </div>
      <div >
        <Image
          style={{
            ...contentStyle,
            // backgroundImage: `url("./img/resto_fon3.jpg")`,
          }}
          width="100%"
          height="100%"
          src="./img/resto_fon3.jpg"
          alt="./img/resto_fon3.jpg"
        />
      </div>
      <div>
        <Image
          width="100%"
          height="100%"
          src="./img/resto_fon4.jpg"
          style={{
            // backgroundImage: `url("./img/resto_fon4.jpg")`,
            ...contentStyle,
          }}
          alt="./img/resto_fon4.jpg"
        />
      </div>
      <div >
        <Image
          width="100%"
          height="100%"
          style={{
            // backgroundImage: `url("./img/resto_fon5.jpg")`,
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
