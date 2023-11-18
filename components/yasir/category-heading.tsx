import { getCategorySection } from 'lib/shopify';
import Image from 'next/image';




const CategoryHeading = async () => {
    const res = await getCategorySection();
    // console.log(res.values[0])
    // console.log(res.values[2])
    // console.log(res.imageUrls[0])
    const { values, imageUrls } = res;
  return (
    <div className="ml-28 mr-20 overflow-x-auto max-w-md">
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

export default CategoryHeading