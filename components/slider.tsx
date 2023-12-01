
// import { getSliderSection } from 'lib/shopify';
// import Image from 'next/image';

// const Slider = async () => {
//    const res = await getSliderSection();
  
  

//   return (

// <div className="mr-28 my-40 ml-10 flex ">
//     {res.map((res: any, index: number) => (
//       <div key={index}>
//         <div className='p-1 transition duration-300 rounded-b-md hover:scale-105 ease-in-out rounded-md'>
//             <div className=''>
//               <Image 
//               className=' rounded-t-md '
//               src={res.imageURL} alt={res.key} width={500} height={500} />
//             </div>
//             <div className='text-center my-4'>
//               <p className='my-4'>{res.value}</p>
//               <p className='my-4'>Rs.5000</p>
//               <div className='my-4 bg-pink-500 rounded-md py-2 m-8 text-sm'>
//                 Buy Product
//               </div>
              
//             </div>
//           </div>
        
//       </div>
//     ))}
//   </div>

//   );
// };

// export default Slider;

'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Slider = () => {
  const [sliderData, setSliderData] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  

  useEffect(() => {
    const data = ['/P-1.jpg', '/P-2.jpg', '/P-3.jpg', '/P-4.jpg'];
    setSliderData(data);
  }, []);

  // const handlePrev = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex === 0 ? sliderData.length - 1 : prevIndex - 1));
  // };

  // const handleNext = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1));
  // };

  return (
    <div className="relative max-w-7xl   mx-auto mt-32">
      <div className="flex items-center justify-center">
        {/* <button className="absolute left-0 top-1/2 transform -translate-x-1/2" onClick={handlePrev}>
          Previous
        </button> */}
        <div className="flex">
          {sliderData.map((item, index) => (
            <div
              key={index}
              className={`transition-transform transform ${
                index === currentIndex ? 'scale-125' : 'scale-100'
              }`}
            >
              <Image
                className="rounded-t-md"
                src={item}
                alt="NFT Image"
                width={500}
                height={500}
              />
            </div>
          ))}
        </div>
        {/* <button className="absolute right-0 top-1/2 transform translate-x-1/2" onClick={handleNext}>
          Next
        </button> */}
      </div>

      <div className="flex justify-center mt-20">
        {sliderData.map((_, index) => (
          <button
            key={index}
            className={`mx-2 w-2 h-2 bg-gray-500 rounded-full  ${
              index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
