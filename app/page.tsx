import Hero from 'components/hero';
import Slider from 'components/slider';
import CategorySlider from 'components/yasir/category-images';
import { Suspense } from 'react';

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
    <div className='flex'>

    <Hero />
    <Slider />
    </div>
    <div>
      <CategorySlider />
    </div>
      {/* <ThreeItemGrid /> */}
      <Suspense>
        {/* <Carousel /> */}
        <Suspense>
          {/* <Footer /> */}
        </Suspense>
      </Suspense>
    </>
  );
}

