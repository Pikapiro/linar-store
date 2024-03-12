
import Container from '@/components/ui/container';
import NoResults from '@/components/ui/no-results';
import ProductCard from '@/components/ui/product-card';


import getColors from '@/actions/get-colors';
import getSizes from '@/actions/get-sizes';

import Filter from './components/filter';
import MobileFilters from './components/mobile-filters';

export const revalidate = 0;



const CategoryPage = async () => {
  
  const products:string[] = ['בונדטק','אקריל','P.C uv','FR P.V.D.F','PVC FOAM']

  const sizes = await getSizes();
  const colors = await getColors();


  return (
    <div className="bg-white">
      <Container>
        {/* <Billboard 
          data={category.billboard}
        /> */}
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters sizes={sizes} colors={colors} />
            <div className="hidden lg:block">
              <Filter
                valueKey="sizeId" 
                name="Sizes" 
                data={sizes}
              />
              <Filter 
                valueKey="colorId" 
                name="Colors" 
                data={colors}
              />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((item) => (
                  <ProductCard key={item} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
