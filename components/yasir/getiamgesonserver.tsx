import { getCategoryImages } from 'lib/shopify';

export const CategorySliderServer = async () => {
  const res = await getCategoryImages();
  return res;
};