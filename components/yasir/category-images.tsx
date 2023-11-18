
import { getCategoryImages, getCategorySection } from 'lib/shopify';
import Image from 'next/image';
// import Slider from 'react-slick';

const CategorySlider = async () => {
    const res = await getCategoryImages();
    // console.log(res)
    // console.log(res.map((item: any, index: number) => ({ key: index, imgaeURL: item.imageURL })));
    // console.log(res.map((item: any, index: number) => ({ key: index, value: item.value })));
 
  return (
    <div className='flex gap-4 m-20 justify-center items-center'>
        
        {
            res.map((item: any, index: number) => (
               

                    <div key={index} className='rounded-md outline-4 outline-black p-2 shadow-md'>
                        

                        <Image className='rounded-md' src={item.imageURL} alt={item.key + item.value} width={150} height={150} />
                        <p className='text-center m-2'>{item.value} </p>
                        
                        
                    </div>
                  
            ))

        }
       
    </div>
  );
};

export default CategorySlider;






export const CategoryHeading = async () => {
    const res = await getCategorySection();
    // console.log(res.values[0])
    // console.log(res.values[2])
    // console.log(res.imageUrls[0])
    const { values, imageUrls } = res;
  return (
    <div className="ml-28 mr-20">
    <div className='flex'> 
        <div>
            <Image src={imageUrls[0]} alt={`Image `} width={20} height={20} />
        </div>
        <div>
            <p className='mx-2 text-pink-500 text-sm'>{values[0]}</p>
        </div>
    </div>

    <p className=' mt-2 text-4xl'>{values[2]}</p>
    
  
</div>
  )
}

