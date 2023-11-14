
import { getSliderSection } from 'lib/shopify';
import Image from 'next/image';
// import Slider from 'react-slick';
// import "~slick-carousel/slick/slick-theme.css";
// import "~slick-carousel/slick/slick.css";

const Slider = async () => {
   const res = await getSliderSection();
  // console.log(res);

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   centerMode: true,
  //   focusOnSelect: true,
  // };

  

  return (
    // <Slider {...settings}>

<div className="mr-28 my-40 ml-10 flex">
    {res.map((res: any, index: number) => (
      <div key={index}>
        <div className='p-1 '>
            <div>
              <Image src={res.imageURL} alt={res.key} width={500} height={500} />
            </div>
            <div className='text-center my-4'>
              <p className='my-4'>{res.value}</p>
              <p className='my-4'>Rs.5000</p>
              <div className='my-4 bg-pink-500 rounded-md py-4 m-4 '>
                Buy Product
              </div>
              
            </div>
          </div>
        
      </div>
    ))}
  </div>
  // </Slider>

  );
};

export default Slider;
