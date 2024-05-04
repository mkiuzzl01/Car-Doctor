import About_image1 from '../../assets/images/about_us/person.jpg'
import About_image2 from '../../assets/images/about_us/parts.jpg'

const About = () => {
  return (
    <div className='flex py-20'>
        <div className='w-1/2'>
            <div className='relative'>
            <img src={About_image1} alt="" className='w-3/4' />
            <div className='absolute border-red-50 border-2 p-2 right-0 top-1/2'>
                <img src={About_image2} alt="" className='max-w-80' />
            </div>
            </div>
        </div>
      <div className='w-1/2 ps-10 space-y-8'>
        <h4 className="text-red-500 font-bold">About Us</h4>
        <h1 className="text-4xl font-bold">
          We are qualified <br /> & of experience in this field
        </h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
        <div>
          <button className="btn bg-[#FF3811] text-white">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
