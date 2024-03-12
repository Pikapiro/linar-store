import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";



const ProductList = (props:any) => {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">המוצרים שלנו</h3>
      {props.items.length === 0 && <NoResults />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {props.items.map((item:any) => (
          <ProductCard key={item} data={item} />
        ))}
      </div>
    </div>
   );
}
 
export default ProductList;
