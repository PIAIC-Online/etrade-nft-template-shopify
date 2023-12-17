'use client'

// import Image from 'next/image';
// import { Component } from 'react';
// import Slider from 'react-slick';

// class SliderRenderer extends Component {
//   constructor(props: any) {
//     super(props);
//     this.state = {
//       centerSlideIndex: 0,
//     };
//   }

//   handleBeforeChange = (oldSlide: number, newSlide: number) => {
//     console.log(`Changing from slide ${oldSlide} to slide ${newSlide}`);

//     this.setState({
//       centerSlideIndex: newSlide,
//     });
//   };

//   handleAfterChange = (currentSlide: number) => {
//     this.setState({
//       centerSlideIndex: currentSlide,
//     });
//   };

//   render() {
//     // const { centerSlideIndex } = this.state;
//     const { sliderData }: any = this.props;

//     const settings = {
//       className: 'center',
//       centerMode: true,
//       infinite: true,
//       centerPadding: '60px',
//       slidesToShow: 3,
//       slideToScroll: 1,
//       speed: 400,
//       dots: true,
//       beforeChange: this.handleBeforeChange,
//       responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 3,
//             infinite: true,
//             dots: true,
//           },
//         },
//         {
//           breakpoint: 575,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             infinite: true,
//             dots: true,
//           },
//         },
//       ],
//     };

//     return (
//       <div className="mr-28 my-40 ml-10 flex">
//         <Slider {...settings}>
//           {sliderData.map((item: any, index: number) => (
//             <div key={index}>
//               <div className="p-1 transition duration-300 rounded-b-md hover:scale-105 ease-in-out rounded-md">
//                 <div className="">
//                   <Image
//                     className="rounded-t-md"
//                     src={item.imageURL}
//                     alt={item.key}
//                     width={500}
//                     height={500}
//                   />
//                 </div>
//                 <div className="text-center my-4">
//                   <p className="my-4">{item.value}</p>
//                   <p className="my-4">Rs.5000</p>
//                   <div className="my-4 bg-pink-500 rounded-md py-2 m-8 text-sm">
//                     Buy Product
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     );
//   }
// }

// export default SliderRenderer;


import Image from 'next/image';
import { Component } from 'react';
import Slider, { Settings } from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";


interface SliderDataItem {
  id: number;
  imageURL: string;
  key: string;
  value: string;
}

interface SliderRendererProps {
  sliderData: SliderDataItem[];
}

class CenterMode extends Component<SliderRendererProps> {
  constructor(props: SliderRendererProps) {
    super(props);
    this.state = {
      centerSlideIndex: 0,
    };
  }

  handleBeforeChange = (oldSlide: number, newSlide: number) => {
    console.log(`Changing from slide ${oldSlide} to slide ${newSlide}`);

    this.setState({
      centerSlideIndex: newSlide,
    });
  };

  handleAfterChange = (currentSlide: number) => {
    this.setState({
      centerSlideIndex: currentSlide,
    });
  };



  render() {
    const { sliderData } = this.props;

    const { centerSlideIndex } = this.state;
    console.log(centerSlideIndex)

    const settings: Settings = {
      className: 'center',
      centerMode: true,
      infinite: true,
      centerPadding: '60px',
      slidesToShow: 3,
      slideToScroll: 1,
      speed: 400,
      dots: true,
      beforeChange: this.handleBeforeChange,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
      ],
    };

    return (
      <div className="mr-28 my-40 shadow-x">
        <Slider {...settings}>
          {sliderData.map((item, index) => 
          <div key={index}>
          <div className= {centerSlideIndex === item.id - 1 
          ? "scale-150 p-10 text-3xl transform transition-transform transform-scale-150 " 
          : "p-1 transition duration-300 rounded-b-md hover:scale-105 ease-in-out rounded-md "}>
            <div className="">
              <Image
                className="rounded-t-md"
                src={item.imageURL}
                alt={item.key}
                width={500}
                height={500}
              />
            </div>
            <div className="text-center my-4">
              <p className="mt-2">{item.value}</p>
              <p className="">Rs.5000</p>
              <div className="mt-2 bg-pink-500 rounded-md py-2 text-sm text-white">Buy product</div>
            </div>
          </div>
        </div>

        
        )}
        </Slider>
      </div>
    );
  }
}

export default CenterMode;
