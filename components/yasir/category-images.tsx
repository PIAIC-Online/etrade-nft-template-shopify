
import { getCategoryImages } from 'lib/shopify';
import CategorySliderObject from './category-slider';


const CategorySlider = async () => {
    const data = await getCategoryImages();
    
    
    
  return (
   
        <CategorySliderObject res = {data}/>
  );
};

export default CategorySlider;
