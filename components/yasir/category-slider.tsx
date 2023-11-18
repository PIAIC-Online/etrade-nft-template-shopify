'use client'
import Image from "next/image";
import React from "react";

interface Category {
    
    id: number;
    name: string;
    image: string;
  }

interface response {
    [x: string]: any;
    res: Category[]
}

const CategorySliderObject: React.FC<response> =  (res) => {

    // console.log(res.res.map((item: any) => item))
    

return(
    <div className='flex gap-4 m-20 justify-center items-center'>
        
        {
            res.res.map((item: any, index: number) => (
               

                    <div key={index} className='rounded-md outline-4 outline-black p-2 shadow-md'>
                        
                        
                        <Image className='rounded-md' src={item.imageURL} alt="Image" width={150} height={150} />
                        <p className='text-center m-2'>{item.value} </p>
                        
                        
                    </div>
                  
            ))

        }
    </div>
       
)
};

export default CategorySliderObject;
