
// import { getHeroSection } from 'lib/shopify';
// import Image from 'next/image';

// const Hero = async () => {
//   const data = await getHeroSection();
//   // console.log(data)
//   const { values, imageUrls } = data;

//   if (!values || values.length === 0) {
//     return <div>No data available for the hero section</div>;
//   }

//   const containerStyle: React.CSSProperties =  {
//     backgroundImage: `/bgimage.jpg`,
//     backgroundSize: 'cover', // or 'contain' depending on your needs
//     backgroundRepeat: 'no-repeat',
//     backgroundPosition: 'center center',
//     position: 'relative', // Ensure that the position is set to relative
//   };

//   return (
//     <>
    
//     <div className="ml-28 my-28 mr-20" style={containerStyle}>
//         <div className='flex'> 
//             <div>
//                 <Image src={imageUrls[0]} alt={`Image `} width={20} height={20} />
//             </div>
//             <div>
//                 <p className='mx-2 text-pink-500 text-sm'>{values[0]}</p>
//             </div>
//         </div>

//         <p className='mb-20 mt-2 text-6xl'>{values[2]}</p>
//         <div className='text-center text-black text-xl bg-gray-200 w-36 
//         hover:scale-105 transition-none duration-300 hover:cursor-pointer px-4 py-2 rounded-lg'>
//            <p>{values[3]}</p> 
//         </div>
      
//     </div>
    
//           </>
//   );
// };

// export default Hero;




import { getHeroSection } from 'lib/shopify';
import Image from 'next/image';
import Slider from './slider';

const Hero = async () => {
  const data = await getHeroSection();
  // console.log(data)
  const { values, imageUrls } = data;

  if (!values || values.length === 0) {
    return <div>No data available for the hero section</div>;
  }

  return (
    <div className='flex bg-[url(/bgimage.jpg)] bg-cover bg-no-repeat bg-center relative mt-10 mb-20' >
      <div className="ml-28 my-28 mr-20" >
        <div className='flex'>
          <div>
            <Image src={imageUrls[0]} alt={`Image `} width={20} height={20} />
          </div>
          <div>
            <p className='mx-2 text-pink-500 text-sm'>{values[0]}</p>
          </div>
        </div>

        <p className='mb-20 mt-2 text-6xl text-black'>{values[2]}</p>
        <div className='text-center text-black text-xl bg-gray-200 w-36 
        hover:scale-105 transition-none duration-300 hover:cursor-pointer px-4 py-2 rounded-lg'>
          <p>{values[3]}</p>
        </div>
      </div>
      <div>
        <Slider />
      </div>
    </div>
  );
};

export default Hero;
