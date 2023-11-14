
import { getHeroSection } from 'lib/shopify';
import Image from 'next/image';

const Hero = async () => {
  const data = await getHeroSection();
  // console.log(data)
  const { values, imageUrls } = data;

  if (!values || values.length === 0) {
    return <div>No data available for the hero section</div>;
  }

  return (
    <div className="ml-28 my-28 mr-20">
        <div className='flex'> 
            <div>
                <Image src={imageUrls[0]} alt={`Image `} width={20} height={20} />
            </div>
            <div>
                <p className='mx-2 text-pink-500 text-sm'>{values[0]}</p>
            </div>
        </div>

        <p className='mb-20 mt-2 text-6xl'>{values[2]}</p>
        <p className='text-center text-black text-xl bg-gray-200 w-36 hover:scale-105 transition-all duration-300 hover:cursor-pointer px-4 py-2 rounded-lg'>{values[3]}</p>
      
    </div>
  );
};

export default Hero;




