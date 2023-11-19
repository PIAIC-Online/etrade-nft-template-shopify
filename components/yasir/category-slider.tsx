'use client'
// import Image from "next/image";
// import React from "react";

// interface Category {
    
//     id: number;
//     name: string;
//     image: string;
//   }

// interface response {
//     [x: string]: any;
//     res: Category[]
// }

// const CategorySliderObject: React.FC<response> =  (data) => {

//     // console.log(res.res.map((item: any) => item))
    

// return(
//     <div className='flex gap-4 m-20 justify-center items-center'>
        
//         {
//             data.res.map((item: any, index: number) => (
//                 <div key={index} className='rounded-md outline-4 outline-black p-2 shadow-md'>
//                     <Image className='rounded-md' src={item.imageURL} alt="Image" width={150} height={150} />
//                     <p className='text-center m-2'>{item.value} </p>
//                 </div>
//             ))

//         }
//     </div>
       
// )
// };

// export default CategorySliderObject;


import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface Category {
  id: number;
  name: string;
  image: string;
}

interface Response {
  res: Category[];
}

const CategorySliderObject: React.FC<Response> = (data) => {
  const itemsPerPage = 6;
  const totalItems = data.res.length;
  const animationDuration = 200; // Adjust as needed
  const sliderRef = useRef<HTMLDivElement>(null);

  const getEffectiveIndex = (index: number) => {
    console.log(index)
    console.log((index + totalItems) % totalItems)
    return (index + totalItems) % totalItems;
    
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transition = `transform ${animationDuration}ms linear`;
      sliderRef.current.style.transform = `translateX(-${currentIndex * (150 + 8)}px)`;
    }
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => getEffectiveIndex(prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => getEffectiveIndex(prevIndex - 1));
  };

  const isPreviousDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex === totalItems - itemsPerPage;

  return (
    <div className="mx-20 overflow-hidden relative">
      <div className="flex gap-4" ref={sliderRef}>
        {data.res.map((item: any, index: number) => (
          <div key={index} className="flex-shrink-0">
            <div className="rounded-md outline-4 outline-black p-2 shadow-md">
              <Image
                className="rounded-md"
                src={item.imageURL}
                alt="Image"
                width={150}
                height={150}
              />
              <p className="text-center m-2">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 px-2 py-1 rounded"
        onClick={prevSlide}
        disabled={isPreviousDisabled}
      >
        Previous
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 px-2 py-1 rounded"
        onClick={nextSlide}
        disabled={isNextDisabled}

      >
        Next
      </button>
    </div>
  );
};

export default CategorySliderObject;
