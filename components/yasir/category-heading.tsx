import { getCategorySection } from 'lib/shopify';
import Image from 'next/image';




const CategoryHeading = async () => {
    const res = await getCategorySection();
    // console.log(res.values[0])
    // console.log(res.values[2])
    // console.log(res.imageUrls[0])
    const { values, imageUrls } = res;
  return (
    <div className="ml-28 overflow-x-auto max-w-full flex mr-auto pr-28">
      
        <div>
        
        <div className='flex items-center'> 
            <div>
              <Image src={imageUrls[0]} alt={`Image `} width={20} height={20} />
            </div>
            <div>
              <p className='mx-2 text-pink-500 text-sm'>{values[0]}</p>
            </div>
        </div>
    
        <p className=' mt-2 text-4xl'>{values[2]}</p>
        </div>
        <div className='flex gap-6 ml-auto'>
            <button className= ' outline-4 px-4 rounded-md shadow-md'>Next</button>
            <button>Previous</button>
        </div>

    </div>
  )
}

export default CategoryHeading