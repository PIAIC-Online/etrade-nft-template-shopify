
import { getCategoryImages } from 'lib/shopify';
import CategorySliderObject from './category-slider';


const CategorySlider = async () => {
    const data = await getCategoryImages();
    
    
    
  return (
   
        <CategorySliderObject res = {data}/>

    // <div className='flex gap-4 m-20 justify-center items-center'>
        
    //     {
    //         res.map((item: any, index: number) => (
               

    //                 <div key={index} className='rounded-md outline-4 outline-black p-2 shadow-md'>
                        

    //                     <Image className='rounded-md' src={item.imageURL} alt={item.key + item.value} width={150} height={150} />
    //                     <p className='text-center m-2'>{item.value} </p>
                        
                        
    //                 </div>
                  
    //         ))

    //     }
       
    // </div>
  );
};

export default CategorySlider;
