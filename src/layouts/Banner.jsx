import image1 from "../assets/images/banner/1.jpg";
import image2 from "../assets/images/banner/2.jpg";
import image3 from "../assets/images/banner/3.jpg";
import image4 from "../assets/images/banner/4.jpg";
import image5 from "../assets/images/banner/5.jpg";
import image6 from "../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full rounded-lg">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={image1} className="w-full max-h-[600px]" />
        <div className="absolute bg-gradient-to-r from-[#151515] text-white w-full h-full">
          <div className="m-24 space-y-8">
            <h1 className="text-7xl font-semibold">
              Affordable <br /> Price For Car <br /> Servicing
            </h1>
            <p>
              There are many variations of passages of available,<br /> but the
              majority have suffered alteration in some form
            </p>
            <div className="space-x-4">
              <button className="btn text-white bg-[#FF3811]">
                Discover More
              </button>
              <button className="btn btn-outline text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute space-x-4 right-5 left-5 flex justify-end transform -translate-y-1/2 bottom-0">
          <a href="#slide6" className="mx-2 btn-circle btn mx-5-circle">
            ❮
          </a>
          <a href="#slide2" className="mx-2 btn-circle btn mx-5-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={image2} className="w-full max-h-[600px]" />
        <div className="absolute bg-gradient-to-r from-[#151515] text-white w-full h-full">
          <div className="m-24 space-y-8">
            <h1 className="text-7xl font-semibold">
              Affordable <br /> Price For Car <br /> Servicing
            </h1>
            <p>
              There are many variations of passages of available,<br /> but the
              majority have suffered alteration in some form
            </p>
            <div className="space-x-4">
              <button className="btn text-white bg-[#FF3811]">
                Discover More
              </button>
              <button className="btn btn-outline text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end right-5 left-5 transform -translate-y-1/2 bottom-0">
          <a href="#slide1" className="btn mx-2 btn-circle mx-5-circle">
            ❮
          </a>
          <a href="#slide3" className="btn mx-2 btn-circle mx-5-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={image3} className="w-full max-h-[600px]" />
        <div className="absolute bg-gradient-to-r from-[#151515] text-white w-full h-full">
          <div className="m-24 space-y-8">
            <h1 className="text-7xl font-semibold">
              Affordable <br /> Price For Car <br /> Servicing
            </h1>
            <p>
              There are many variations of passages of available,<br /> but the
              majority have suffered alteration in some form
            </p>
            <div className="space-x-4">
              <button className="btn text-white bg-[#FF3811]">
                Discover More
              </button>
              <button className="btn btn-outline text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end right-5 left-5 transform -translate-y-1/2 bottom-0">
          <a href="#slide2" className="btn mx-2 btn-circle mx-5-circle">
            ❮
          </a>
          <a href="#slide4" className="btn mx-2 btn-circle mx-5-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={image4} className="w-full max-h-[600px]" />
        <div className="absolute bg-gradient-to-r from-[#151515] text-white w-full h-full">
          <div className="m-24 space-y-8">
            <h1 className="text-7xl font-semibold">
              Affordable <br /> Price For Car <br /> Servicing
            </h1>
            <p>
              There are many variations of passages of available,<br /> but the
              majority have suffered alteration in some form
            </p>
            <div className="space-x-4">
              <button className="btn text-white bg-[#FF3811]">
                Discover More
              </button>
              <button className="btn btn-outline text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end right-5 left-5 transform -translate-y-1/2 bottom-0">
          <a href="#slide3" className="btn mx-2 btn-circle mx-5-circle">
            ❮
          </a>
          <a href="#slide5" className="btn mx-2 btn-circle mx-5-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img src={image5} className="w-full max-h-[600px]" />
        <div className="absolute bg-gradient-to-r from-[#151515] text-white w-full h-full">
          <div className="m-24 space-y-8">
            <h1 className="text-7xl font-semibold">
              Affordable <br /> Price For Car <br /> Servicing
            </h1>
            <p>
              There are many variations of passages of available,<br /> but the
              majority have suffered alteration in some form
            </p>
            <div className="space-x-4">
              <button className="btn text-white bg-[#FF3811]">
                Discover More
              </button>
              <button className="btn btn-outline text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end right-5 left-5 transform -translate-y-1/2 bottom-0">
          <a href="#slide4" className="btn mx-2 btn-circle mx-5-circle">
            ❮
          </a>
          <a href="#slide6" className="btn mx-2 btn-circle mx-5-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img src={image6} className="w-full max-h-[600px]" />
        <div className="absolute bg-gradient-to-r from-[#151515] text-white w-full h-full">
          <div className="m-24 space-y-8">
            <h1 className="text-7xl font-semibold">
              Affordable <br /> Price For Car <br /> Servicing
            </h1>
            <p>
              There are many variations of passages of available,<br /> but the
              majority have suffered alteration in some form
            </p>
            <div className="space-x-4">
              <button className="btn text-white bg-[#FF3811]">
                Discover More
              </button>
              <button className="btn btn-outline text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end right-5 left-5 transform -translate-y-1/2 bottom-0">
          <a href="#slide5" className="btn mx-2 btn-circle mx-5-circle">
            ❮
          </a>
          <a href="#slide1" className="btn mx-2 btn-circle mx-5-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
