'use client'
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
    <>

<div className="ml-28 M=my-28 mr-20 overflow-x-auto max-w-full flex pr-28">
      
      <div>
      
      <div className='flex items-center'> 
          <div>
            <Image src="https://cdn.shopify.com/s/files/1/0624/4214/3939/files/basket_Icon-removebg-preview.png?v=1700163196" 
            alt={`Image `} width={20} height={20} />
          </div>
          <div>
            <p className='mx-2 text-pink-500 text-sm'>Categories</p>
          </div>
      </div>
  
      <p className=' mt-2 text-4xl'>Browse by Category</p>
      </div>
      <div className='flex gap-6 ml-auto '>
      <button
        className="transform text-slate-600 bg-slate-200 w-14 px-2 py-1 my-5 rounded -translate-y-4" 
        onClick={prevSlide}
        disabled={isPreviousDisabled}
      >
        P
      </button>
      <button
        className="transform text-slate-600 bg-slate-200 w-14 px-2 py-1 my-5 rounded -translate-y-4"
        onClick={nextSlide}
        disabled={isNextDisabled}

      >
        N
      </button>
        </div>

  </div>



    <div className=" ml-28 overflow-hidden">
      <div className="flex  " ref={sliderRef}>
        {data.res.map((item: any, index: number) => (
          <div key={index} className="flex-shrink-0">
            <div className="rounded-md outline-4 outline-black p-2 shadow-md relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
              <Image
                className="rounded-md ax-w-xs transition duration-300 ease-in-out hover:scale-110"
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
     
    </div>
        </>
  );
};

export default CategorySliderObject;
