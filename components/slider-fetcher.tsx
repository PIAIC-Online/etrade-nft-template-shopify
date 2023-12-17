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


import { getSliderSection } from 'lib/shopify';
import CenterMode from './slider-rendrer';

const Slider = async () => {
  const res = await getSliderSection();

  // console.log(res.map((item: any, index: number) => {
  //   console.log(`Element at index ${index}:`, item);
  //   // You can do other operations on the element here
  //   return item; // Remember to return the transformed element if needed
  // }));


  return (
    

      // <SliderRenderer sliderData={ res} />
      <CenterMode sliderData={ res} />   
   
  )
}

export default Slider